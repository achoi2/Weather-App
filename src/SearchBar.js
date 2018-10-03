import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: ''
        };
    }

    render() {
        let fetchData = () => {
            let term = this.state.code;
            const searchText = `select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text = '${term}') and u = 'f'`;
            fetch(`https://query.yahooapis.com/v1/public/yql?q=${searchText}&format=json`)
                .then(res => res.json())
                .then(data => {
                    let cityData = [{
                        name: term,
                        temp: data.query.results.channel.item.condition.temp,
                        id: data.query.created
                    }];
                    this.props.getCitiesData(cityData);
                });
        };

        let submitForm = event => {
            event.preventDefault();
            fetchData();
            this.setState({ code: '' });
        };

        return (
            <div className="my-4">
                <form onSubmit={submitForm}>
                    <div className="input-group">
                        <input
                            placeholder="Enter a city name"
                            value={this.state.code}
                            onChange={event =>
                                this.setState({ code: event.target.value })
                            }
                            type="text"
                            className="form-control"
                        />
                        <div className="input-group-append">
                            <button
                                type="submit"
                                className="btn btn-outline-primary"
                                >Search
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
