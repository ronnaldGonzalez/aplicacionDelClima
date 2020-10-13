import React from 'react'
import CityInfo from './CityInfo'
import 'typeface-roboto'

export default {
    title: 'cityInfo',
    component : CityInfo
}

export const CityExample = () => <CityInfo city= {'buenos aires'} country={'Argentina'}></CityInfo>