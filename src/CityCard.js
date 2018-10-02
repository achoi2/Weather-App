import React, { Component } from 'react';

const CityCard = (props) => {
  console.log(props)
  return <div>
          <h3>{`The temperature of ${props.city.name} is ${props.city.temp}`}</h3>
      </div>;
}

export default CityCard;