import reducer from '../weather'
import { FETCH_WEATHER_DATA, FETCH_WEATHER_DATA_FAILED, FETCH_WEATHER_DATA_SUCCESSFUL } from '../../actions/actionTypes'

describe('weather reducer', () => {
 it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
   data: null
  })
 })  
 it('should handle FETCH_WEATHER_DATA_FAILED', () => {  
  expect(
   reducer([], {
    type: FETCH_WEATHER_DATA_FAILED
   })
  ).toEqual({
   data: null
  })
 })  
 it('should handle FETCH_WEATHER_DATA_SUCCESSFUL', () => {  
  expect(
   reducer([], {
    type: FETCH_WEATHER_DATA_SUCCESSFUL,
    payload: {
     weather: []
    }
   })
  ).toEqual({
   data: []
  })
 })
})