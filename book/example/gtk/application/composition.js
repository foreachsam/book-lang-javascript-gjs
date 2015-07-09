#!/usr/bin/gjs

const Lang = imports.lang;
const Gtk = imports.gi.Gtk;
const Gio = imports.gi.Gio;

const Win = new Lang.Class({
	Name: 'Win',
	_init: function(args) {
		this.win = new Gtk.Window({
			title: 'Example: App for Composite Gtk.Window',
			default_width: 800,
			default_height: 600,
			type: Gtk.WindowType.TOPLEVEL
		});
	},

	run: function() {
		this.win.show_all();
	}
});

Win.new = function() {
	return new Win();
}

const App = new Lang.Class({
	Name: 'App',
	_init: function(args) {
		this.app = new Gtk.Application({
			application_id: 'org.example.app',
			flags: Gio.ApplicationFlags.FLAGS_NONE
		});

		this.app.connect('activate', Lang.bind(this, this._onActivate));
	},
	_onActivate: function() {
		var win = Win.new();
		win.run();
		this.app.add_window(win.win);
	},

	run: function(args) {
		this.app.run(args);
	}
});

App.new = function() {
	return new App();
}

App.new().run(ARGV);

