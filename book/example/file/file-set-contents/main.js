#!/usr/bin/gjs

const Lang = imports.lang;
const GLib = imports.gi.GLib;

try {
	var ok = GLib.file_set_contents("data.txt", "中文");
	//print(ok);
} catch (e) {
	print("Error: ", e.message);
}


//https://people.gnome.org/~gcampagna/docs/GLib-2.0/GLib.file_set_contents.html
