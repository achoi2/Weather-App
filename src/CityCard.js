import React, { Component } from 'react';

const CityCard = (props) => {
  return <div>
          <h3>{`The temperature is ${props.cityData.number}`}</h3>
      </div>;
}

export default CityCard;