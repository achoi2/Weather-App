import React, { Component } from 'react';

const CityCard = props => {
    return (
        <div>
            <h3>{`The temperature of ${props.cityData.number} is ${props.cityData.temp}°C`}</h3>
            <button onClick={(event) => {
                props.deleteCity(props.cityData)
            }}>delete</button>
        </div>
    );
};

export default CityCard;
