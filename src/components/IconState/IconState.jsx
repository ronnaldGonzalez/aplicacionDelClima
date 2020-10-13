import React from 'react';
import PropTypes from 'prop-types';
import {
    WiDayCloudy,
    WiDaySunny,
    WiRain,
    WiSnow,
    WiRaindrop,
    WiThunderstorm
} from 'react-icons/wi'


export const validValues = [
    "Clouds",
    "Clear",
    "Rain",
    "Snow",
    "Drizzle",
    "Thunderstorm"
]
const stateByName = {
    Clouds: WiDayCloudy,
    Clear: WiDaySunny,
    Rain: WiRain,
    snow:WiSnow,
    Drizzle:WiRaindrop,
    Thunderstorm:WiThunderstorm
}
const renderState = state => {
    let Icon = stateByName[state]
    return <Icon />
}
const IconState = ({ state }) => {
    return (
         renderState(state) 
    );
};

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired,
};

export default IconState;