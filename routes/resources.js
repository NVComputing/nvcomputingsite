let fs = require('fs');

let showdown = require('showdown');
let converter = new showdown.Converter();
let path = require('path');

converter.setOption('tables', true);
converter.setOption('disableForced4SpacesIndentedSublists', true);

module.exports.set = (app) => {
	app.get('/resources', (req, res) => {
		fs.readFile(path.join(__dirname, '../resources/index.md'), 'utf-8', function (err, data) {
			if (err) throw err;
			let renderedMarkdown = converter.makeHtml(data);
			res.render('resources', {
				resource: renderedMarkdown,
				title: "Resources | NV Computing Team",

				markdown: true,
				prism: true,
				mathjax: true,
				lightbox: true,

				resourcePage: true,
				sideBarBreadCrumb: false
			});
		});
	});

	app.get('/resources/:resourceName*', (req, res) => {
		let resourceName = req.params.resourceName;
		let subPath = req.params['0'];

		let filepath = path.join(__dirname, `../resources/${resourceName}${subPath}.md`);

		fs.readFile(filepath, 'utf-8', function (err, data) {
			if (err) {
				fs.readFile(path.join(__dirname, `../resources/error.md`), 'utf-8', function (err, errorMd) {
					res.render('resources', {
						resource: converter.makeHtml(errorMd),
					});
				});
			} else {
				let title = data.match(/#\s*(.*?)\s*\n/);
				res.render('resources', {
					resource: converter.makeHtml(data),
					resourceName: title[1],
					title: title[1] + " | NV Computing Team",

					markdown: true,
					prism: true,
					mathjax: true,
					lightbox: true,

					resourcePage: true,
					sideBarBreadCrumb: true
				});
			}
		});
	});
}
