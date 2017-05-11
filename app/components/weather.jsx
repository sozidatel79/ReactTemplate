var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var Loader = require('Loader');
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
                if (data.cod != '200') {
                    this.setState({
                        location: '',
                        temp: '',
                        IsLoading: false,
                        cod: data.cod,
                        errorMessage: data.message,
                        countryCode: '',
                        img: '',
                        description: '',
                        humidity: '',
                        windSpeed: '',
                    });
                } else {
                    this.setState({
                        location: data.name,
                        temp: parseInt(data.main.temp),
                        cod: data.cod,
                        IsLoading: false,
                        errorMessage: '',
                        countryCode: (data.sys.country) ? data.sys.country : null,
                        img: (data.sys.country) ? "img/flags/"+data.sys.country+".png" : null,
                        description: data.weather[0].description,
                        humidity: data.main.humidity + "%",
                        windSpeed: data.wind.speed
                    });
                }
            });
        }
        http.request(options, callback).end();
    },
    render: function(){
        var {windSpeed, humidity, description, img, countryCode, location, temp, IsLoading, cod, errorMessage} = this.state;
        var renderMessage = () => {
            if (IsLoading){
                return <Loader/>
            } else if (location && temp) {
                return <WeatherMessage description={description} humidity={humidity} windSpeed={windSpeed} img={img} countryCode={countryCode} location={location} temp={temp}/>
            } else if (cod == '400' || cod == '404') {
                return <ErrorModal cod={cod} errorMessage={errorMessage}/>
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