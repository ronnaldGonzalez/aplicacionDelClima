import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'moment/locale/es';
import { getForecastUrl } from './../utils/url';
import getChartData from './../utils/transform/getChartData';
import getForecastItemList from './../utils/transform/getForecastItemList';
import { getCityCode } from './../utils/utils';
const useCityPage = (allchartData, allforeCastItemList, onSetCharData, onSetforeCastItemList) => {
    const { city, countryCode } = useParams();

    useEffect(() => {
        const getForecast = async () => {
            const url = getForecastUrl({ city, countryCode });
            const cityCode = getCityCode(city, countryCode);
            try {
                const { data } = await axios.get(url);
                const dataAux = getChartData(data);

                onSetCharData({ [cityCode]: dataAux });

                const forecastItemListAux = getForecastItemList(data);
                onSetforeCastItemList({ [cityCode]: forecastItemListAux });
            } catch (error) {
                console.log(error)
            }

        }

        const cityCode = getCityCode(city, countryCode);
        if (allchartData && allforeCastItemList && !allchartData[cityCode] && !allforeCastItemList[cityCode]) {
            getForecast();
        }


    }, [city, countryCode, onSetCharData, onSetforeCastItemList])

    return { city, countryCode };
}


export default useCityPage;