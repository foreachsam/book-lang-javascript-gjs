#!/usr/bin/gjs

const Lang = imports.lang;
const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const Gtk = imports.gi.Gtk;

const DownloadWindow = new Lang.Class({
	Name: 'App',
	Extends: Gtk.Window,

	_init: function(args) {
		this.parent({
			default_width: 800,
			default_height: 600,
			title: "Async I/O Example"
		});

		this.cancelable = Gio.Cancellable.new();

		/*
		this.cancelButton = new Gtk.Button({
			label: 'Cancel'
		});
		*/
		this.cancelButton = Gtk.Button.new();
		//this.cancelButton.label = 'cancle'; //https://people.gnome.org/~gcampagna/docs/Gtk-3.0/Gtk.Button-label.html
		this.cancelButton.set_label('Cancel'); //https://people.gnome.org/~gcampagna/docs/Gtk-3.0/Gtk.Button.set_label.html
		this.cancelButton.connect('clicked', Lang.bind(this, this._onCancel));
		this.cancelButton.set_sensitive(false);

		this.startButton = Gtk.Button.new();
		this.startButton.set_label('Load');
		this.startButton.connect('clicked', Lang.bind(this, this._onStart));

		//https://people.gnome.org/~gcampagna/docs/Gtk-3.0/Gtk.TextView.html
		var textView = new Gtk.TextView();
		this.textBuffer = textView.get_buffer(); //https://people.gnome.org/~gcampagna/docs/Gtk-3.0/Gtk.TextView.get_buffer.html
		//https://people.gnome.org/~gcampagna/docs/Gtk-3.0/Gtk.TextBuffer.html

		var scrolled = new Gtk.ScrolledWindow();

		scrolled.add(textView);

		//https://people.gnome.org/~gcampagna/docs/Gtk-3.0/Gtk.Box.html
		var box = Gtk.Box.new(Gtk.Orientation.VERTICAL, 6); //https://people.gnome.org/~gcampagna/docs/Gtk-3.0/Gtk.Box.new.html
		box.pack_start(this.startButton, false, true, 0);
		box.pack_start(this.cancelButton, false, true, 0);
		box.pack_start(scrolled, true, true, 0)
		this.add(box);

	},

	appendText: function(text) {
		var iter = this.textBuffer.get_end_iter();

		var now = GLib.DateTime.new_now(GLib.TimeZone.new_utc());

		var str = '';
		str += '[';
		str += now.to_unix(); //https://people.gnome.org/~gcampagna/docs/GLib-2.0/GLib.DateTime.to_unix.html
		str += '] ';
		str += text;
		str += "\n";

		this.textBuffer.insert(iter, str, -1); //https://people.gnome.org/~gcampagna/docs/Gtk-3.0/Gtk.TextBuffer.insert.html
	},

	_onStart: function(button) {
		button.set_sensitive(false);
		this.cancelButton.set_sensitive(true);
		this.appendText("Start clikced ...");

		var file = Gio.File.new_for_uri("http://python-gtk-3-tutorial.readthedocs.org/");
		file.load_contents_async(this.cancelable, Lang.bind(this, this._onReadyCallback), null);

	},

	_onCancel: function(button) {
		this.appendText("Cancel clicked ...")
		this.cancelable.cancel();
	},

	_onReadyCallback: function(file, result) {
		try {
			var [ok, data, etag] = file.load_contents_finish(result);
			this.appendText("Got content:" + data.toString().substring(0, 100));
			//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
		} catch (e) {
			this.appendText("Error: " + e.message);
			return;
		} finally {
			this.cancelable.reset();
			this.cancelButton.set_sensitive(false);
			this.startButton.set_sensitive(true);
		}


	}


});

DownloadWindow.new = function(type) {
	return new DownloadWindow({
		type: type
	});
}


Gtk.init(null, null);

var win = DownloadWindow.new(Gtk.WindowType.TOPLEVEL);
win.connect('delete-event', Gtk.main_quit);
win.show_all();

Gtk.main();


