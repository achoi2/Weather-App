import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: ''
        };
    }

    render() {
        
        let submitForm = event => event.preventDefault();

        return (
            <div>
                <form onSubmit={submitForm}>
                    <input placeholder="enter a zip code" value={this.state.term} onChange={this.props.changeInput}/>
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;
