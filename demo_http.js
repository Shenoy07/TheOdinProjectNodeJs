var http = require('http');

//create a server object:
http.createServer(function (req, res) {

  res.write('Hello world!\n How are you ?'); //write a response to client
  res.end();//end the response

}).listen(8080);//the server object listens on port 8080
