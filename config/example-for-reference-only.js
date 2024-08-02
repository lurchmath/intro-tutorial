/*
 * This file is not actually in JSON format, so it cannot be loaded as a config
 * file for the Lurch app.  Instead, we insert JavaScript comments throughout
 * this file to show examples of how to use each setting available to you in a
 * config file.  Feel free to copy and paste sections of the configuration you
 * see below into your own configuration JSON file.  (Just don't copy and paste
 * the comments, because the JSON format doesn't support comments.)
 */
const example = {
    /*
     * The "menuData" section is used to specify the content of each menu in the
     * Lurch app.
     * 
     * The complete list of available menu items comes in two categories:
     * 
     * First, there are those built into TinyMCE, which you can find here:
     * https://www.tiny.cloud/docs/tinymce/latest/available-menu-items/#the-core-menu-items
     * 
     * Second, there are those built into Lurch, which are listed here:
     *  - aboutlurch
     *  - clearvalidation
     *  - deletesaved
     *  - docsettings
     *  - downloaddocumentcode
     *  - editdependencyurls
     *  - embeddocument
     *  - embedheader
     *  - enviroment
     *  - exportlatex
     *  - expositorymath
     *  - expression
     *  - extractheader
     *  - newlurchdocument
     *  - opendocument
     *  - paragraphabove
     *  - paragraphbelow
     *  - preferences
     *  - redpen
     *  - refreshdependencies
     *  - savedocument
     *  - savedocumentas
     *  - togglemeaning
     *  - validate
     *  - viewdependencyurls
     *  - viewdocumentascode
     * 
     * The "menuData" section is an object whose keys are the names of the
     * menus, and whose values are object with "title" and "items" fields, the
     * latter of which are strings containing the names of the items in that
     * menu, separated by spaces, with a "|" character indicating menu
     * separators.  The following example shows one way you might configure the
     * menus, but there are plenty of other menu items available, listed in the
     * comments further below.
     */
    "menuData" : {
        "file" : {
            "title" : "File",
            "items" : "newlurchdocument opendocument savedocument savedocumentas deletesaved"
        },
        "edit" : {
            "title" : "Edit",
            "items" : "undo redo | cut copy paste pastetext | link unlink openlink | preferences"
        },
        "insert" : {
            "title" : "Insert",
            "items" : "expression expositorymath | environment paragraphabove paragraphbelow"
        },
        "format" : {
            "title" : "Format",
            "items" : "bold italic underline strikethrough superscript subscript | styles blocks fontfamily fontsize align lineheight | removeformat"
        },
        "document" : {
            "title" : "Document",
            "items" : "docsettings | togglemeaning validate viewdependencyurls"
        },
        "help" : {
            "title" : "Help",
            "items" : "aboutlurch"
        }
    },
    /*
     * If you want to change any of the default attributes of a menu item that
     * is built into Lurch (not one that comes with TinyMCE), you can do so with
     * the "menuItems" section.  For example, let's say I did not want the
     * docsettings menu item to be called "Preferences" but rather "Settings."
     * And let's say I wanted to change its tooltip and icon as well.  I would
     * do so as follows.  Note that you can find a complete list of the
     * available TinyMCE icons at the URL below.
     * https://www.tiny.cloud/docs/tinymce/latest/editor-icon-identifiers/
     */
    "menuItems" : {
        "docsettings" : {
            "title" : "Settings",
            "icon" : "checklist",
            "tooltip" : "Edit the application's settings"
        }
    },
    /*
     * By default, Lurch sets up the application toolbars with the following
     * content, a format similar to the menu item lists shown above.  You can
     * override it as follows.
     */
    "toolbarData" : "undo redo | styles bold italic | alignleft aligncenter alignright outdent indent | numlist bullist",
    /*
     * If there are any other changes you want to make to the TinyMCE editor
     * setup, you can use the "editor" section, and any fields you provide in it
     * will be passed directly to the init() call for TinyMCE.  You can read
     * about the format for init() options here:
     * https://www.tiny.cloud/docs/tinymce/latest/editor-important-options/
     * For example, you could make the app's content read-only as follows.
     */
    "editor" : {
        "readonly" : true
    },
    /*
     * By default, Lurch warns users before they leave the app page that they
     * might lose unsaved work, using a browser popup.  If you want to remove
     * this behavior, you can disable it as follows.
     */
    "preventLeaving" : false,
    /*
     * You can choose the set of valid file sources for the File > Open menu
     * item (and the order in which they are presented) with the following
     * setting.  Here we list all the possible file sources, but you can change
     * this to a proper subset of them, in whatever order you prefer.
     */
    "fileOpenTabs" : [
        'From in-browser storage',  // A simple LocalStorage-based file system
        'From your computer',       // Upload from the user's computer
        'From the web',             // Import from a URL (typically in this repo)
        'From Dropbox',             // Allow the user to use their own Dropbox account
        'From my course'            // See below for documentation on this option
    ],
    /*
     * You can choose the set of valid file destinations for the File > Save
     * menu item (and the order in which they are presented) with the following
     * setting.  Here we list all the possible file destinations, but you can
     * change this to a proper subset of them, in whatever order you prefer.
     */
    "fileOpenTabs" : [
        'To in-browser storage',  // A simple LocalStorage-based file system
        'To your computer',       // Download to the user's computer
        'To Dropbox'              // Allow the user to use their own Dropbox account
    ],
    /*
     * You can choose the set of valid file storage locations where the user is
     * allowed to delete files using the File > Delete saved menu item (and the
     * order in which they are presented) with the following setting.  Here we
     * list all the possible file storage locations, but you can change this to
     * a proper subset of them, in whatever order you prefer.
     */
    "fileDeleteTabs" : [
        'In in-browser storage',  // A simple LocalStorage-based file system
        'In Dropbox'              // Allow the user to use their own Dropbox account
    ],
    /*
     * If you want to extend the Help menu with documents specific to your
     * course content, for your students, you can do so by adding new items to
     * the help menu.  Each item needs just a title (the text that will appear
     * on the menu) and a URL (which will be opened when the item is clicked).
     * Here's an example.
     */
    "helpItems" : [
        {
            "title" : "Math 345 Syllabus",
            "url" : "https://www.someschool.edu/my-professor/math-345-syllabus.html"
        },
        {
            "title" : "View the Lurch tutorial",
            "url" : "https://lurchmath.github.io/intro-tutorial/"
        },
    ],
    /*
     * By default, Lurch autosaves the user's work every few seconds.  If they
     * do not save, but revisit the app later, it will alert them about the
     * recovered document and allow them to reload it or delete it.  You can
     * disable this behavior as follows.
     */
    "autoSaveEnabled" : false,
    /*
     * If you have reconfigured the folders in the repository so that the
     * web page containing the Lurch app is no longer in the same folder as the
     * editor.js file that loads the app, you can use the following setting to
     * specify where the editor.js file lies in your repository, so that the
     * app page can locate it.
     */
    "appRoot" : "/path/to/your/editor.js",
    /*
     * If you want to specify the default settings for a user of your copy of
     * Lurch, so that the first time they launch the app, it behaves in exactly
     * the way you intend, you can specify those defaults as follows.  Keep in
     * mind that any user can change their settings later, but this will provide
     * the initial defaults for all new users.  All settings are listed below,
     * but the full list of possible values for each is not listed, for the sake
     * of brevity.  To understand what each setting means, open the Lurch app's
     * Preferences dialog, where each of these settings appears and is explained
     * better than it is here.  If you need information not documented here,
     * please reach out to the Lurch developers for assistance; we're happy to
     * help.
     */
    "appDefaults" : {
        "notation" : "Lurch notation",
        "expression editor type" : "Beginner",
        "expository math editor type" : "Beginner",
        "dollar sign shortcut" : true,
        "default shell style" : "boxed",
        "application width in window" : "Fixed size",
        "developer mode on" : true,
        "default open dialog tab" : "From your computer",
        "default save dialog tab" : "To your computer",
        "add LaTeX document wrapper" : true,
        "export LaTeX shells" : true,
        "warn before extract header" : true,
        "warn before embed header" : true,
        "preferred meaning style" : "Hierarchy",
        "declaration type templates" : "Let [variable] be arbitrary\nLet [variable] be such that [statement]\n[statement], where [variable] is arbitrary\nReserve a new symbol [constant]\nFor some [constant], [statement]\n[statement], for some [constant]"
    },
    /*
     * If you want to specify the default document settings (those loaded into
     * each new document by default upon its creation) for a user of your copy
     * of the Lurch app, you can do so as follows.  Keep in mind that any user
     * of the document can change the document's settings thereafter.  As with
     * the previous section, to understand what each setting means, open the
     * Lurch app's document settings dialog, where each of these settings
     * appears and is explained better than it is here.  If you need information
     * not documented here, please reach out to the Lurch developers for
     * assistance; we're happy to help.
     */
    "documentDefaults" : {
        "title" : "Default title of a new document",
        "author" : "Default author of a new document",
        "date" : "Default date of a new document",
        "abstract" : "Default abstract of a new document",
        "notation" : "Lurch notation",
        "shell style" : "boxed",
        "instantiate everything" : false
    },
    /*
     * You can add new CSS content to the document editor by passing an array of
     * URLs to CSS files as follows.
     */
    "documentStylesheets" : [ "/path/to/your/style.css" ],
    /*
     * To make it easy for students to find exactly the files they need for your
     * course, one of the tabs in the File > Open dialog box is called "My
     * Course," and you can populate it with a hierarchical list of whatever
     * files you want to make easily accessible to your students.  Here is an
     * example of how I might do this if I had some files in the math folder of
     * a Lurch Site and I wanted to share them with students in an organized
     * way.
     */
    "myCourse" : [
        {
            // Folder for the logic section of the course
            "name" : "Logic",
            "contents" : [
                // Files to go in the logic folder
                {
                    "name" : "Propositional logic rules",
                    "path" : "../math/prop-logic-rules.lurch"
                },
                {
                    "name" : "Predicate logic rules",
                    "path" : "../math/pred-logic-rules.lurch"
                },
                {
                    "name" : "Homework Assignment 1 - Logic",
                    "path" : "../math/logic-homework-assignment.lurch"
                },
            ]
        },
        {
            // Folder for the number theory section of the course
            "title" : "Number Theory",
            "contents" : [
                // Files to go in the number theory folder
                {
                    "name" : "Axioms for Number Theory",
                    "path" : "../math/number-theory-axioms.lurch"
                },
                {
                    "name" : "Homework Assignment 2 - Axiomatic Number Theory",
                    "path" : "../math/nt-homework-assignment.lurch"
                },
                {
                    "name" : "Homework Assignment 3 - Divisibility",
                    "path" : "../math/div-homework-assignment.lurch"
                },
            ]
        },
        // And so on, as many files and folders as you like.
    ]
}
