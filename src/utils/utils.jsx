import convertunits from 'convert-units';

export const getCityCode = (city, countryCode)=>`${city}-${countryCode}`;

export const toCelcius = (temp) => Number(convertunits(temp).from('K').to('C')).toFixed(0)