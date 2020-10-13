import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import  CityList  from './CityList';


const cities = [{
    city: "Buenos Aires",
    country: "Argentina",
    countryCode:"AR"
},
{
    city: "Bogota",
    country: "Colombia",
    countryCode:"CO"
},
{
    city: "Madrid",
    country: "España",
    countryCode:"ES"
},
{
    city: "Ciudad de Mexico",
    country: "Mexico",
    countryCode:"MX"
}
]
test("CityList", async () => {
    const fnClickOnItem = jest.fn();
    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole('listitem')

    expect(items).toHaveLength(4)
})

test("CityList click on item", async () =>{
    const fnClickOnItem = jest.fn();

    const { findAllByRole} = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole('listitem');

    fireEvent.click(items[0]);

    expect(fnClickOnItem).toHaveBeenCalledTimes(1);
})