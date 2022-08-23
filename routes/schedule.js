let competitions = require('../competitions.json');

competitions.competitions.forEach((competition) => {


	// agendaSlide.img = "/res/meetingsummaries/" + agendaSlide.img;
});


module.exports.set = (app) => {
	app.get('/schedule', (req, res) => {
		res.render('schedule', {
			competitions: competitions.competitions,
			title: "Schedule | Neuqua Valley Computing Team",
			schedulePage: true
		});
	});
}
