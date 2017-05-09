var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var http = require('http');

var Weather = React.createClass({

    getInitialState:function () {
        return {
            IsLoading: false
        };
    },
    handleLocation: function (location) {
        var that = this;
        this.setState({IsLoading: true});
        const app_id = '63b1cf1c839b4c8abfe8838ca44f0876';
        var options = {
            host: 'api.openweathermap.org',
            path: `/data/2.5/weather?lang=ru_ru&units=metric&appid=${app_id}&q=${location}`
        };
        var callback = function(response) {
            var str = '';
            response.on('data', function (chunk) {
                str += chunk;
                var data =  JSON.parse(str);
                console.log('handleLocation', data);
                that.setState({
                    location: location,
                    temp: data.main.temp,
                    IsLoading: false
                });
            });
        }
        http.request(options, callback).end();
    },
    render: function(){
        var {location, temp, IsLoading} = this.state;
        function renderMessage(){
            if (IsLoading){
                return <h3>Loading...</h3>
            } else if(location && temp) {
                return <WeatherMessage location={location} temp={temp}/>
            }
        }
        return (
            <div>
                <h1>Get Weather</h1>
                <WeatherForm onLocation={this.handleLocation}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;