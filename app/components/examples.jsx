var React = require('react');
var {Link} = require('react-router');
var Examples = () => {
    return (
        <div>
            <h2 className="text-center">Examples</h2>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li><Link to="/?location=California">USA California</Link></li>
                <li><Link to="/?location=Tel Aviv">Israel Tel Aviv</Link></li>
                <li><Link to="/?location=Moscow">Russia Moscow</Link></li>
                <li><Link to="/?location=Kiev">Ukraine Kiev</Link></li>
            </ol>
        </div>
    );
}

module.exports = Examples;