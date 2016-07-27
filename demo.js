var http = require("http"),
	fs = require('fs');

fs.readFile('./a.html', function (err, html) {
    if (err) {
        throw err; 
    }  

// create a local host server 
	http.createServer(function (req, res){
		res.writeHeader(200, {'Content-Type': 'text/html'});
		res.write(html); 
		res.end();
	}).listen(3000,'127.0.0.1'); 
});

// start server at cmd by type "node Chart_Test1.js"
console.log('Server running at http://127.0.0.1:1994');

