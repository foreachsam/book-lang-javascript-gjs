#!/usr/bin/gjs

let list = imports.searchPath;
let len = list.length;
for (let key=0; key<len; key++) {
	let item = list[key];
	print('Key: ', key);
	print('Item: ', item);
	print('List: ', list);
	print('\n===============\n');
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Array_comprehensions
