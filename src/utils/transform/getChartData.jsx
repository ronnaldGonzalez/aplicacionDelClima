import moment from 'moment';
import {toCelcius } from './../utils';
const getChartData = (data) => {
    const dayAhead = [0, 1, 2, 3, 4, 5];
    const days = dayAhead.map(d => moment().add(d, 'd'));
    const dataAux = days.map(day => {
        const temsObjArray = data.list.filter(item => {
            const dayOfYear = moment.unix(item.dt).dayOfYear();
            return dayOfYear === day.dayOfYear();
        })
        const temps = temsObjArray.map(item => item.main.temp);
        return ({
            dayHour: day.format('ddd'),
            min: toCelcius(Math.min(...temps)),
            max: toCelcius(Math.max(...temps)),
            hasTemps: (temps.length > 0 ? true : false)
        })

    }).filter(item => item.hasTemps)

    return dataAux;
}

export default getChartData;