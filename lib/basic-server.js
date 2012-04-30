var server, service;

server = require('webserver').create();

service = server.listen(3333, function (req, res) {
	console.log(req);

	for (key in req) {
	    if (req.hasOwnProperty(key)) {
	        console.log('req: ' + key + ' = ' + req[key]);
	    }
	};

	for (key in res) {
	    if (res.hasOwnProperty(key)) {
	        console.log('res: ' + key + ' = ' + res[key]);
	    }
	};

    res.statusCode = 200;
    res.write('<html><body>Hello!</body></html>');
    res.close();
});