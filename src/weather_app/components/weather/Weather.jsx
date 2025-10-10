// import { Card } from '@mui/material' 
import {Card} from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import ClearSky from '../svgs/day/ClearSky'
import Temp from '../svgs/Temp'
import Sunrise from '../svgs/Sunrise'
import Wind from '../svgs/Wind'
import Pressure from '../svgs/Pressure'
import Humidity from '../svgs/Humidity'
import style from './weather.module.scss'
import Location from '../svgs/Location'
import Time from '../svgs/Time'
import { useSelector } from 'react-redux'
import TempMax from '../svgs/TempMax'
import TempMin from '../svgs/TempMin'
import Moment from 'react-moment'
import FewClouds from '../svgs/day/FewClouds'
import ScatteredClouds from '../svgs/day/ScatteredClouds'
import BrokenClouds from '../svgs/day/BrokenClouds'
import ShowerRain from '../svgs/day/ShowerRain'
import Rain from '../svgs/day/Rain'
import Thunderstorm from '../svgs/day/Thunderstorm'
import Snow from '../svgs/day/Snow'
import Mist from '../svgs/day/Mist'
// !nigth 
import ClearSkyNg from '../svgs/night/ClearSkyNg'
import ScatteredCloudsNg from '../svgs/night/ScatteredCloudsNg'
import FewCloudsNg from '../svgs/night/FewCloudsNg'
import BrokenCloudsNg from '../svgs/night/BrokenCloudsNg'
import ShowerRainNg from '../svgs/night/ShowerRainNg'
import RainNg from '../svgs/night/RainNg'
import ThunderstormNg from '../svgs/night/ThunderstormNg'
import SnowNg from '../svgs/night/SnowNg'
import MistNg from '../svgs/night/MistNg'
import Sunset from '../svgs/Sunset' 
import { time } from 'framer-motion'
function Weather() {
    const weather = useSelector(({weather})=>weather) ; 
    const [dateTime,setDateTime] = useState('')
    console.log(weather); 
    const displayIcon = ()=> {
        const nbr = weather.weather.icon.substring(0,2);
        if(weather.isLoading) {
            if(weather.dt < weather.sys.sunset){
                switch(nbr) {
                    case '01' : return <ClearSky width='250px' height='250px'/>
                    case '02' : return <FewClouds width='250px' height='250px'/>
                    case '03' : return <ScatteredClouds width='250px' height='250px'/>
                    case '04' : return <BrokenClouds width='250px' height='250px'/>
                    case '09' : return <ShowerRain width='250px' height='250px'/>
                    case '10' : return <Rain width='250px' height='250px'/>
                    case '11' : return <Thunderstorm width='250px' height='250px'/>
                    case '13' : return <Snow width='250px' height='250px'/>
                    case '15' : return <Mist width='250px' height='250px'/>
                }
            }else {
                 switch(nbr) {
                    case '01' : return <ClearSkyNg width='250px' height='250px'/>
                    case '02' : return <FewCloudsNg width='250px' height='250px'/>
                    case '03' : return <ScatteredCloudsNg width='250px' height='250px'/>
                    case '04' : return <BrokenCloudsNg width='250px' height='250px'/>
                    case '09' : return <ShowerRainNg width='250px' height='250px'/>
                    case '10' : return <RainNg width='250px' height='250px'/>
                    case '11' : return <ThunderstormNg width='250px' height='250px'/>
                    case '13' : return <SnowNg width='250px' height='250px'/>
                    case '15' : return <MistNg width='250px' height='250px'/>
                }
            }
        }
    }
  return (
      <Card className={style.card}>
    {weather.isLoading? 
    <Card.Body as={'div'}>
        <Card.Title as={'div'}>
            {/*Afficher le nom de ville et la date  */}
            <div  className={style.city}>
                {weather.name}
                <Location width='35px' height='35px' />
            </div>
            <div className={style.date}>
               <Moment format="llll" unix>{weather.dt}</Moment>
                <Time width='18px' height='18px'/>
                </div>
        </Card.Title>
        <Card.Text as={'div'}>
        {/*afficher le type de icon */}
            {displayIcon()}
            <div className={style.temp}>
            {Math.round(weather.main.temp)}°C 
                <Temp width='50px' height='40px'/>
            </div>
            <div>

                {weather.dt > weather.sys.sunset ? 'Good Night': 'Good Mornig' } {weather.name}
            </div>
            <div className={style.info}>
                {/* sunrise */}
                <div>
                    <div>
                        <Sunrise width='25px' height='25px'/>
                        Sunrise
                    </div>
                    <div> <Moment
                unix 
                format='h:m'
                >
                    {weather.sys.sunrise}
                </Moment> AM</div>
                </div>
                {/* sanset */}
                <div>
                    <div>
                        <Sunset width='25px' height='25px'/>
                        Sunrise
                    </div>
                    <div> <Moment
                unix 
                format='hh:mm'
                >
                    {weather.sys.sunset}
                </Moment> PM</div>
                </div>
                {/* wind */}
                <div>
                    <div>
                        <Wind width='25px' height='25px'/>
                        Wind
                    </div>
                    <div>{weather.wind.speed}m/s</div>
                </div>
                {/* .Pressure */}
                <div>
                    <div>
                        <Pressure width='25px' height='25px'/>
                        Pressure
                    </div>
                    <div>{weather.main.pressure} pa</div>
                </div>
                {/* Humidity */}
                <div>
                    <div>
                        <Humidity width='25px' height='25px'/>
                        Humidity
                    </div>
                    <div>{weather.main.humidity}%</div>
                </div>
                {/* temp max */}
                <div>
                    <div>
                        <TempMax width='25px' height='25px'/>
                        Temp Max
                    </div>
                    <div>{Math.round(weather.main.temp_max)}</div>
                </div>
            </div>
        </Card.Text>
    </Card.Body>
    : 
    <Card.Body className={style.noItem} as={'div'}>
        <Card.Title>Please Choose Your Country</Card.Title>    
    </Card.Body>}
    
   </Card>
  )
}
export default Weather