#!/usr/bin/gjs

const Lang = imports.lang;
const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const Gtk = imports.gi.Gtk;

const App = new Lang.Class({
	Name: 'App',
	Extends: Gtk.Window,

	load_start: function(file, result) {

		try {
			var [ok, data, etag] = file.load_contents_finish(result);
			if (!ok) {
				print("Error: ");
				return;
			}
			print(data);
			//print(etag);
		} catch (e) {
			print("Error: ", e.message);
		}

	},

	load_async: function() {

		try {
			var file = Gio.File.new_for_path("data.txt");
			file.load_contents_async(null, Lang.bind(this, this.load_start));
		} catch (e) {
			print("Error: ", e.message);
		}
	}


});

App.new = function(type) {
	return new App({
		type: type
	});
}

Gtk.init(null, null);

/*
var win = new App({
	type: Gtk.WindowType.TOPLEVEL
});
*/

var win = App.new(Gtk.WindowType.TOPLEVEL);

//print(App.new);
//print(App);


win.connect('delete-event', Gtk.main_quit);
win.show_all();
win.load_async();
Gtk.main();

//https://blogs.gnome.org/danni/2012/03/30/classes-interfaces-properties-in-javascriptgjs/
//https://github.com/GNOME/gjs/blob/master/modules/lang.js
//https://wiki.gnome.org/Projects/GnomeShell/Gjs_StyleGuide
