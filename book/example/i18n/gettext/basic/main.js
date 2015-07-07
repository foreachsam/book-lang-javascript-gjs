#!/usr/bin/gjs

const GLib = imports.gi.GLib;

const GetText = imports.gettext;
const _ = GetText.gettext;

const _Package = 'vlc';

GetText.bindtextdomain(_Package, '/usr/share/locale');
GetText.textdomain(_Package);

print('===== locale =====');
print('LANG: \t\t\t', GLib.getenv('LANG'));
print('LANGUAGE: \t\t', GLib.getenv('LANGUAGE'));
print('LC_ALL: \t\t', GLib.getenv('LC_ALL'));
print('===== text =====');
print(_('File'));

//https://github.com/GNOME/gjs/blob/master/examples/gettext.js
//https://github.com/GNOME/gjs/blob/master/modules/gettext.js
////http://blog.longwin.com.tw/2009/11/ubuntu-910-add-set-locale-gen-2009/
//http://blog.longwin.com.tw/2007/09/gettext_php_i18n_2007/
//http://blog.roodo.com/rocksaying/archives/19453974.html
//http://blog.roodo.com/rocksaying/archives/15193601.html
//http://blog.roodo.com/rocksaying/archives/15171511.html



/*

$ dpkg -S /var/lib/locales/supported.d/zh-hant
language-pack-zh-hant-base: /var/lib/locales/supported.d/zh-hant

$ dpkg -S /var/lib/locales/supported.d/en
language-pack-en-base: /var/lib/locales/supported.d/en

$ dpkg -S /var/lib/locales/supported.d/local
dpkg-query: no path found matching pattern /var/lib/locales/supported.d/local

$ locale -a

$ locale


*/
