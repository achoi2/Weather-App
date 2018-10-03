import React from 'react';

const CityCard = props => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h3>
                    The temperature of{' '}
                    <span className="text-info">{props.cityData.name}</span> is{' '}
                    <span className="text-warning">{props.cityData.temp}°F</span>

                </h3>
                <button
                    onClick={event => props.deleteCity(props.cityData)}
                    className="btn btn-danger float-right"
                >Delete
                </button>
            </div>   
        </div>
    );
};

export default CityCard;
