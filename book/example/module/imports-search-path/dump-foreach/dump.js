#!/usr/bin/gjs

imports.searchPath.forEach(function(item, key, list) {
	print("Key: ", key);
	print("Item: ", item);
	print("List: ", list);
	print("\n============\n");
});

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
