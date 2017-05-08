var React = require('react');
var WeatherForm = React.createClass({
   getWeather: function (e) {
       e.preventDefault();
       var city = this.refs.city.value;
       this.refs.city.value = '';
       console.log(city);
   },
   render: function () {
       return(
           <div>
               <form action="#">
                   <div>
                       <input type="text" ref="city"/>
                   </div>
                   <div>
                       <button onClick={this.getWeather}>Get Weather</button>
                   </div>
               </form>
           </div>
       );
   },
});

module.exports = WeatherForm;