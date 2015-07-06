#!/usr/bin/gjs

const Notify = imports.gi.Notify;

Notify.init('Hello world');

let notify = new Notify.Notification({
	summary: 'Hello world!',
	body: 'This is an example of notifications.',
	'icon-name': 'dialog-information'
});

notify.show();

//https://wiki.archlinux.org/index.php/Desktop_notifications
//https://people.gnome.org/~gcampagna/docs/Notify-0.7/
//https://people.gnome.org/~gcampagna/docs/Notify-0.7/Notify.Notification.html
//https://people.gnome.org/~gcampagna/docs/Notify-0.7/Notify.Notification.show.html
//http://www.roojs.com/seed/gir-1.2-gtk-3.0/gjs/Notify.html
