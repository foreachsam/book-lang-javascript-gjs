#!/usr/bin/gjs

function dump_format_imports_search_path(list) {
	let key = 0;
	for (let item of list) {
		print('Key: ', key);
		print('Item: ', item);
		print('List: ', list);
		print('\n===============\n');
		key++;
	}
}

function dump_imports_search_path() {
	dump_format_imports_search_path(imports.searchPath);
}


dump_imports_search_path();

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Array_comprehensions
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
