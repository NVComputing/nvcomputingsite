#!/usr/bin/nodejs

let express = require('express');
let app = express();
let hbs = require('hbs');

let routes = require('./routes');

app.set('port', process.env.PORT || 8080);
app.use(express.static('static'));

routes.set(app);

app.set('view engine', 'hbs');

let listener = app.listen(app.get('port'), function () {
	console.log('Express server started on port: ' + listener.address().port);
});
