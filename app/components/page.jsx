var React = require('react');
var Wform = require('Wform');
var Page = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Get Weather</h1>
                <Wform/>
                <div className="result"></div>
            </div>
        );
    }
});

module.exports = Page;