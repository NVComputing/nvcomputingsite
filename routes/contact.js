module.exports.set = (app) => {
	app.get('/contact', (req, res) => {
		res.render('contact')
	})
}
