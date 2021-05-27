import {
 FETCH_WEATHER_DATA, FETCH_WEATHER_DATA_FAILED, FETCH_WEATHER_DATA_SUCCESSFUL
} from '../actions/actionTypes'
import { call, put, takeLatest } from 'redux-saga/effects'
import * as api from '../store/api'

export function* fetchWeatherDataAsync(action) {
 try {
  const { units } = action.payload;
  const result = yield call(() => api.fetchWeatherData({ units }).then(response => response.data));
  yield put({
   type: FETCH_WEATHER_DATA_SUCCESSFUL,
   payload: {
    weather:{
     city: result.city,
     list: result.list
    }
   }
  })
 } catch (error) {
  yield put({
   type: FETCH_WEATHER_DATA_FAILED,
   payload: {
    error: error.message
   }
  })
 }
}

export function* watchfetchWeatherData() {
 yield takeLatest(FETCH_WEATHER_DATA, fetchWeatherDataAsync)
}