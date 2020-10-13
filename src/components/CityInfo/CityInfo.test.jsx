import React from 'react';
import { render } from '@testing-library/react'
import CityInfo from './CityInfo'; // SUT system under testing

test("cityinfo render", async () =>{
  // AAA
  // arange 
  // act 
  // assert
  const city="Buenos Aires"
  const country="Argentina";
  //renderiza el componente y retorna funciones
  const { findAllByRole } = render(<CityInfo city={city} country={country}></CityInfo>)
//   busca todos los comonentes heading h1 h2 h3 etc§§
// retorna un array de componentes
  const cityAndCountryComponent = await findAllByRole('heading')
// assert 

    expect(cityAndCountryComponent[0]).toHaveTextContent(city);
    expect(cityAndCountryComponent[1]).toHaveTextContent(country);
})