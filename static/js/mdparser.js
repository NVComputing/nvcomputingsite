let tables = document.getElementsByTagName('table');

$().ready(() => {
	for (let i = 0; i < tables.length; i++) {
		let table = tables[i];
		let parent = table.parentNode;

		let wrapper = document.createElement('div');

		wrapper.classList.add("table-wrapper");
		parent.insertBefore(wrapper, table);
		wrapper.appendChild(table);
	}
});
