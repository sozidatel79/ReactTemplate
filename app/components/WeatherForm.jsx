var React = require('react');
var WeatherForm = React.createClass({
   getLocation: function (e) {
       e.preventDefault();
       var location = this.refs.location.value;
       if (location.length > 0){
           this.refs.location.value = '';
           this.props.onLocation(location);
       }
   },
   render: function () {
       return(
           <div className="text-center">
               <h1 className="page-title">Get Weather</h1>
               <form action="#">
                   <div>
                       <input type="text" ref="location" placeholder="Enter City Here (You can type in your language)"/>
                   </div>
                   <div>
                       <button className="button hollow expanded" onClick={this.getLocation}>Get Weather</button>
                   </div>
               </form>
           </div>
       );
   },
});

module.exports = WeatherForm;