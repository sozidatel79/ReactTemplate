var React = require('react');

var WeatherMessage = (props) => {
    var {windSpeed, humidity, description, img, countryCode,location, temp} = props;
    return (
        <div className="message-box card text-center">
            <div className="card-divider">
                <h4>Location found: <b>{location}</b></h4>
                <h5>Country Code: <b>{countryCode}</b></h5>
            </div>
            <img className="flag" width="100px" src={img} alt=''/>
            <div className="card-section">
                <br/>
                <h5>It's it <b>{temp} °C </b> in <b>{location}</b></h5>
                <h5>Overcast:  <b>{description}</b></h5>
                <h5>Humidity:  <b>{humidity}</b></h5>
                <h5>Wind Speed: <b>{windSpeed} m/s</b></h5>
            </div>
        </div>
    );
}
module.exports = WeatherMessage;