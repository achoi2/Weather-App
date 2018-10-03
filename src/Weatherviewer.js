import React, { Component } from 'react';
import CitiesCard from './CitiesCard';
import SearchBar from './SearchBar';

class WeatherViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            citiesData: []
        };
    }
 
    render() {    
        let getCitiesData = (data) => {
            let newArray = this.state.citiesData.slice();
            this.setState({ citiesData: newArray.concat(data) });
            
        }
        
        let deleteCity = (cityDelete) => {
            this.setState(prevState => ({
                citiesData: prevState.citiesData.filter(city => {
                    return cityDelete.id !== city.id
                })
            }))
        }

        return (
            <div>   
                <SearchBar getCitiesData={getCitiesData}/>
                <CitiesCard citiesData={this.state.citiesData} deleteCity={deleteCity}/>
            </div>
        );
    }
}

export default WeatherViewer;
