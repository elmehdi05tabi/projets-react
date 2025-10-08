import { configureStore } from "@reduxjs/toolkit";
import  WeatherSlice  from "../../features/weather/WeatherSlice";
const store = configureStore({
    reducer : {
        weather : WeatherSlice
    }
})
export default store