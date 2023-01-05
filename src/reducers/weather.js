import { convertTemp } from '../util/convertTemp'
import { CONVERT_TEMPERATURE, FETCH_WEATHER_DATA_FAILED, FETCH_WEATHER_DATA_SUCCESSFUL } from '../actions/actionTypes'

const initialState = {
 data: null,
 error: null
}

const reducer = (state = initialState, action) => {
 switch (action.type) {
  case FETCH_WEATHER_DATA_SUCCESSFUL:
   return {
     ...state,
     data: action.payload.weather,
     error: null
   };
  case CONVERT_TEMPERATURE:   
   let newList = state.data.list && state.data.list.map(element => element = {
    ...element,
    main: {
     ...element.main,
     temp: convertTemp(action.payload.selectedTemp, element.main.temp)
    }
   } )
   let newData = {
    ...state.data,
    list: newList
   }
   console.log(newList)
   return {
     ...state,
     data: newData,
     error: null
   };
  case FETCH_WEATHER_DATA_FAILED:
   return {
    ...state,
    data: [],
    error: action.payload.error
  };
  default:
   return state;
 }
};

export default reducer;