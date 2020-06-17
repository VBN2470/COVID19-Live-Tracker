
import React, { useEffect } from 'react';
import '../App.css';
import { Line, Bar } from 'react-chartjs-2';


export const Chart = ({ country, data, dailyData, getDailyData }) => {

    useEffect(() => {
        getDailyData();
    }, []);

    const { confirmed, recovered, deaths, lastUpdate } = data;

    const myGlobalChart = (
        dailyData.length
        ? <Line 
            data={{
                labels: dailyData.map(data => data.reportDate),
                datasets: [
                    {
                        data: dailyData.map(data => data.confirmed.total),
                        label: 'Infected',
                        backgroundColor: 'rgb(0, 0, 255, 0.2)',
                        borderColor: 'blue',
                        borderWidth: '10px',
                        fill: true
                    }, 
                    
                    {
                        data: dailyData.map(data => data.deaths.total),
                        label: 'Deaths',
                        backgroundColor: 'rgb(255, 0, 0, 0.2)',
                        borderColor: 'red',
                        borderWidth: '10px',
                        fill: true
                    }
                ]
            }}
            options={{
                title: {display: true, text: `Confirmed Global Cases | ${new Date(lastUpdate).toDateString()}`}
            }}
        /> 
        : null
    );

    const myCountryChart = (
        data.confirmed
        ? <Bar 
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'], 
                datasets: [
                    {
                        backgroundColor: [
                            'rgb(2, 116, 216)',
                            'rgb(92, 184, 92)',
                            'rgb(216, 84, 80)'
                        ],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }
                ],
            }}
            options={{
                legend: { display: false },
            }}  
        />
        : null
    )

    return (
        <div className="container" style={chartStyle}>
            {country ? myCountryChart : myGlobalChart}
        </div>
    )
}

const chartStyle = { 
    marginTop: '10px', 
    marginBottom: '2rem',
}
 
export default Chart;
