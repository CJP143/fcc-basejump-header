
// init project
var express = require('express');
var app = express();
var months= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/api/whoami", function (request, response) {
 console.log(request.headers);
  response.json(getData(request));
  
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

function getData(req){
  var result={};
  var regex=/\(([^)]+)\)/
  result.ipaddress=req.get('x-forwarded-for').split(',')[0];
  result.language=req.get('Accept-Language').split(',')[0];
  result.software=regex.exec(req.get('user-agent'))[1].trim();
 console.log(result)
  return result;

}