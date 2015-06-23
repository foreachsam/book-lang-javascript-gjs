#!/usr/bin/gjs

const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const Gtk = imports.gi.Gtk;

//print(ARGV);
Gtk.init(null, null);

var win = Gtk.Window.new(Gtk.WindowType.TOPLEVEL);
win.connect('delete-event', Gtk.main_quit);
win.show_all();
Gtk.main();

//https://people.gnome.org/~gcampagna/docs/Gtk-3.0/Gtk.Application.new.html
//https://people.gnome.org/~gcampagna/docs/Gtk-3.0/Gtk.Window.new.html
//https://people.gnome.org/~gcampagna/docs/Gtk-3.0/Gtk.WindowType.html
//https://developer.gnome.org/gnome-devel-demos/stable/window.js.html.en
//https://people.gnome.org/~gcampagna/docs/Gio-2.0/Gio.ApplicationFlags.html
//https://wiki.archlinux.org/index.php/GTK%2B_%28%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87%29
//https://wiki.archlinux.org/index.php/GTK%2B/Development
//https://github.com/GNOME/gjs/blob/master/examples/gtk.js
