import React from 'react';
import { useHistory } from 'react-router-dom';
import CityList from './../components/CityList';
import AppFrame from './../components/AppFrame';
import Paper from '@material-ui/core/Paper';
import {getCities} from './../utils/serviceCities'

const MainPage = ({actions,data}) => {
    const history = useHistory();

    const onClickHandle = (city, countryCode) => {
        history.push(`/city/${countryCode}/${city}`)
    }

    return (
        <AppFrame>
            <Paper elevation={1}>
                <CityList 
                data={data}
                cities={getCities()}
                onClickCity={onClickHandle}
                actions={actions} ></CityList>
            </Paper>
        </AppFrame>
    );
};

export default MainPage;