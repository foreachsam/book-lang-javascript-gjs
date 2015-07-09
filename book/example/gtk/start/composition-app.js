#!/usr/bin/gjs

const Lang = imports.lang;
const Gtk = imports.gi.Gtk;

const Win = new Lang.Class({
	Name: 'Win',
	_init: function(args) {
		this.win = new Gtk.Window({
			title: 'Example: App for Composite Gtk.Window',
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

const App = new Lang.Class({
	Name: 'App',
	run: function() {
		Gtk.init(null, null);
		Win.new().run();
		Gtk.main();
	}
});

App.new = function() {
	return new App();
}

App.new().run();

