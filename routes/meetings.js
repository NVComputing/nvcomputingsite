let agenda = require('../meetings.json');

module.exports.set = (app) => {
	app.get('/meetings', (req, res) => {
		res.render('meetings', {
			agenda: agenda,
			title: "Meetings | Neuqua Valley Computing Team",
			meetingsPage: true
		});
	})
}
