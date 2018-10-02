import React, {Component} from 'react';
import CityCard from './CityCard';

const CitiesCard = (props) => {

  return <div>
    {
      props.cities.map(city => <CityCard key={city.id} city={city}/>)
    }
  </div>
}

export default CitiesCard;