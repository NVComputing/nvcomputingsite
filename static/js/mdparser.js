let tables = document.getElementsByTagName('table');

$(document).ready(() => {
	for (let i = 0; i < tables.length; i++) {
		let table = tables[i];
		let parent = table.parentNode;

		let wrapper = document.createElement('div');

		wrapper.classList.add("table-wrapper");
		parent.insertBefore(wrapper, table);
		wrapper.appendChild(table);
		console.log($(table).find('td img'));
		let imgID = Math.random().toString(36).substr(2, 9);
		$(table).find('td img').each((index, item) => {
			let imgWrapper = document.createElement('a');
			$(imgWrapper).attr("data-lightbox", imgID);
			$(imgWrapper).attr("href", $(item).attr("src"));
			item.parentNode.insertBefore(imgWrapper, item);
			imgWrapper.appendChild(item);
		});
	}

	// $('td img').each((index, item) => {
	// 	let imgID = Math.random().toString(36).substr(2, 9);
	// 	let wrapper = document.createElement('a');
	// 	$(wrapper).attr("data-lightbox", imgID);
	// 	$(wrapper).attr("href", $(item).attr("src"));
	// 	item.parentNode.insertBefore(wrapper, item);
	// 	wrapper.appendChild(item);
	// });

});

