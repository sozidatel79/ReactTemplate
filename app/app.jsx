var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Weather = require('Weather');
var Main = require('Main');
var About = require('About');
var Examples = require('Examples');

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();
require('style!css!ApplicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About} />
            <Route path="examples" component={Examples} />
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.querySelector('#app')
);
