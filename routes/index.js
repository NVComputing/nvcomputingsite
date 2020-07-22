let basepage = require('./basepage');
let resources = require('./resources');

// Load in all endpoints
module.exports.set = (app) => {
	basepage.set(app);
	resources.set(app);
}
