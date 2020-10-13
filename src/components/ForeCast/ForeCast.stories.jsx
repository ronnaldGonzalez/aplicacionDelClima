import React from 'react';
import ForeCast from './ForeCast';

export default {
    title: "Forecast",
    component: ForeCast
}
const foreCastItemList = [
    {
        weekDay:"lunes",
        hour:10,
        temperature:10,
        state:"Clear"
    },
    {
        weekDay:"lunes",
        hour:11,
        temperature:10,
        state:"Clouds"
    },
    {
        weekDay:"lunes",
        hour:12,
        temperature:10,
        state:"drizzle"
    }
]

export const foreCastExample = () => <ForeCast foreCastItemList={foreCastItemList} ></ForeCast>