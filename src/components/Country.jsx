
import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import '../App.css';

const Country = ({ countryList, getCountryList, handleChange }) => {

    useEffect(() => {
        getCountryList();
    }, []);

    return (
        <div className="container">
            <Form.Group>
                <Form.Control as="select" onChange={e => handleChange(e.target.value)}>
                    <option>Select Country</option>
                    {countryList.length && countryList.map((country, idx) => 
                        <option key={idx} value={country}>{country}</option>
                    )}
                </Form.Control>
            </Form.Group>
        </div>
    )
}

export default Country;
