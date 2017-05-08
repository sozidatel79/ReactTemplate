var React = require('react');
var Menu = require('./Menu');

var Main = React.createClass({
   render: function () {
       return(
           <div>
               <Menu/>
               {this.props.children}
           </div>
       );
   }
});
module.exports = Main;