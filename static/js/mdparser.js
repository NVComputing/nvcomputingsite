let tables = document.getElementsByTagName('table');

for (let i = 0; i < tables.length; i++) {
	let table = tables[i];
	let parent = table.parentNode;

	let wrapper = document.createElement('div');

	wrapper.classList.add('table-wrapper');
	parent.insertBefore(wrapper, table);
	wrapper.appendChild(table);
}

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

