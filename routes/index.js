let basepage = require('./basepage'), 
	resources = require('./resources'), 
	practice = require('./practice'), 
	schedule = require('./schedule'), 
	meetingsummaries = require('./meetings'),
	potw = require('./potw'),
	autojudger = require('./autojudger'),
	leaderboards = require('./leaderboards');

// Load in all endpoints
module.exports.set = (app) => {
	basepage.set(app);
	resources.set(app);
	practice.set(app);
	schedule.set(app);
	meetingsummaries.set(app);
	potw.set(app);
	autojudger.set(app);
	leaderboards.set(app);
	console.log("Router endpoints registered.");
}
