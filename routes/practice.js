module.exports.set = (app) => {
	app.get('/practice', (req, res) => {
		res.render('practice')
	})
}
