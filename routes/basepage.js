module.exports.set = (app) => {
	app.get('/', (req, res) => {
		res.render('index')
	})
}
