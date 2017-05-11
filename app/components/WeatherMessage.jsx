var React = require('react');

var WeatherMessage = (props) => {
    var {windSpeed, humidity, description, img, countryCode,location, temp} = props;
    return (
        <div className="message-box card text-center">
            <div className="card-divider">
                <div className="flag-div">
                    <img className="flag" width="100px" src={img} alt=''/>
                </div>
                <div className="weather-div">
                    <h3>{location}</h3>
                    <h5>Country Code: <b>{countryCode}</b></h5>
                </div>
            </div>
            <div className="card-section">
                <br/>
                <h5>Temperature: <b>{temp} °C </b></h5>
                <h5>Overcast:  <b>{description}</b></h5>
                <h5>Humidity:  <b>{humidity}</b></h5>
                <h5>Wind Speed: <b>{windSpeed} m/s</b></h5>
            </div>
        </div>
    );
}
module.exports = WeatherMessage;