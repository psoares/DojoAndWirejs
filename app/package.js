/**
 * This file is referenced by the `dojoBuild` key in `package.json` and provides extra hinting specific to the Dojo
 * build system about how certain files in the package need to be handled at build time. Build profiles for the
 * application itself are stored in the `profiles` directory.
 */

var profile = (function(){
	var testResourceRe = /test/,

		ignoreResourceRe = /bower_components/,

		copyOnly = function(filename, mid){
			var list = {
				"app/package":1,
				"app/package.json":1

			};
			return (mid in list) ||
				/(css)$/.test(filename);
		};

	return {
		resourceTags:{
			test: function(filename, mid){
				return testResourceRe.test(mid) || mid=="app/test";
			},

			ignore : function(filename, mid) {
				if (ignoreResourceRe.test(mid)) {
					console.log('**** APP IGNORING RESOURCE : ', filename, ' : ', mid);
					return true;
				}
				return false;
			},

			declarative: function(filename){
			    return /\.(gsp|html)$/.test(filename); // tags any .html or .gsp files as declarative
			},

			copyOnly: function(filename, mid){
				return copyOnly(filename, mid);
			},

			amd: function(filename, mid){
				return !testResourceRe.test(mid) && !copyOnly(filename, mid) && /\.js$/.test(filename);
			}
		}
	};
})();
