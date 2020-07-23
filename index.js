#!/usr/bin/nodejs

let express = require('express');
let app = express();
let hbs = require('hbs');
let forceSSL = require('heroku-ssl-redirect');

let routes = require('./routes');

/*
app.use(function forceLiveDomain(req, res, next) {
	// Don't allow user to hit Heroku
	let host = req.hostname;
	if (host === 'nvcomputing.herokuapp.com') {
		res.redirect(301, 'https://nvcomputing.com' + req.originalUrl);
	}
	next();
});
 */
app.use(forceSSL());

app.set('port', process.env.PORT || 8080);
app.use(express.static('static'));

routes.set(app);

app.set('view engine', 'hbs');

let listener = app.listen(app.get('port'), function () {
	console.log('Express server started on port: ' + listener.address().port);
});
