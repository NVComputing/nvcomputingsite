let fs = require('fs');

let showdown = require('showdown');
let converter = new showdown.Converter();
let path = require('path');

module.exports.set = (app) => {
	app.get('/resources', (req, res) => {
		fs.readFile(path.join(__dirname, '../markdown/index.md'), 'utf-8', function(err, data) {
			if (err) throw err;
			let renderedMarkdown = converter.makeHtml(data);
			res.render('resources', {resource: renderedMarkdown})
		});
	});

	app.get('/resources/:resourceName', (req, res) => {
		let resourceName = req.params.resourceName;

		fs.readFile(path.join(__dirname, `../markdown/${resourceName}.md`), 'utf-8', function(err, data) {
			if (err) {
				fs.readFile(path.join(__dirname, `../markdown/error.md`), 'utf-8', function(err, errorMd) {
					res.render('resources', { resource: converter.makeHtml(errorMd) })
				});
			} else {
				res.render('resources', { resource: converter.makeHtml(data) })
			}
		});
	});

	app.get('/resources/acsl/:resourceName', (req, res) => {
		let resourceName = req.params.resourceName;

		fs.readFile(path.join(__dirname, `../markdown/acsl/${resourceName}.md`), 'utf-8', function(err, data) {
			if (err) {
				fs.readFile(path.join(__dirname, `../markdown/error.md`), 'utf-8', function(err, errorMd) {
					res.render('resources', { resource: converter.makeHtml(errorMd) })
				});
			} else {
				res.render('resources', { resource: converter.makeHtml(data) })
			}
		});
	});
}
