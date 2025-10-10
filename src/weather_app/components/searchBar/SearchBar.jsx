import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import style from './search.module.scss';
import Location from '../svgs/Location';
import { useDispatch } from 'react-redux';
import { setData } from '../../features/weather/WeatherSlice';
import { motion } from 'framer-motion';
function SearchBar() {
  const GEO_API_KEY = process.env.REACT_APP_GEO_API_KEY;
  const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API;
  const [cities, setCities] = useState([]);
  const [unity] = useState('metric');
  const [geoLocation, setGeoLocation] = useState(null);
  const [isCurrentGeoLocation, setIsCurrentGeoLocation] = useState(false);
  const dispatch = useDispatch();

  // ✅ Fonction pour obtenir la position actuelle
  const getGeoLocation = () => {
    if (!navigator.geolocation) {
      console.error("La géolocalisation n'est pas supportée par ce navigateur.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setIsCurrentGeoLocation(true);
        setGeoLocation({
          lon: position.coords.longitude,
          lat: position.coords.latitude,
        });
      },
      (error) => {
        console.error("Erreur de géolocalisation :", error);
      }
    );
  };

  // ✅ useEffect pour récupérer la position au chargement
  useEffect(() => {
    getGeoLocation();
  }, []); // ← dépendance vide (exécuté 1 seule fois)

  // ✅ useEffect pour récupérer la météo après obtention de la géolocalisation
  useEffect(() => {
    if (geoLocation) {
      getData(geoLocation.lat, geoLocation.lon);
    }
  }, [geoLocation]); // ← exécution quand geoLocation change

  // ✅ Fonction pour récupérer les villes tapées
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!value) return;

    fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&type=city&format=json&apiKey=${GEO_API_KEY}`
    )
      .then((response) => response.json())
      .then((json) => {
        if (!json.results) return;
        setCities(
          json.results.map((data) => {
            const { city, country, lat, lon, timezone, formatted } = data;
            return { city, country, lat, lon, timezone, formatted };
          })
        );
      })
      .catch((err) => console.error("Erreur API Geoapify :", err));
  };

  // ✅ Fonction pour récupérer la météo (API OpenWeather)
  const getData = (lat, lon) => {
    if (!lat || !lon) return;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unity}&appid=${WEATHER_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Données météo :", data);
        const { clouds, dt, main, name, sys, weather, wind } = data;
        dispatch(setData({ clouds, dt, main, name, sys, weather, wind }));
      })
      .catch((err) => console.error("Erreur API météo :", err));
  };

  // ✅ Lorsqu’une ville est sélectionnée dans la liste
  const handleCitySelect = (event, value) => {
    if (value && value.lat && value.lon) {
      setIsCurrentGeoLocation(false);
      getData(value.lat, value.lon);
    }
  };

  return (
    <motion.div 
    initial={{
      scale : 0
    }}
    animate ={{
      scale : 1,
      x :'-50%',
      y:'-50%'
    }}
    transition={{
      duration : 1     
    }}
    className={style.searchContainer}>
      <Autocomplete
        onChange={handleCitySelect}
        clearOnBlur={false}
        className={style.searchInput}
        getOptionLabel={(option) => option.formatted || ''}
        options={cities}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Entrez votre ville..."
            onChange={handleInputChange}
            className={style.textField}
          />
        )}
      />
      <div className={style.location} onClick={getGeoLocation}>
        <Location width="50px" height="50px" />
      </div>
    </motion.div>
  );
}

export default SearchBar;
