import { FETCH_WEATHER_DATA } from '../../actions/actionTypes';
import { watchfetchWeatherData, fetchWeatherDataAsync } from '../weather'
import { takeLatest } from 'redux-saga/effects';

const genObject = watchfetchWeatherData();
test('Should return weather data in case of success',()=>{
 expect(genObject.next().value).toEqual(takeLatest(FETCH_WEATHER_DATA, fetchWeatherDataAsync));
})

it('should be done on next iteration', () => {
 expect(genObject.next().done).toBeTruthy();
});