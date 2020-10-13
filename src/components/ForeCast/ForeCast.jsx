import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ForeCastItem from './../ForeCastItem';
import { validValues } from './../IconState'

const renderForeCastItem = (forecast) => {
    const { hour, state, temperature, weekDay } = forecast;
    return (
        <Grid
            data-testid="forecast-item-container"
            item key={`${weekDay}${hour}`}>
            <ForeCastItem
                hour={hour}
                state={state}
                temperature={temperature}
                weekDay={weekDay}>
            </ForeCastItem>
        </Grid>
    )
}

const ForeCast = ({ foreCastItemList }) => {
    return (
        <Grid container
            justify="center"
            alignItems="center">
            {
                foreCastItemList.map(forecast => renderForeCastItem(forecast))
            }

        </Grid>
    );
};

ForeCast.propTypes = {
    // foreCastItemList: PropTypes.array.isRequired,
    foreCastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf(validValues).isRequired,
        temperature: PropTypes.number.isRequired,
    })).isRequired,

};

export default ForeCast;