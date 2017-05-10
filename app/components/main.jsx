var React = require('react');
var Menu = require('./Menu');

var Main = (props) => {
    return(
        <div>
            <Menu/>
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
module.exports = Main;