import React, { useMemo } from 'react';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import CityInfo from './../components/CityInfo';
import Weather from './../components/Weather';
import WeatherDetails from './../components/WeatherDetails';
import ForeCastRechart from './../components/ForeCastRechart';
import ForeCast from './../components/ForeCast';
import AppFrame from './../components/AppFrame';
import Paper from '@material-ui/core/Paper';
import useCityPage from './../hooks/useCityPage';
import useCityList from './../hooks/useCityList';
import { getCityCode } from './../utils/utils';
import { getCountryNameByCountryCode } from './../utils/serviceCities';




const CityPage = ({ data, actions }) => {
    const { allWeather, allchartData, allforeCastItemList } = data;
    const { onSetAllWeather, onSetCharData, onSetforeCastItemList } = actions;
    const { city, countryCode } = useCityPage(allchartData, allforeCastItemList, onSetCharData, onSetforeCastItemList);

    const cities = useMemo(() => (
        [{ city, countryCode }]), [city, countryCode]
    )

    useCityList(cities, onSetAllWeather, allWeather);
    const cityCode = getCityCode(city, countryCode);
    const weather = allWeather[cityCode];
    const chartData = allchartData[cityCode];
    const foreCastItemList = allforeCastItemList[cityCode];
    console.log('foreCastItemList',data);
    const country = getCountryNameByCountryCode(countryCode);
    const state = weather && weather.state;
    const temperature = weather && weather.temperature;;
    const humidity = weather && weather.humidity;
    const wind = weather && weather.wind;
    return (
        <AppFrame>
            <Paper>
                <Grid container
                    justify="center">
                    <Grid item xs={12}>
                        <CityInfo city={city} country={country}></CityInfo>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item xs={8}>
                            <Weather state={state} temperature={temperature}></Weather>
                        </Grid>
                        <Grid item xs={4}>
                            <WeatherDetails humidity={humidity}
                                wind={wind}></WeatherDetails>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        {
                            !chartData && !foreCastItemList && <LinearProgress />
                        }
                    </Grid>
                    <Grid item>
                        {
                            chartData && <ForeCastRechart data={chartData}></ForeCastRechart>
                        }

                    </Grid>
                    <Grid item>
                        {
                            foreCastItemList && <ForeCast foreCastItemList={foreCastItemList}></ForeCast>
                        }

                    </Grid>
                </Grid>
            </Paper>
        </AppFrame>
    );
};

export default CityPage;