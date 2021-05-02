import reducer from '../loading'
import { FETCH_WEATHER_DATA, FETCH_WEATHER_DATA_FAILED, FETCH_WEATHER_DATA_SUCCESSFUL } from '../../actions/actionTypes'

describe('loading reducer', () => {
 it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(true)
 })
 it('should handle FETCH_WEATHER_DATA', () => {  
  expect(
   reducer([], {
    type: FETCH_WEATHER_DATA
   })
  ).toEqual(true)
 })  
 it('should handle FETCH_WEATHER_DATA_FAILED', () => {  
  expect(
   reducer([], {
    type: FETCH_WEATHER_DATA_FAILED
   })
  ).toEqual(false)
 })  
 it('should handle FETCH_WEATHER_DATA_SUCCESSFUL', () => {  
  expect(
   reducer([], {
    type: FETCH_WEATHER_DATA_SUCCESSFUL
   })
  ).toEqual(false)
 })
})