var React = require('react');

var WeatherMessage = (props) => {
    var {location, temp, cod} = props;
    var message;
    if(cod == '404'){
        message = location;
    }else{
        message = `It's it ${temp} ℃  in  ${location}`;
    }
    return (
        <h3 className="message text-center">{message}</h3>
    );
}
module.exports = WeatherMessage;