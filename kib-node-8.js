// lesson-12 creating a server
var http = require( 'http' ),
server = http.createServer( (request,response) => {
  console.log( `Request was made :: ${request.url}` );
  response.writeHead( 200, {'Content-Type':'text/plain'} );
  response.end( 'sensei kibCode amekusalimia boom!' );
} );

server.listen( 3000, '127.0.0.1' );
console.log( 'server initialized and actively listening on port, 3000!' );
