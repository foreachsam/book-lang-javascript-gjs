#!/usr/bin/gjs

const Lang = imports.lang;
const Gtk = imports.gi.Gtk;
const Gio = imports.gi.Gio;

const Win = new Lang.Class({
	Name: 'Win',
	Extends: Gtk.Dialog,
	_init: function(args) {
		this.parent({
			title: 'Example: Dialog for Extend Gtk.Window',
			default_width: 800,
			default_height: 600,
			type: Gtk.WindowType.TOPLEVEL
		});

	},

	run: function() {
		this.show_all();
		return this;
	}
});

Win.new = function() {
	return new Win();
}

const App = new Lang.Class({
	Name: 'App',
	Extends: Gtk.Application,
	_init: function(args) {
		this.parent({
			application_id: 'org.example.app',
			flags: Gio.ApplicationFlags.FLAGS_NONE
		});

		this.connect('activate', Lang.bind(this, this._onActivate));

	},

	_onActivate: function() {
		var win = Win.new();
		win.run();
		this.add_window(win);
	}
});

App.new = function() {
	return new App();
}

App.new().run(ARGV);
