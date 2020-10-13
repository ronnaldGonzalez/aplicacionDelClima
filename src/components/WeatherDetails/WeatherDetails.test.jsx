import React from 'react';
import WeatherDetails from './WeatherDetails';
import { render } from '@testing-library/react';

test("weatherDetail render", async () => {
    const { findByText } = render(<WeatherDetails humidity={10} wind={20}></WeatherDetails>)
    const wind = await findByText(/20/);
    const humidity = await findByText(/10/);
    expect(wind).toHaveTextContent("Viento: 20 km/h")
    expect(humidity).toHaveTextContent("Humedad: 10%")
})