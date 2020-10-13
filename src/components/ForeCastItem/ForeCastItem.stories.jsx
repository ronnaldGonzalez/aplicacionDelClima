
import React from 'react';
import ForeCastItem from './ForeCastItem';

export default{
    title: 'forecastItem',
    component: ForeCastItem
}
export const LunesSoleado = () =><ForeCastItem weekDay={"lunes"} hour={10} temperature={10} state={"Clear"}></ForeCastItem>
// export const Weahtersunny = () =><ForeCastItem weekDay={"martes"} hour={"11:20"} temperature={"10"} state={"fog"}></ForeCastItem>