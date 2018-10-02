import React, { Component } from 'react';

const CityCard = props => {
    console.log(props);
    return (
        <div>
            <h3>{`The temperature of ${props.cityData.number} is ${props.cityData.temp}`}</h3>
        </div>
    );
};

export default CityCard;
