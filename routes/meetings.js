let agenda = require('../meetings.json');

agenda.forEach(agendaSlide => {
	if(!(agendaSlide.title)) {
		let date = new Date();
		agendaSlide.title = "Agenda " + (date.getMonth() + 1) + "/" + date.getDate();
	}

	if(!(agendaSlide.description)) {
		agendaSlide.description = "Today's Agenda.";
	}

	if(!(agendaSlide.img)) {
		agendaSlide.img = "agendanone.png";
	}

	if(!(agendaSlide.link)) {
		agendaSlide.link = "https://drive.google.com/drive/folders/1ROVbCUoudELV98TVfI9uC29kMvp-pcU_?usp=sharing";
	}

	agendaSlide.img = "/res/meetingsummaries/" + agendaSlide.img;
});

module.exports.set = (app) => {
	app.get('/meetings', (req, res) => {
		res.render('meetings', {
			agenda: agenda,
			title: "Meetings | Neuqua Valley Computing Team",
			meetingsPage: true
		});
	})
}
