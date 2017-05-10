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
                console.log(data.sys.country, data.name);
                if (data.cod != '200') {
                    this.setState({
                        location: '',
                        temp: '',
                        IsLoading: false,
                        cod: data.cod,
                        errorMessage: data.message,
                        countryCode: '',
                        img: '',
                    });
                } else {
                    this.setState({
                        location: data.name,
                        temp: data.main.temp,
                        cod: data.cod,
                        IsLoading: false,
                        errorMessage: '',
                        countryCode: data.sys.country,
                        img: "../../public/img/flags/"+data.sys.country+".png",
                    });
                }
            });
        }
        http.request(options, callback).end();
    },
    render: function(){
        var {img, countryCode, location, temp, IsLoading, cod, errorMessage} = this.state;
        var renderMessage = () => {
            if (IsLoading){
                return <h3>Fetching Weather...</h3>
            } else if (location && temp) {
                return <WeatherMessage img={img} countryCode={countryCode} location={location} temp={temp}/>
            } else if (cod == '400' || cod == '404') {
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