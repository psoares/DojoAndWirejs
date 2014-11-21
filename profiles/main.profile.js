  /**
  * This is the default application build profile used by the boilerplate. While
  * it looks similar, this build profile is different from the package build
  * profile at `app/package.js` in the following ways:
  *
  * 1. you can have multiple application build profiles (e.g. one for desktop,
  * one for tablet, etc.), but only one package build profile; 2. the package
  * build profile only configures the `resourceTags` for the files in the
  * package, whereas the application build profile tells the build system how to
  * build the entire application.
  *
  * Look to `util/build/buildControlDefault.js` for more information on available
  * options and their default values.
  */

  var profile = {

    basePath: '.',

    // This is the directory within the release directory where built packages
    // will be placed. The release directory
    // itself is defined by `build.sh`. You should probably not use this; it is
    // a legacy option dating back to Dojo
    // 0.4.
    // If you do use this, you will need to update build.sh, too.
    // releaseName: '',

    // Builds a new release.
    action : 'release',

    // Strips all comments and whitespace from CSS files and inlines @imports
    // where possible.
    cssOptimize : 'comments',

    // Excludes tests, demos, and original template files from being included in
    // the built version.
    mini : true,

    // Uses Closure Compiler as the JavaScript minifier. This can also be set to
    // "shrinksafe" to use ShrinkSafe,
    // though ShrinkSafe is deprecated and not recommended.
    // This option defaults to "" (no compression) if not provided.
    optimize : 'closure',

    // We're building layers, so we need to set the minifier to use for those,
    // too.
    // This defaults to "shrinksafe" if not provided.
    layerOptimize : 'closure',

    // Strips all calls to console functions within the code. You can also set
    // this to "warn" to strip everything
    // but console.error, and any other truthy value to strip everything but
    // console.warn and console.error.
    // This defaults to "normal" (strip all but warn and error) if not provided.
    stripConsole : 'normal',

    // The default selector engine is not included by default in a dojo.js build
    // in order to make mobile builds
    // smaller. We add it back here to avoid that extra HTTP request. There is
    // also a "lite" selector available; if
    // you use that, you will need to set the `selectorEngine` property in
    // `app/run.js`, too. (The "lite" engine is
    // only suitable if you are not supporting IE7 and earlier.)
    selectorEngine : 'lite',

    defaultConfig: {
      hasCache:{
        "dojo-built": 1,
        "dojo-loader": 1,
        "dom": 1,
        "host-browser": 1,
        "config-selectorEngine": "lite",
        "config-tlmSiblingOfDojo":0
      },
      async: 1
    },

    // Builds can be split into multiple different JavaScript files called
    // "layers". This allows applications to
    // defer loading large sections of code until they are actually required
    // while still allowing multiple modules to
    // be compiled into a single file.
    layers : {
      // This is the main loader module. It is a little special because it is
      // treated like an AMD module even though
      // it is actually just plain JavaScript. There is some extra magic in
      // the build system specifically for this
      // module ID.
      'dojo/dojo' : {
        // By default, the build system will try to include `dojo/main` in
        // the built `dojo/dojo` layer, which adds
        // a bunch of stuff we do not want or need. We want the initial
        // script load to be as small and quick to
        // load as possible, so we configure it as a custom, bootable base.
        boot : true,
        customBase : true
      }
    },

    packages : [
    {
      name : 'dojo',
      location : '../app/bower_components/dojo'
    },
    {
      name : 'dijit',
      location : '../app/bower_components/dijit'
    },
    {
      name : 'dojox',
      location : '../app/bower_components/dojox'
    },
    {
      name : 'meld',
      main : 'meld',
      location : '../app/bower_components/meld',
      packageJson : {
        dojoBuild : "profiles/meld.profile.js"
      }
    },
    {
      name : 'poly',
      main : 'poly',
      location : '../app/bower_components/poly',
      packageJson : {
        dojoBuild : "profiles/poly.profile.js"
      }
    },
    {
      name : 'when',
      location : '../app/bower_components/when',
      packageJson : {
        main : 'when',
        dojoBuild : "profiles/when.profile.js"
      }
    },
    {
      name : 'wire',
      location : '../app/bower_components/wire',
      packageJson : {
        main : 'wire',
        dojoBuild : "profiles/wire.profile.js"
      }
    },{
      name : 'app',
      location : '../app'
    }
    ],

    // Providing hints to the build system allows code to be conditionally
    // removed on a more granular level than
    // simple module dependencies can allow. This is especially useful for
    // creating tiny mobile builds.
    // Keep in mind that dead code removal only happens in minifiers that
    // support it! Currently, only Closure Compiler
    // to the Dojo build system with dead code removal.
    // A documented list of has-flags in use within the toolkit can be found at
    // <http://dojotoolkit.org/reference-guide/dojo/has.html>.
    staticHasFeatures : {
      // The trace & log APIs are used for debugging the loader, so we do not
      // need them in the build.
      'dojo-trace-api' 	  	: 1,
      'dojo-log-api'		  	: 1,
      'dojo-debug-messages' 	: 1,
      "host-browser":1,
      "dom":1,
      "dojo-amd-factory-scan":1,
      "dojo-loader":1,
      "dojo-has-api":1,
      "dojo-inject-api":1,
      "dojo-timeout-api":1,
      "dojo-trace-api":1,
      "dojo-log-api":1,
      "dojo-dom-ready-api":1,
      "dojo-config-api":1,
      "dojo-sniff":1,
      "dojo-sync-loader":1,
      "dojo-test-sniff":1,
      "config-tlmSiblingOfDojo":0,

      // This causes normally private loader data to be exposed for debugging.
      // In a release build, we do not need
      // that either.
      'dojo-publish-privates' : 1,

      // This application is pure AMD, so get rid of the legacy loader.
      'dojo-sync-loader' 		: 0,

      // `dojo-xhr-factory` relies on `dojo-sync-loader`, which we have
      // removed.
      'dojo-xhr-factory' 		: 0,

      // We are not loading tests in production, so we can get rid of some
      // test sniffing code.
      'dojo-test-sniff' 		: 0
    }
  };
