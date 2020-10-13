import React, { useState, useCallback, useMemo } from 'react';
// import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import MainPage from './pages/MainPage';
import WelcomePage from './pages/WelcomePage';
import CityPage from './pages/CityPage';
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
    const [allWeather, setAllWeather] = useState({});
    const [allchartData, setAllCharData] = useState({});
    const [allforeCastItemList, setAllforeCastItemList] = useState({})

    const onSetAllWeather = useCallback((weatherCity) => (
        setAllWeather(allWeather => (
            { ...allWeather, ...weatherCity }
        ))
    ), [setAllWeather]);

    const onSetCharData = useCallback((charDataCity)=>{
        setAllCharData(charData =>({...charData,...charDataCity}));
    },[setAllCharData])

    const onSetforeCastItemList = useCallback((foreCastItemListCity)=>{
        setAllforeCastItemList(forecastItenList=>({...forecastItenList,...foreCastItemListCity}))
    },[setAllforeCastItemList])

    const actions = useMemo(() => (
        {
            onSetAllWeather,
            onSetCharData,
            onSetforeCastItemList
        }
    ), [onSetAllWeather, onSetCharData, onSetforeCastItemList])

    const data = useMemo(() => (
        {
            allWeather,
            allchartData,
            allforeCastItemList
        }
    ),[ allWeather,allchartData,allforeCastItemList])
    return (

        <Router>
            <Switch>
                <Route exact path="/">
                    <WelcomePage></WelcomePage>
                </Route>
                <Route path="/main">
                    <MainPage data={data} actions={actions}></MainPage>
                </Route>
                <Route path="/city/:countryCode/:city">
                    <CityPage data={data} actions={actions} ></CityPage>
                </Route>
                <Route>
                    <NotFoundPage></NotFoundPage>
                </Route>
            </Switch>
        </Router>
    );
};

App.propTypes = {

};

export default App;