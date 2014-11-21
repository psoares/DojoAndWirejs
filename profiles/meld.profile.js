/**
 * This file is referenced by the `dojoBuild` key in `package.json` and provides extra hinting specific to the Dojo
 * build system about how certain files in the package need to be handled at build time. Build profiles for the
 * application itself are stored in the `profiles` directory.
 */

var profile = (function(){
	var testResourceRe = /.*\/test.*/,

		copyOnly = function(filename, mid){
			return false;
		};

	return {
		resourceTags:{
			test: function(filename, mid){
				return testResourceRe.test(mid) || mid=="wire/builder" || mid=="wire/docs";
			},

			declarative: function(filename){
			    return /\.html$/.test(filename); // tags any .html as declarative
			},

			copyOnly: function(filename, mid){
				return copyOnly(filename, mid);
			},

			amd: function(filename, mid){
				console.log('**** MELD ', filename, ' : ', mid);
				return !testResourceRe.test(mid) && !copyOnly(filename, mid) && /\.js$/.test(filename);
			}
		}
	};
})();
