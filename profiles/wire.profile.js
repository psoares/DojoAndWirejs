/**
 * This file is referenced by the `dojoBuild` key in `package.json` and provides extra hinting specific to the Dojo
 * build system about how certain files in the package need to be handled at build time. Build profiles for the
 * application itself are stored in the `profiles` directory.
 */

var profile = (function(){
	var testResourceRe = /test/,
		ignoreResourceRe = /jquery|sizzle/,

		copyOnly = function(filename, mid){
			return false;
		};

	return {
		resourceTags:{
			test: function(filename, mid){
				if (!ignoreResourceRe.test(mid) && testResourceRe.test(mid)) {
					console.log('**** TEST RESOURCE : ', filename, ' : ', mid);
					return true;
				}
				return false;
			},

			ignore : function(filename, mid) {
				if (ignoreResourceRe.test(mid) || mid=="wire/docs") {
					console.log('**** IGNORING RESOURCE : ', filename, ' : ', mid);
					return true;
				}
				return false;
			},

			amd: function(filename, mid){
				if (!testResourceRe.test(mid) && !copyOnly(filename, mid) && /\.js$/.test(filename)) {
					console.log('**** WIRE AMD ', filename, ' : ', mid);
					return true;
				}
				return false;
			}
		}
	};
})();
