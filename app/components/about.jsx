var React = require('react');
var About = () => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>
                This is a Weather Application build On React.js.
                I have build this for The Complete React Web App Developer Course.
            </p>
            <p>
                <h5>Here are some of the tools i used:</h5>
            </p>
            <ul>
                <li>
                    <a target="_blank" href="https://facebook.github.io/react">React JS</a> - This
                    was the JavaScript framework i used.
                </li>
                <li>
                    <a target="_blank"  href="https://openweathermap.org">Open Weather Map</a> - I used to search for weather data by city name.
                </li>
                <li>
                    <a target="_blank"  href="http://foundation.zurb.com">Foundation</a> - This is Frontend CSS framework i used for styling the App.
                </li>
            </ul>
        </div>
    );
}

module.exports = About;