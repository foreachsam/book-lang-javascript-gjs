#!/usr/bin/gjs

const Gio = imports.gi.Gio;


var file = Gio.File.new_for_path("big5.txt");

try {
	var dis = Gio.DataInputStream.new(file.read(null));

	while (1) {
		var [line, length] = dis.read_line(null);
		if (line === null) break;
		print(line.toString("big5"));
	}

} catch (e) {
	print("Error: ", e.message);
}
