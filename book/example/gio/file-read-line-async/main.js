#!/usr/bin/gjs

const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;

function read_line(dis, result)
{
	var [line, length] = dis.read_line_finish(result);

	if (line === null) {
		main_loop.quit();
		return;
	}

	print(line);
	dis.read_line_async(GLib.PRIORITY_DEFAULT, null, read_line);
}


function read_async() {
	var file = Gio.File.new_for_path("data.txt");

	try {
		var dis = Gio.DataInputStream.new(file.read(null));


		dis.read_line_async(GLib.PRIORITY_DEFAULT, null, read_line);


	} catch (e) {
		print("Error: ", e.message);
	}


}

var main_loop = GLib.MainLoop.new(null, null);
read_async();
main_loop.run();


//https://wiki.gnome.org/Projects/Vala/GIOSamples#Asynchronous_Stream_Reading
//https://people.gnome.org/~gcampagna/docs/GLib-2.0/GLib.MainLoop.html
//https://people.gnome.org/~gcampagna/docs/GLib-2.0/GLib.MainLoop.new.html
//https://people.gnome.org/~gcampagna/docs/Gio-2.0/Gio.DataInputStream.read_line_async.html
