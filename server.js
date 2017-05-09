var express = require('express');
var app = express();
const PORT = process.env.port || 3000;
app.use(express.static('public'));
app.listen(PORT, function () {
   console.log('Listen on port ' + PORT);
});