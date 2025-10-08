import { createSlice } from "@reduxjs/toolkit";
const initialState = {
 clouds: undefined,
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
    isLoading : false
}
 const  WeatherSlice = createSlice({
    name: 'weather',
    initialState : initialState,
    reducers : {
        setData : (state,action)=>{
            const {clouds, main, name, sys, weather, wind} = action.payload 
            state.clouds = clouds 
            state.main = main 
            state.name = name 
            state.sys = sys 
            state.weather = weather[0]
            state.wind = wind 
            state.isLoading = true
        }
    }
})
export const {setData} = WeatherSlice.actions ; 
export default  WeatherSlice.reducer