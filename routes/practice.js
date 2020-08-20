let fs = require('fs');

let showdown = require('showdown');
let converter = new showdown.Converter();
let path = require('path');

converter.setOption('tables', true);

module.exports.set = (app) => {
	app.get('/practice', (req, res) => {
		fs.readFile(path.join(__dirname, '../practice/index.md'), 'utf-8', function(err, data) {
			if (err) throw err;
			let renderedMarkdown = converter.makeHtml(data);
			res.render('practice', {
				resource: renderedMarkdown,
				title: "Practice | Neuqua Valley Computing Team",
				practicePage: true
			});
		});
	});

	app.get('/practice/:resourceName*', (req, res) => {
		let resourceName = req.params.resourceName;
		let subPath = req.params['0'];

		let filepath = path.join(__dirname, `../practice/${resourceName}${subPath}.md`);

		fs.readFile(filepath, 'utf-8', function(err, data) {
			if (err) {
				fs.readFile(path.join(__dirname, `../resources/error.md`), 'utf-8', function(err, errorMd) {
					res.render('practice', { resource: converter.makeHtml(errorMd) });
				});
			} else {
				let title = data.match(/#\s*(.*?)\s*\n/);
				res.render('practice', {
					resource: converter.makeHtml(data),
					title: title[1] + " | Neuqua Valley Computing Team",
					practicePage: true
				});
			}
		});
	});
}
