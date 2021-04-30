import { FETCH_WEATHER_DATA, FETCH_WEATHER_DATA_FAILED, FETCH_WEATHER_DATA_SUCCESSFUL } from '../actions/actionTypes'

const initialState = true;

const reducer = (state = initialState, action) => {
 switch (action.type) {
  case FETCH_WEATHER_DATA:
   return true;
  case FETCH_WEATHER_DATA_SUCCESSFUL:
   return false;
  case FETCH_WEATHER_DATA_FAILED:
   return false;
  default:
   return state;
 }
};

export default reducer;