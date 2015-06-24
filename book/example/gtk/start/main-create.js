#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null, null);

var win = Gtk.Window.new(Gtk.WindowType.TOPLEVEL);
win.connect('delete-event', Gtk.main_quit);
win.show_all();

Gtk.main();
