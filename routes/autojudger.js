module.exports.set = (app) => {
	app.get('/autojudger', (req, res) => {
		res.render('autojudger', {
			title: "Auto Judger | Neuqua Valley Computing Team",
			autojudgerPage: true
		});
	});
}
