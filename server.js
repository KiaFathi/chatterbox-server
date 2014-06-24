/* Import node's http module: */
var http = require("http");
var hReq = require('./server/request-handler.js');
var fs = require('fs');

/* Every server needs to listen on a port with a unique number. The
 * standard port for HTTP servers is port 80, but that port is
 * normally already claimed by another server and/or not accessible
 * so we'll use a higher port number that is not likely to be taken: */
var port = process.env.port || 1337;

/* For now, since you're running this server on your local machine,
 * we'll have it listen on the IP address 127.0.0.1, which is a
 * special address that always refers to localhost. */
var ip = "127.0.0.1";

fs.readFile('./client/index.html', function(err, html){
  if (err){
    throw err;
  }
  var server = http.createServer(function(request, response){
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();

  }).listen(port);
});

/* We use node's http module to create a server. Note, we called it 'server', but
we could have called it anything (myServer, blahblah, etc.). The function we pass it (handleRequest)
will, unsurprisingly, handle all incoming requests. (ps: 'handleRequest' is in the 'request-handler' file).
Lastly, we tell the server we made to listen on the given port and IP. */
// var server = http.createServer(hReq.handler);
// console.log("Listening on http://" + ip + ":" + port);
// server.listen(port);

// module.exports.server = server;
/* To start this server, run:
     node basic-server.js
 *  on the command line.

 * To connect to the server, load http://127.0.0.1:8080 in your web
 * browser.

 * server.listen() will continue running as long as there is the
 * possibility of serving more requests. To stop your server, hit
 * Ctrl-C on the command line. */
