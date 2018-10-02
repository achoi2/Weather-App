import React, { Component } from 'react';
import CitiesCard from './CitiesCard';
import SearchBar from './SearchBar';

class WeatherViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [
                { id: '1', name: 'atlanta', temp: 90 },
                { id: '2', name: 'miami', temp: 95 },
                { id: '3', name: 'new york', temp: 85 }
            ]
        };
    }


    render() {
        return (
            <div>
                <h3>Yahoo Weather</h3>
                <SearchBar />
                <CitiesCard cities={this.state.cities} />
            </div>
        );
    }
}

export default WeatherViewer;