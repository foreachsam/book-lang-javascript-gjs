#!/usr/bin/gjs

let list = imports.searchPath;

for (let key in list) {
	let item = list[key];
	print('Key: ', key);
	print('Item: ', item);
	print('List: ', list);
	print('\n===============\n');
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Array_comprehensions
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
