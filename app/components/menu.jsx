var React = require('react');
var {Link, IndexLink} = require('react-router');
var Menu = React.createClass({
   render: function(){
       return (
           <div>
             <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold',color:'#000'}}>Home</IndexLink>
             <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold',color:'#000'}}>About</Link>
             <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold',color:'#000'}}>Examples</Link>
           </div>
       );
   }
});

module.exports = Menu;