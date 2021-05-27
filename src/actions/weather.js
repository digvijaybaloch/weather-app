import { CONVERT_TEMPERATURE, FETCH_WEATHER_DATA } from "./actionTypes"

export const fetchWeatherData = ({ units }) => {
 return {
  type: FETCH_WEATHER_DATA,
  payload: {
   units
  }
 }
}

export const convertTemperature = ({ selectedTemp }) => {
 return {
  type: CONVERT_TEMPERATURE,
  payload: {
   selectedTemp
  }
 }
}