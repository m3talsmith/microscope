var connect = require('connect'),
    http    = require('http');

var app = connect()
  .use(connect.static('public'))
  .use(connect.directory('public'))
  .use(function (request, response) {
    response.end("Hello. You shouldn't be seeing this. Tell your web master he's an idiot.");
   });

http.createServer(app).listen(1337);
