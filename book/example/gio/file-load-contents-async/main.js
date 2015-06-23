#!/usr/bin/gjs

const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;


function load_start(file, result) {
	var [ok, data, etag] = file.load_contents_finish(result);
	if (!ok) {
		print("Error: ");
		return;
	}

	print(data);
	//print(etag);
	main_loop.quit();
}

function load_async() {

	try {
		var file = Gio.File.new_for_path("data.txt");
		file.load_contents_async(null, load_start);

	} catch (e) {
		print("Error: ", e.message);
	}
}


var main_loop = GLib.MainLoop.new(null, null);
load_async();
main_loop.run();


//https://github.com/GNOME/gjs/blob/master/doc/gjs-byte-array.txt
//https://github.com/GNOME/gjs/blob/master/gjs/byteArray.cpp#L413
//http://wiki.ecmascript.org/doku.php?id=proposals:bytearray
//http://blog.roodo.com/rocksaying/archives/19465972.html
//https://people.gnome.org/~gcampagna/docs/Gio-2.0/Gio.File.html
//https://people.gnome.org/~gcampagna/docs/Gio-2.0/Gio.File.load_contents.html

