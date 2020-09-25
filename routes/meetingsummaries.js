let agenda = require('../meetingsummaries.json');

module.exports.set = (app) => {
	app.get('/meetingsummaries', (req, res) => {
		res.render('meetingsummaries', {
			agenda: agenda,
			title: "Meeting Summaries | Neuqua Valley Computing Team",
			meetingSummariesPage: true
		});
	})
}
