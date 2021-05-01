import { FETCH_WEATHER_DATA_FAILED, FETCH_WEATHER_DATA_SUCCESSFUL } from '../actions/actionTypes'

const initialState = {
 data: null,
}

const reducer = (state = initialState, action) => {
 switch (action.type) {
  case FETCH_WEATHER_DATA_SUCCESSFUL:
   return {
     ...state,
     data: action.payload.weather
   };
  case FETCH_WEATHER_DATA_FAILED:
   return {
    ...state,
    data: null
  };
  default:
   return state;
 }
};

export default reducer;