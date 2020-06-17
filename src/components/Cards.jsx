
import React, { useEffect } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CountUp from 'react-countup';

const Cards = ({ country, data, getData }) => {

    useEffect(() => {
        getData(country);
    }, []);

    const { confirmed, deaths, lastUpdate, recovered } = data;

    return (
        <div id="cards" className="container" style={{flexDirection: 'row'}}>
            <>
                <Card bg="primary" style={cardStyle}>
                    <Card.Header>Confirmed Cases</Card.Header>
                    <Card.Body>
                        <Card.Title>
                            <h2>
                                {
                                    !confirmed ? 'Loading...' :
                                        <CountUp
                                            start={0}
                                            end={confirmed.value}
                                            duration={1}
                                            separator=","
                                        />
                                }
                            </h2>
                        </Card.Title>
                        <Card.Text>
                            {new Date(lastUpdate).toDateString()}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card bg="success" style={cardStyle}>
                    <Card.Header>Recovered Cases</Card.Header>
                    <Card.Body>
                        <Card.Title>
                            <h2>
                                {
                                    !confirmed ? 'Loading...' :
                                        <CountUp
                                            start={0}
                                            end={recovered.value}
                                            duration={1}
                                            separator=","
                                        />
                                }
                            </h2>
                            
                        </Card.Title>
                        <Card.Text>
                            {new Date(lastUpdate).toDateString()}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card bg="danger" style={cardStyle}>
                    <Card.Header>Deaths</Card.Header>
                    <Card.Body>
                        <Card.Title>
                            <h2>
                                {
                                    !confirmed ? 'Loading...' :
                                        <CountUp
                                            start={0}
                                            end={deaths.value}
                                            duration={1}
                                            separator=","
                                        />
                                }
                            </h2>
                        </Card.Title>
                        <Card.Text>
                            {new Date(lastUpdate).toDateString()}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        </div>
    )
}

const cardStyle = {
    color: 'white',
    margin: '8px',
    width: '20rem'
}

export default Cards;
