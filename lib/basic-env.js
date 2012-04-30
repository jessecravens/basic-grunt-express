

var system = require('system'),
    env = system.env,
    key;


// require paths - NOT ACCESSIBLE from here
	for (var key in require.paths) {
	  if (require.paths.hasOwnProperty(key)) {
	    console.log(key + '  =  ' + require.paths[key]);
	  }
	};

// phantom env
for (key in env) {
    if (env.hasOwnProperty(key)) {
        console.log(key + '  =  ' + env[key]);
    }
}
phantom.exit();