#!/usr/bin/gjs

function dump_format_imports_search_path(list) {
	list.forEach(function(item, key, list) {
		print("Key: ", key);
		print("Item: ", item);
		print("List: ", list);
		print("\n============\n");
	});
}

function dump_imports_search_path() {
	dump_format_imports_search_path(imports.searchPath);
}

dump_imports_search_path();
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
