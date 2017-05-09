var React = require('react');
var Menu = require('./Menu');

var Main = (props) => {
    return(
        <div>
            <Menu/>
            {props.children}
        </div>
    );
}
module.exports = Main;