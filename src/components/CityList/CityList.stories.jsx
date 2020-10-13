import React from 'react';
import CityList from './CityList';
import { action } from '@storybook/addon-actions'

export default {
    title: "cityList",
    component: CityList
}
const cities=[{
    city:"Buenos Aires",
    country:"Argentina"
},
{
    city:"santiago",
    country:"Chile"
}
]
export const CityListExample = () => <CityList cities={cities} onClickCity={action("click en city")}/>