var React = require('react');
var WeatherMessage = React.createClass({
    render: function(){
        var {location, temp, cod} = this.props;
        console.log(cod);
        var message;
        if(cod == '404'){
            message = location;
        }else{
            message = `It's it ${temp} ℃  in  ${location}`;
        }
        return (
            <h3 className="message">{message}</h3>
        );
    }
});

module.exports = WeatherMessage;