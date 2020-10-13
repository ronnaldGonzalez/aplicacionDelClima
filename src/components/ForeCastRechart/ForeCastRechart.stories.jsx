import React from 'react';
import ForeCastRechart from './ForeCastRechart';

export default {
    title:"foreCastRechart",
    component:ForeCastRechart
}

const data = [
    {
        "dayHour": "jue 18",
        "min": 14,
        "max": 12,
    },
    {
        "dayHour": "vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "vie 12",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "sav 06",
        "min": 15,
        "max": 22,
    },
    {
        "dayHour": "sav 12",
        "min": 12,
        "max": 19,
    }
]

export const ForeCastRechartExample = () => <ForeCastRechart data={data}></ForeCastRechart>