import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
        };
    }


    render() {
        let fetchData = () => {
            const searchText = `select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text = '${this.state.code}') and u = 'f'`;
                fetch(`https://query.yahooapis.com/v1/public/yql?q=${searchText}&format=json`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        let cityData = [{ number: this.state.code, temp: data.query.results.channel.item.condition.temp, id: data.query.created}];
                        this.props.getCitiesData(cityData)
                    });
        }

        let submitForm = event => {
            event.preventDefault();
            fetchData();
            
        }

        return (
            <div>
                <form onSubmit={submitForm}>
                    <input placeholder="enter a city name" value={this.state.term} onChange={(event) => this.setState({ code: event.target.value })}/>
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;




