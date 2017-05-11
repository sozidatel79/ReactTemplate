var React = require('react');
var {Link, IndexLink} = require('react-router');
var Menu = React.createClass({

    onSearch: function (e) {
        e.preventDefault();
        var weatherSearch = this.refs.weatherSearch.value;
        var encodedweatherSearch = encodeURIComponent(weatherSearch);
        if(encodedweatherSearch.length > 0){
            this.refs.weatherSearch.value = '';
            window.location.hash = '#/?location=' + encodedweatherSearch;
        }
    },
    render: function () {
       return (
           <div className="top-bar">
               <div className="top-bar-left">
                   <ul className="menu">
                       <li className="menu-text">[ :: Weather App :: ] </li>
                       <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold',color:'#000'}}>Home</IndexLink></li>
                       <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold',color:'#000'}}>About</Link></li>
                       <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold',color:'#000'}}>Examples</Link></li>
                   </ul>
               </div>
               <div className="top-bar-right">
                   <form>
                        <ul className="menu">
                            <li><input ref="weatherSearch" type="text" placeholder="Search Weather"/></li>
                            <li><input type="button" onClick={this.onSearch} className="button" value="Get Weather"/></li>
                        </ul>
                   </form>
               </div>
           </div>
       );
   }
});

module.exports = Menu;
