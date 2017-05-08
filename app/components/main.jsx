var React = require('react');
var Menu = require('./Menu');

var Main = React.createClass({
   render: function () {
       return(
           <div>
               <Menu/>
               <h1>Weather Component</h1>
               {this.props.children}
           </div>
       );
   }
});
module.exports = Main;