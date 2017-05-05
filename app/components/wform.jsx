var React = require('react');
var Wform = React.createClass({
   getWeather: function (e) {
       e.preventDefault();
       var city = this.refs.city.value;
       this.refs.city.value = '';
       console.log(city);
   },
   render: function () {
       return(
           <form action="#">
               <div>
                   <input type="text" ref="city"/>
               </div>
               <div>
                   <button onClick={this.getWeather}>Get Weather</button>
               </div>
           </form>
       );
   },
});

module.exports = Wform;