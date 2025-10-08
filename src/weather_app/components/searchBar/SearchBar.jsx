import {Autocomplete, Button,TextField} from '@mui/material' ;
import React, { useState } from 'react'
import style from './search.module.scss'
import SvgHoc from '../svgs/SvgHoc';
import Location from '../svgs/Location';
import { useDispatch } from 'react-redux';
import { setData } from '../../features/weather/WeatherSlice';
function SearchBar() {
    const GEO_API_KEY = process.env.REACT_APP_GEO_API_KEY ;  
    const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API ; 
    const [cities,setCities] = useState([]) ; 
    const [unity,setUnity] = useState('metric')
    const dispatch = useDispatch() ; 
    //* prendre les ville 
    const handelInputChange =(e)=>{
      const value = e.currentTarget.value ; 
      fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&type=city&format=json&apiKey=${GEO_API_KEY}`)
      .then(response=>response?.json())
      .then(json => setCities(json.results.map(data=>{
        const {city,country,lat,lon,timezone}=data
        return {city,country,lat,lon,timezone}
      }))); 
    }
    // ! prendre état de méteo
    const handelAutocompleteChange =async (e,value)=>{
        const {lat,lon,timezone} = value  
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&units=${unity}&lon=${lon}&appid=${WEATHER_API_KEY}`)
        .then(response=>response.json())
        .then(data=>{
          const {clouds, main, name, sys, weather, wind} = data
          dispatch(setData({clouds, main, name, sys, weather, wind}))
        }) ; 
      }
  return (
    <div className={style.searchContainer}>
    <Autocomplete
    onChange={handelAutocompleteChange}
    clearOnBlur = {false} 
    className={style.searchInput}
    getOptionLabel={options=>options.city}
    options={cities}
    renderInput={(params)=>{
        return <TextField 
        onChange={handelInputChange}
        className={style.textField}{...params} label={'Entre Your City ...'}/>
    }}
    />
    {/* <div className={style.location}>
      <Location width='50px' height='50px'/>
      </div> */}
    </div>
  )
}

export default SearchBar