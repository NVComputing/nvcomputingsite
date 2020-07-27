module.exports.set = (app) => {
	app.get('/upcoming', (req, res) => {
		res.render('upcoming');
	})
}
