import React from 'react';
import Weather from './Weather';

export default{
    title: 'weather',
    component: Weather
}

export const WeahterCloud = () =><Weather temperature={10} state={"Clouds"}></Weather>
export const Weahtersunny = () =><Weather temperature={10} state={"drizzle"}></Weather>