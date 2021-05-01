import { api } from '../axios'
import config from "../../config.json"

export async function fetchWeatherData({ units }){
 return api.get(
  '/forecast',{
   params: {
    q: config['location2'],
    APPID: config['APPID'],
    cnt: '40',
    units
   }
  }
 )
}