import {toCelcius } from './../utils';
import moment from 'moment';

const getForecastItemList = (data) => {
    const interval = [4, 8, 12, 16, 20, 24];
    const forecastItemListAux = data.list
        .filter((item, index) => interval.includes(index))
        .map(item => {
            return ({
                hour: moment.unix(item.dt).hour(),
                weekDay: moment.unix(item.dt).format('dddd'),
                state: item.weather[0].main,
                temperature: toCelcius(item.main.temp)
            })
        })

        return forecastItemListAux;
}

export default getForecastItemList;