#!/usr/bin/gjs

const Gio = imports.gi.Gio;

var file = Gio.File.new_for_path("data.txt");

try {

	var [ok, data, etag] = file.load_contents(null);

	if (ok) {

		print(data);

		//print(data.toString());
		//print(data.toString('utf-8'));
		//print(data.toString('big5'));
	}

} catch (e) {
	print("Error: ", e.message);
}


//https://github.com/GNOME/gjs/blob/master/doc/gjs-byte-array.txt
//https://github.com/GNOME/gjs/blob/master/gjs/byteArray.cpp#L413
//http://wiki.ecmascript.org/doku.php?id=proposals:bytearray
//http://blog.roodo.com/rocksaying/archives/19465972.html
//https://people.gnome.org/~gcampagna/docs/Gio-2.0/Gio.File.html
//https://people.gnome.org/~gcampagna/docs/Gio-2.0/Gio.File.load_contents.html

