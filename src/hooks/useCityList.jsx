import { useState, useEffect } from 'react';
import axios from 'axios';
import { getWeatherUrl } from './../utils/url';
import { getCityCode } from './../utils/utils';
import getApiweather from './../utils/transform/getApiWeather';
const useCitylist = (cities, onSetAllWeather,allWeather) => {

    // const [allWeather, setAllWeather] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const url =getWeatherUrl({city,countryCode});

            try {
                onSetAllWeather({ [getCityCode(city, countryCode)] : {} });
                const response = await axios.get(url);

                const allWeatherAux = getApiweather(response, city, countryCode);

                // setAllWeather(allWeather => ({ ...allWeather, ...allWeatherAux }));
                onSetAllWeather(allWeatherAux );
            } catch (error) {
                if (error.response) { // errores que nos responde el servidor
                    // const { data, status } = error.response;
                    setError("Ha ocurrido un eror en el servidor del clima")
                } else if (error.request) { // Errores que suceden por no llegar al server, ejemplo sin internet o servidor sin acceso
                    setError("Verifique la conexion a internet");
                } else { // errores imprevistos
                    setError("Error al cargar los datos");
                }
            }
        }

        cities.forEach(({ city, countryCode }) => {
            if(!allWeather[getCityCode(city, countryCode)])
            {
                setWeather(city, countryCode)
            }
        });
    }, [cities,onSetAllWeather,allWeather])
    return { error, setError }
}

export default useCitylist;