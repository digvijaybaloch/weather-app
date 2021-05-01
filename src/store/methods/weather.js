import { api } from '../axios'

export async function fetchWeatherData({ units }){
 return api.get(
  '/forecast',{
   params: {
    q: 'Jodhpur,in',
    APPID: '082cf4ca3fb7bde8e270485bb0bbf3a6',
    // APPID: '75f972b80e26f14fe6c920aa6a85ad57',
    cnt: '40',
    units
   }
  }
 )
}