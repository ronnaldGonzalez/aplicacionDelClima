import React from 'react';
import WeatherDetails from './WeatherDetails'

export default {
    title:"wheather details",
    component: WeatherDetails
}
export const WeatherDetailsExample = () =>  <WeatherDetails humidity={10} wind={20}></WeatherDetails>
