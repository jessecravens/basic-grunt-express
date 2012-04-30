
console.log(WebPage);

// var page = require('webpage').create());
var page = new WebPage(), 
	t, address;

console.log(page.settings)

var url = "http://localhost:3000/tests"; 


// set up event listeners
page.onLoadStarted = function () {
    console.log('Start loading...');
};

page.onLoadFinished = function (status) {
    console.log('Loading finished.');
};



// var page = require('webpage').create(),
//     t, address;

// Lets begin to setup our own Command line API
if (phantom.args.length === 0) {
    console.log('Usage: loadspeed.js <some URL>');
    phantom.exit();
} else {
    t = Date.now();
    address = phantom.args[0];
    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('FAIL to load the address');
        } else {
            t = Date.now() - t;
            console.log('Loading time ' + t + ' msec');
        }
        phantom.exit();
    });
}


page.open(url, function (status) {
  // do something

  	console.log(status);
  	console.log('Page title is ' + page.evaluate(function () {
    	return document.title;
	}));
});