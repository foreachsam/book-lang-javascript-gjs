#!/usr/bin/gjs

const Lang = imports.lang;
const GLib = imports.gi.GLib;

try {
	//var rs = GLib.file_get_contents("data.txt");
	//print(rs[1]);
	var [ok, content] = GLib.file_get_contents("data.txt");
	//let [ok, content] = GLib.file_get_contents("data.txt");
	if (ok) {
		print(content);
	}
} catch (e) {
	print("Error: ", e.message);
}

//http://eloquentjavascript.net/1st_edition/chapter5.html#p61c863902bde0b98
//http://eloquentjavascript.net/08_error.html#h_zT3755/aOp
//https://people.gnome.org/~gcampagna/docs/GLib-2.0/GLib.file_get_contents.html
//http://blog.roodo.com/rocksaying/archives/19453974.html
//http://phpjs.org/functions/file_get_contents/
//https://www.google.com.tw/#q=javascript+list+assignment
//http://stackoverflow.com/questions/907042/possible-to-assign-to-multiple-variables-from-an-array
//http://wiki.ecmascript.org/doku.php?id=harmony:destructuring#examples
//http://stackoverflow.com/questions/6983026/javascript-assign-array-values-to-multiple-variables
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/1.7#Destructuring_assignment_%28Merge_into_own_page.2Fsection%29
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//https://wiki.gnome.org/Projects/Gjs/Mapping
