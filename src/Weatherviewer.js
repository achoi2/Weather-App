import React, { Component } from 'react';
import CitiesCard from './CitiesCard';
import SearchBar from './SearchBar';

class WeatherViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            citiesData: [],
            code: ''
        };
    }
 
    componentDidUpdate(prevProps, prevState) {
        if(this.state.code !== prevState.code) {
            const searchText = `select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='${this.state.code}') and u='c'`;
            fetch(`https://query.yahooapis.com/v1/public/yql?q=${searchText}&format=json`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    this.setState({ citiesData: { number: this.state.code, temp: data.query.results.channel.item.condition.temp, id: data.query.created } });
                });
        }    
    }

    render() {    
        let changeInput = (event) => this.setState({ code: event.target.value });
        
        
     
        return (
            <div>   
                <SearchBar changeInput={changeInput}/>
                <CitiesCard citiesData={this.state.citiesData} />
            </div>
        );
    }
}

export default WeatherViewer;
