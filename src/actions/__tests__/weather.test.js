import { FETCH_WEATHER_DATA } from "../actionTypes"
import { fetchWeatherData } from "../weather"

describe('actions', () => {
 it('should create an action to fetch weather data', () => {
  const units = 'Imperial'
  const expectedAction = {
   type: FETCH_WEATHER_DATA,
   payload: {
    units
   }
  }
  expect(fetchWeatherData({ units })).toEqual(expectedAction)
 })
})