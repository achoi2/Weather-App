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
        let getCitiesData = (data) => this.setState({ citiesData: data });
        
        return (
            <div>   
                <SearchBar getCitiesData={getCitiesData}/>
                <CitiesCard citiesData={this.state.citiesData} />
            </div>
        );
    }
}

export default WeatherViewer;
