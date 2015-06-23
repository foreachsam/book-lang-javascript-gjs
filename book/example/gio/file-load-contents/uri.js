#!/usr/bin/gjs

const Gio = imports.gi.Gio;

var file = Gio.File.new_for_uri("https://wiki.gnome.org/Projects/Gjs");

try {
	var [ok, data, etag] = file.load_contents(null);

	if (ok) {
		print(data);
	}

} catch (e) {
	print("Error: ", e.message);
}
