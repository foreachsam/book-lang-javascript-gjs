#!/usr/bin/gjs

const Gio = imports.gi.Gio;


var file = Gio.File.new_for_uri("https://wiki.gnome.org/Projects/Gjs");

try {
	var dis = Gio.DataInputStream.new(file.read(null));

	while (1) {
		var [line, length] = dis.read_line_utf8(null);
		if (line === null) break;
		print(line);
	}

} catch (e) {
	print("Error: ", e.message);
}

//https://people.gnome.org/~gcampagna/docs/Gio-2.0/Gio.DataInputStream.read_line_utf8.html
