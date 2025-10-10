import { createSlice } from "@reduxjs/toolkit";
const initialState = {
 clouds: undefined,
 dt : undefined ,
    main: {
        feels_like: undefined
    },
    name: undefined,
    sys: {
        country: undefined
    },
    weather: undefined,
    wind: {
        speed: undefined
    },
    timezone : {undefined} ,
    formatted : undefined, 
    isLoading : false
}
 const  WeatherSlice = createSlice({
    name: 'weather',
    initialState : initialState,
    reducers : {
        setData : (state,action)=>{
            const {clouds,dt, main, name, sys, weather, wind,timezone,formatted} = action.payload 
            state.clouds = clouds 
            state.dt = dt
            state.main = main 
            state.name = name 
            state.sys = sys 
            state.weather = weather[0]
            state.wind = wind 
            state.isLoading = true
            state.timezone = timezone
            state.formatted = formatted
        }
    }
})
export const {setData} = WeatherSlice.actions ; 
export default  WeatherSlice.reducer    