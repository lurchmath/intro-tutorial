
# App configuration files

## What is this folder?

In this folder there are several different configuration files for the Lurch
app.  Each configuration file provides a different user experience, by changing
the app's appearance and behavior, including the location of items on menus,
the available locations for loading and saving documents, the visual appearance
of the app, and more.

The configuration options are in JSON format, and are passed directly to the app
when it is launched, using the `createApp()` function
[you can read about here](https://lurchmath.github.io/apidocs/app/Lurch.html#.createApp).
That page documents every option available to you in the JSON configuration.
You can also read example configuration options in
[this file,](https://github.com/lurchmath/lurch/blob/main/app/config/example-for-reference-only.js)
which are ready for you to copy and paste into your own configuration file, and
come with plenty of comments to explain what they do.

## Pre-built configurations

But rather than write your own configuration, it's easier to start with (or just
use) one of the pre-built ones in this folder.  Their purpose is to make it so
that you don't have to do a lot of work of customizing the settings on your own.
Here are the pre-built configurations.

 * `default.json` does not change any defaults from what you find documented in
   the `createApp()` defaults linked to above.  In particular, this results in:
    * all possible menu items and toolbar buttons being shown
    * all possible file load/save locations are permitted
    * no Help menu is shown, because no items for that menu have been defined
    * several other defaults specified in the documentation linked to above
 * `default-student.json` is the same as the previous, but hides menu items
   relevant only to developers
 * `minimal-student.json` sets up a minimal interface intended for a student,
   including the following features (among others)
    * hides menu items relevant only to instructors
    * allows importing files only from the web or your own computer
    * allows saving files only by downloading them to your computer
    * allows expressions to be edited only in advanced mode
    * sets document content style to minimal mode by default
 * `minimal-instructor.json` is the same as the previous, but also includes menu
   items relevant to developers

More pre-built configurations can be added to this repository at users' request.

## How to choose a configuration

When the app launches, it reads its configuration from `default.json` in this
folder.  If you would like to change the defaults, you can do any of the
following items.

 * **Easiest:** Add to the end of the Lurch app URL the code `?config=name`,
   replacing "name" with the name of the one you want to use, such as
   `?config=minimal-student`. This allows you to try out a configuration for
   just one session, without committing to it.  It also allows you to switch
   among configurations easily, say, by bookmarking the student and instructor
   versions of a configuration, and visiting whichever one you need in the
   moment.  This mode takes precedence over whatever options are stored in
   `default.json`.
 * **Easy but invasive:** Copy one of the other pre-built configuration files
   listed above over top of `default.json` (optionally backing it up first).
   This will permanently alter the default configuration for all users of the
   app.
 * **Almost easy:** Edit `app/index.html` and replace the line of code that
   says `const config = ...` with one that points directly to the config you
   want, like `const config = '../config/minimal-student.json'`.  No need to
   back up any config files, since you're not changing any.
 * **Harder but powerful:** Edit `default.json` and change its contents
   (optionally backing it up first). This will permanently alter the default
   configuration for all users of the app.

If you would like to make separate URLs for instructor and student versions of
the app, you proceed as follows.
 * Create a copy of `app/index.html` as, say, `app/instructor.html`.
 * Use the technique mentioned above to set the student configuration directly
   in the `app/index.html` file, like:
   `const config = '../config/minimal-student.json'`.
 * Use the same technique to set the instructor configuration directly in the
   `app/instructor.html` file, like:
   `const config = '../config/minimal-instructor.json'`.
