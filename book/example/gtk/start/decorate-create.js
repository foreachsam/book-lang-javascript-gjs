#!/usr/bin/gjs

const Lang = imports.lang;
const Gtk = imports.gi.Gtk;

const Win = new Lang.Class({
	Name: 'Win',
	_init: function(args) {
		this.win = new Gtk.Window({
			title: 'Example: Creation for Decorate Gtk.Window',
			default_width: 800,
			default_height: 600,
			type: Gtk.WindowType.TOPLEVEL
		});

		this.win.connect('delete-event', Gtk.main_quit);
	},

	run: function() {
		this.win.show_all();
	}
});

Win.new = function() {
	return new Win();
}

Gtk.init(null, null);
Win.new().run();
Gtk.main();
