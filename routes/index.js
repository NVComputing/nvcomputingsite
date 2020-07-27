let basepage = require('./basepage');
let resources = require('./resources');
let practice = require('./practice');
let contact = require('./upcoming');

// Load in all endpoints
module.exports.set = (app) => {
	basepage.set(app);
	resources.set(app);
	practice.set(app);
	contact.set(app);
}
