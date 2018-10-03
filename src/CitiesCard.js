import React from 'react';
import CityCard from './CityCard';

const CitiesCard = (props) => {
  console.log(props)
  return (
    <div className="mt-4">
      {
        props.citiesData.map(cityData => <CityCard
          key={cityData.id}
          cityData={cityData}
          deleteCity={props.deleteCity}
        />)
      }
    </div>
  ); 
}

export default CitiesCard;
