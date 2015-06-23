#!/usr/bin/gjs

const Gio = imports.gi.Gio;

var file = Gio.File.new_for_path("data.txt");

try {
	var dis = Gio.DataInputStream.new(file.read(null));

	var i = 0;

	while (1) {
		i++;
		var [line, length] = dis.read_until('-', null);
		if (line === null) break;
		print("===== part", i);
		print(line);
	}

} catch (e) {
	print("Error: ", e.message);
}

//https://people.gnome.org/~gcampagna/docs/Gio-2.0/Gio.DataInputStream.read_until.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
