#!/usr/bin/nodejs

console.log('Loading libraries...');

let express = require('express');
let app = express();

let routes = require('./routes');
var hbs = require('hbs');
const axios = require('axios')
const fs = require('fs')
const path = require('path')
const cron = require('node-cron')
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

hbs.registerPartials(__dirname + '/views/partials', function (err) {});



const statsFilePath = path.join(__dirname, 'stats.json')


const updateStats = async () => {
    try {
        const response = await axios.get('https://autojudgerserver.vercel.app/leaderboards')
        const leaderboard = response.data

        const stats = JSON.parse(fs.readFileSync(statsFilePath, 'utf-8'))

        stats.users.forEach(user => {
            if (leaderboard[user.id]) {
                user.classQuestions = leaderboard[user.id]
            }
        })

        fs.writeFileSync(statsFilePath, JSON.stringify(stats, null, 2))
        console.log('stats.json has been updated successfully.')
    } catch (error) {
        console.error('An error occurred while updating stats.json:', error)
    }
}

cron.schedule('35 15 * * 4', updateStats, {
    scheduled: true,
    timezone: 'America/Chicago'
})

console.log('Scheduled task to update stats.json with new class questions data every Thursday at 3:35 PM CT.')

let listener = app.listen(app.get('port'), function () {
	console.log('Express server started.');
	console.log('--------------------------');
	console.log('Website is now live at http://localhost:' + listener.address().port);
});
