/*Download a Package
Downloading a package is very easy.

Open the command line interface and tell NPM to download the package you want.

I want to download a package called "upper-case":

C:\Users\Your Name>npm install upper-case   -->follow this command

*/

var http = require('http');

var uc = require('upper-case');

http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write(uc.upperCase("HelloWorld!"));
  res.end();
}).listen(8080);
//
