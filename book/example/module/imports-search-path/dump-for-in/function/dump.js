#!/usr/bin/gjs

function dump_format_imports_search_path(list) {
	for (let key in list) {
		let item = list[key];
		print('Key: ', key);
		print('Item: ', item);
		print('List: ', list);
		print('\n===============\n');
	}
}

function dump_imports_search_path() {
	dump_format_imports_search_path(imports.searchPath);
}


dump_imports_search_path();

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Array_comprehensions
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
