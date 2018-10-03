import React, { Component } from 'react';
import CitiesCard from './CitiesCard';
import SearchBar from './SearchBar';
import Header from './Header';
import './styles/WeatherViewer.css'

class WeatherViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            citiesData: []
        };
    }

    componentDidMount() {
        const jsonData = localStorage.getItem('cityData');
        const citiesData = JSON.parse(jsonData);

        this.setState(() => ({citiesData: citiesData}))
    }
 
    componentDidUpdate(prevProps, prevState) {
        if(prevState.citiesData.length !== this.state.citiesData.length) {
            const jsonData = JSON.stringify(this.state.citiesData);
            localStorage.setItem('cityData', jsonData)
        }
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
            <div className="column">
                    <Header />
                    <SearchBar getCitiesData={getCitiesData} />
                    <CitiesCard citiesData={this.state.citiesData} deleteCity={deleteCity} />
            </div> 
        );
    }
}

export default WeatherViewer;
