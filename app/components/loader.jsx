var React = require('react');
var loader = React.createClass({
	render: function() {
		return (
			<div className="text-center">
				<image src="img/spin.gif" />
				<h6>Fetching weather</h6>
			</div>
		);
	}
});

module.exports = loader;