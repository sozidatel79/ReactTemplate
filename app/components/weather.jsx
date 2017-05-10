var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var http = require('http');

var Weather = React.createClass({

    getInitialState: () => {
        return {
            IsLoading: false,
            cod: null,
            errorMessage: '',
        };
    },
    handleLocation: function (location) {

        this.setState({IsLoading: true});

        const app_id = '63b1cf1c839b4c8abfe8838ca44f0876';
        var options = {
            host: 'api.openweathermap.org',
            path: `/data/2.5/weather?lang=ru_ru&units=metric&appid=${app_id}&q=${location}`
        };
        var callback = (response) => {
            var str = '';
            response.on('data', (chunk) => {
                str += chunk;
                var data =  JSON.parse(str);
                if (data.cod == '404') {
                    this.setState({
                        location: '',
                        temp: '',
                        IsLoading: false,
                        cod: '404',
                        errorMessage: data.message,
                    });
                } else {
                    this.setState({
                        location: location,
                        temp: data.main.temp,
                        cod: null,
                        IsLoading: false,
                        errorMessage: ''
                    });
                }
            });
        }
        http.request(options, callback).end();
    },
    render: function(){
        var {location, temp, IsLoading, cod, errorMessage} = this.state;
        var renderMessage = () => {
            if (IsLoading){
                return <h3>Fetching Weather...</h3>
            } else if (location && temp) {
                return <WeatherMessage location={location} temp={temp}/>
            } else if (cod == '404') {
                console.log(location, cod);
                return <ErrorModal cod={cod} errorMessage={errorMessage}/>
                //return <WeatherMessage cod={cod} location={location} temp={temp}/>
            }
        }
        return (
            <div>
                <WeatherForm onLocation={this.handleLocation}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;