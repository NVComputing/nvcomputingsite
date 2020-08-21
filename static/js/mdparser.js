// Add Table Wrapper and Lightbox for Each Table
let tables = document.getElementsByTagName('table');

for (let i = 0; i < tables.length; i++) {
	let table = tables[i];
	let wrapper = document.createElement('div');

	wrapper.classList.add('table-wrapper');
	table.parentNode.insertBefore(wrapper, table);
	wrapper.appendChild(table);

	let imgID = Math.random().toString(36).substr(2, 9);

	$(table).find('td img').each((index, item) => {
		let imgWrapper = document.createElement('a');
		$(imgWrapper).attr("data-lightbox", imgID);
		$(imgWrapper).attr("href", $(item).attr("src"));
		item.parentNode.insertBefore(imgWrapper, item);
		imgWrapper.appendChild(item);
	});
}

// Fix for Regex
let inlineCode = document.getElementsByTagName('code');

for (let i = 0; i < inlineCode.length; i++) {
	let code = inlineCode[i];

	if(code.classList.contains('language-text')) {
		code.classList.remove('language-text');
		code.classList.add('language-none');
		continue;
	}

	let codeContent = code.innerText;
	if (codeContent.charAt(0) === '/' && codeContent.charAt(codeContent.length - 1) === '/') {
		code.classList.add('language-regex');
		code.classList.add('regex');

		code.innerText = codeContent.slice(1, codeContent.length - 1);
	}
}

// Centering for Standalone Images and Images within Tables
$("p:has(img)").addClass('text-center');
$("td:has(img)").addClass('text-center');
