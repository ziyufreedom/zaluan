

var http = require("http");

http.createServer(function (request,response) {
	response.writeHead(200,{'Content-type':'text/plain'});
	switch(request.url){
		case '/1.html' :
			response.write('111');
			break;
		default:
			response.write('404');
			break;
	}
	response.end("Hello World!");
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');