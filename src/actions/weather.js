import { FETCH_WEATHER_DATA } from "./actionTypes"

export const fetchWeatherData = ({ units }) => {
 return {
  type: FETCH_WEATHER_DATA,
  payload: {
   units
  }
 }
}