#!/usr/bin/gjs

const Gio = imports.gi.Gio;

var file = Gio.File.new_for_path("big5.txt");

try {
	var [ok, data, etag] = file.load_contents(null);

	if (ok) {
		print(data.toString('big5'));
	}

} catch (e) {
	print("Error: ", e.message);
}
