#!/usr/bin/nodejs

console.log('Loading libraries...');

let express = require('express');
let app = express();

let routes = require('./routes');

console.log('Setting redirect functions...');
app.use(function forceDomain(req, res, next) {
	// Don't allow user to hit Heroku, www-version of site, or http version of site
	let host = req.hostname;
	let env = process.env.NODE_ENV;

	if (host === 'nvcomputing.herokuapp.com' || req.headers.host.slice(0, 4) === 'www.' ||
		(req.protocol !== 'https' && env === "production")) {
		return res.redirect(301, 'https://nvcomputing.com' + req.originalUrl);
	}
	next();
});

app.set('port', process.env.PORT || 8080);
app.set('trust proxy', true);

console.log('Setting /static/ directory as static file root...');
app.use(express.static('static'));

console.log('Registering router endpoints...');
routes.set(app);

app.set('views', './views');
app.set('view engine', 'hbs');

let listener = app.listen(app.get('port'), function () {
	console.log('Express server started.');
	console.log('--------------------------');
	console.log('Website is now live at http://localhost:' + listener.address().port);
});
