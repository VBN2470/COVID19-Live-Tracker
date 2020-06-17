
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

import { Cards, Chart, Country } from './components/index';

function App() {

    const [data, setData] = useState({});
    const [dailyData, setDailyData] = useState({});
    const [countryList, setCountryList] = useState({});
    const [country, setCountry] = useState('');

    let url = 'https://covid19.mathdro.id/api';

    const getData = async country => {
        if (country) url = `${url}/countries/${country}`;
        const currentData = await axios.get(url);
        setData(currentData.data);
    }

    const getDailyData = async () => {
        const dailyData = await axios.get(`${url}/daily`);
        setDailyData(dailyData.data);
    }
    
    const getCountryList = async () => {
        const countryList = await axios.get(`${url}/countries`);
        setCountryList(countryList.data.countries.map(country => country.name));
    }
    
    const handleChange = async country => {
        setCountry(country);
        getData(country);
    }

    return (
        <div className="App" style={{position: 'relative'}}>
            <h1 id="title" style={{marginTop: '1rem'}}>COVID-19 Live Tracker</h1>
            <div className="container">
                <Cards
                    country={country}
                    data={data}
                    getData={getData}/>
                <Country
                    countryList={countryList}
                    getCountryList={getCountryList}
                    handleChange={handleChange} />
                <Chart
                    country={country}
                    dailyData={dailyData}
                    data={data}
                    getDailyData={getDailyData}/>
            </div>
        </div>
    );
}

export default App;
