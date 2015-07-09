#!/usr/bin/gjs

const Lang = imports.lang;
const Gtk = imports.gi.Gtk;

const Win = new Lang.Class({
	Name: 'Win',
	Extends: Gtk.Window,
	_init: function(args) {
		this.parent({
			title: 'Example: Creation for Inherit Gtk.Window',
			default_width: 800,
			default_height: 600,
			type: Gtk.WindowType.TOPLEVEL
		});

		this.connect('delete-event', Gtk.main_quit);
	},

	run: function() {
		this.show_all();
	}
});

Win.new = function() {
	return new Win();
}

Gtk.init(null, null);
Win.new().run();
Gtk.main();
