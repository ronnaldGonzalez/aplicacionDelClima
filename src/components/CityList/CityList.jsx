import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid'
import useCitylist from './../../hooks/useCityList'
import CityInfo from './../CityInfo'
import Weather from './../Weather';
import Alert from '@material-ui/lab/Alert';
import { getCityCode } from './../../utils/utils'


const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city, country, countryCode } = cityAndCountry;

    return (
        <li
            key={getCityCode(city, countryCode)}
            onClick={() => eventOnClickCity(city, countryCode)}>
            <Grid container
                justify="center"
                alignItems="center">
                <Grid item
                    md={8}
                    xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item
                    md={3}
                    xs={12}>
                    <Weather
                        temperature={weather && weather.temperature}
                        state={weather && weather.state} />
                </Grid>
            </Grid>
        </li>
    )
}



const CityList = ({ cities, onClickCity , actions,data}) => {
    const {onSetAllWeather} = actions;
    const {allWeather}=data;

    const { error, setError } = useCitylist(cities,onSetAllWeather,allWeather);
    return (
        <div>
            {
                error && <Alert onClose={() => setError(null)} severity="error">{error}</Alert>
            }
            <ul>
                {
                    cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry,
                        allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]))
                }
            </ul>
        </div>

    );
};

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired,
};

export default CityList;