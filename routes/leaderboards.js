module.exports.set = (app) => {
	app.get('/leaderboards', (req, res) => {
		res.render('leaderboards', {
			title: "Leaderboards | Neuqua Valley Computing Team",
			leaderboardsPage: true
		});
	});
}
