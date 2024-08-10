let basepage = require('./basepage'), 
	resources = require('./resources'), 
	practice = require('./practice'), 
	schedule = require('./schedule'), 
	meetingsummaries = require('./meetings'),
	potw = require('./potw'),
	autojudger = require('./autojudger'),
	leaderboards = require('./leaderboards');
	stats = require('./stats');

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
	stats.set(app);
	console.log("Router endpoints registered.");
}
