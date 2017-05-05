var React = require('react');
var Wform = require('Wform');
var Wresult = require('Wresult');
var Page = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Get Weather</h1>
                <Wform/>
                <Wresult/>
            </div>
        );
    }
});

module.exports = Page;