import React from 'react';
import Forecast from './ForeCast';
import { render } from '@testing-library/react';

const foreCastItemList = [
    {
        weekDay: "lunes",
        hour: 10,
        temperature: 10,
        state: "Clear"
    },
    {
        weekDay: "lunes",
        hour: 22,
        temperature: 10,
        state: "Clear"
    },
    {
        weekDay: "lunes",
        hour: 33,
        temperature: 10,
        state: "Clear"
    }
]
test('forcast render ', async () => {
    const { findAllByTestId } = render(<Forecast foreCastItemList={foreCastItemList}></Forecast>);
    const forecastItems = await findAllByTestId("forecast-item-container");
    expect(forecastItems).toHaveLength(3);
})