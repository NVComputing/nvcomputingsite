let basepage = require('./basepage');
let resources = require('./resources');
let practice = require('./practice');
let schedule = require('./schedule');
let compiler = require('./compiler')
let meetingsummaries = require('./meetings');

// Load in all endpoints
module.exports.set = (app) => {
	basepage.set(app);
	resources.set(app);
	practice.set(app);
	schedule.set(app);
	compiler.set(app);
	meetingsummaries.set(app);

	console.log("Router endpoints registered.");
}
