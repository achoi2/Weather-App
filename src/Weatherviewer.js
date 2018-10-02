import React, { Component } from 'react';

let city = 'atlanta';
let searchText = `select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='${city}') and u='c'`;

class Weatherviewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: []
    };
  } 
  
  componentDidMount() {
    fetch(`https://query.yahooapis.com/v1/public/yql?q=${searchtext}&format=json`)
    .then(res => res.json())
    .then(weather => this.setState({ weather: weather}))
  }

  render() {
    return (
      <div>
        hello world!
      </div>
    );
  }
}

export default Weatherviewer;
