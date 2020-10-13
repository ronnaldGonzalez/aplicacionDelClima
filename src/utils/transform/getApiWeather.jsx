import {toCelcius,getCityCode } from './../utils';
const getAllWeather = (response, city, countryCode) => {
    const { data } = response;
    const temperature = toCelcius(data.main.temp);
    const humidity = data.main.humidity;
    const wind = data.wind.speed;
    const state = data.weather[0].main;
    const propName = getCityCode(city, countryCode);
    const propValue = { temperature, state, humidity,wind };
    return  ({ [propName]: propValue });
}
export default getAllWeather;