var React = require('react');
var loader = React.createClass({
	render: function() {
		debugger;
		return (
			<div className="text-center">
				<image src="../../public/img/spin.gif" />
				<h6>Fetching weather</h6>
			</div>
		);
	}
});

module.exports = loader;