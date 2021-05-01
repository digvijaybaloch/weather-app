import { all, fork } from 'redux-saga/effects'

import { watchfetchWeatherData } from './weather'

export function* rootSaga() {
 yield all([
  fork(watchfetchWeatherData),
 ])
}