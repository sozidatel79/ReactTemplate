var React = require('react');
var Page = React.createClass({
    getWeather: function (e) {
        e.preventDefault();
        var city = this.refs.city.value;
        this.refs.city.value = '';
        console.log(city);
    },
    render: function(){
        return (
            <div>
                <h1>Get Weather</h1>
                <form action="#">
                    <div>
                        <input type="text" ref="city"/>
                    </div>
                    <div>
                        <button onClick={this.getWeather}>Get Weather</button>
                    </div>
                </form>
                <div className="result"></div>
            </div>
        );
    }
});

module.exports = Page;