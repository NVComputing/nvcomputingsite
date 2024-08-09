let fs = require('fs');

let showdown = require('showdown');
let converter = new showdown.Converter();
let path = require('path');

converter.setOption('tables', true);
module.exports.set = (app) => {
	app.get('/potw', (req, res) => {
		fs.readFile(path.join(__dirname, '../potw.md'), 'utf-8', function(err, data) {
			if (err) throw err;
			let renderedMarkdown = converter.makeHtml(data);
			res.render('potw', {
				resource: renderedMarkdown,
				title: "Problem of the Week | NV Computing Team",

				markdown: true,
				prism: true,
				mathjax: true,

				potwPage: true
			});
		});
	});
}
