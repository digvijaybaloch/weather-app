import { combineReducers } from 'redux'

import loading from './loading'
import weather from './weather'

const rootReducer = combineReducers({
 loading, weather
})

export default rootReducer;