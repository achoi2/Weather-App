import React, {Component} from 'react';
import CityCard from './CityCard';

const CitiesCard = (props) => {

  return <div>
    {
      props.citiesData.map(cityData => <CityCard key={cityData.id} cityData={cityData}/>)
    }
  </div>
}

export default CitiesCard;