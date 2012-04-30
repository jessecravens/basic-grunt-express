var fs = require('fs');

console.log(fs);

	for (key in fs) {
	    if (fs.hasOwnProperty(key)) {
	        console.log(key + ' = ' + fs[key]);
	    }
	};