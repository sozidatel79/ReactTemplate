var React = require('react');

var WeatherMessage = (props) => {
    var {img, countryCode,location, temp} = props;
    return (
        <div className="card text-center">
            <div className="card-divider">
                <h4>Location found: {location}</h4>
                <h5>Country Code: {countryCode}</h5>
            </div>
            <img width="100px" src={img} alt=''/>

            <div className="card-section">
                <br/>
                <h5>It's it {temp} °C in {location}</h5>
            </div>
        </div>
    );
}
module.exports = WeatherMessage;