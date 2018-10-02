import React, { Component } from 'react';
import CitiesCard from './CitiesCard';
import SearchBar from './SearchBar';

class WeatherViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            citiesData: [{ id: 1, temp: 40 }, { id: 2, temp: 30 }],
            city: ''
        };
    }

    componentDidMount() {
        const city = '30338';
        const searchText = `select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='${city}') and u='c'`;
        fetch(`https://query.yahooapis.com/v1/public/yql?q=${searchText}&format=json`)
            .then(res => res.json())
            .then(citiesData => {
                // this.setState({ citiesData: {temp: citiesData.query.results.channel.item.condition.temp} });
            });
    }

    render() {    
        
        return (
            <div>
                <form>
                    <label>
                        <input type="text"/>
                    </label>
                </form>
                <SearchBar />
                <CitiesCard citiesData={this.state.citiesData} />
            </div>
        );
    }
}

export default WeatherViewer;
