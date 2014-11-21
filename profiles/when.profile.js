/**
 * This file is referenced by the `dojoBuild` key in `package.json` and provides extra hinting specific to the Dojo
 * build system about how certain files in the package need to be handled at build time. Build profiles for the
 * application itself are stored in the `profiles` directory.
 */

var profile = (function(){
	var testResourceRe = /.*\/test.*/,
	copyOnly = function(filename, mid){
		var list = {
			"when/package.json":1,
			'when/es6-shim/Promise.browserify-es6':1
		};
		return (mid in list);
	}

	return {
		resourceTags:{
			ignore: function(filename, mid){
				return mid=="when/node";
			},
			
			copyOnly : function(filename, mid){
				return copyOnly(filename, mid);
			},
			
			amd: function(filename, mid){
				console.log('**** WHEN ', filename, ' : ', mid);
				return !testResourceRe.test(mid) && !copyOnly(filename, mid) && /\.js$/.test(filename);
			}
		}
	};
})();