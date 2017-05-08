var axios = require('axios');

const app_id = '63b1cf1c839b4c8abfe8838ca44f0876';
var url = `api.openweathermap.org/data/2.5/weather?appid=${app_id}`;

module.exports = {
    getTemp: function (location) {
        var requestUrl = `${url}&q=${location}`;
        var config = {
            headers: {'Access-Control-Allow-Origin': true}
        };
        return axios.get(requestUrl, config).then(function (res) {
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }else{
                return res.data.main.temp;
            }
        }, function (res) {
           throw new Error(res.data.message)
        });
    }
}