var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router')
var Weather = require('Weather');
var Page = require('Page');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Weather}>
            <Route path="about" component={About} />
            <Route path="examples" component={Examples} />
            <IndexRoute component={Page}/>
        </Route>
    </Router>,
    document.querySelector('#app')
);
