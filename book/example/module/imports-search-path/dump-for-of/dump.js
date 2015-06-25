#!/usr/bin/gjs

let list = imports.searchPath;
let key = 0;
for (let item of list) {
	print('Key: ', key);
	print('Item: ', item);
	print('List: ', list);	
	print('\n===============\n');
	key++;
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Array_comprehensions
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
