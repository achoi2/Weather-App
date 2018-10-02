import React, { Component } from 'react';
import CitiesCard from './CitiesCard';

class Weatherviewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [
                { id: '1', city: 'atlanta', temp: 90 },
                { id: '2', city: 'miami', temp: 95 },
                { id: '3', city: 'new york', temp: 85 }
            ]
        };
    }

    render() {
        return (
            <div>
                <h3>
                    {this.state.cities.map(city => (
                        <div>{city}</div>
                    ))}
                </h3>
                <CitiesCard />
            </div>
        );
    }
