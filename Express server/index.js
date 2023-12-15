const express = require('express');
const app = express();
const port = 3017; // Use a different port every time 

app.get('/', function(req, res) {
  res.send("<h1> Ok , chalo  byee guys </h1>");
});
app.get('/About', function(req, res) {
    res.send("<h1>About Me</h1> <p>My name is Rittika Mitra</p>");
  });
app.get('/contact', function(req, res)  {
    res.send("<h1>Contact Me</h1>  <p> Phone no: 8920834973");
  });
app.get('/route-handler', function(req, res)  {
    res.json({
        name: "Rittika",
        age : 18
    })
  });
app.post('/conversations', (req,res)=>{
  console.log(req.headers)
    res.send({
        msg:"2+2=4"
    })
})

app.listen(port, function()  {
  console.log(`Server running on port ${port}`);
});


/*
 1. const express = require('express');:

Imports the express module, which is a popular Node.js web application framework.

 2. const app = express();:

Creates an instance of the Express application. The app object represents your web application and is used to configure routes and settings.

 3. const port = 3009;:

Specifies the port on which the server will listen. In this case, it's set to 3002. You can choose any available port number.

 4. app.get('/', (req, res) => { res.send('Hi guys!'); });:

Defines a route for HTTP GET requests to the root URL ("/"). When a user accesses the root URL, the callback function is executed.
The callback function takes two parameters: req (request) and res (response). In this case, it sends the string "Hi guys!" as the response.

5. app.listen(port, () => { console.log(Server running on port ${port}); });:

Starts the server and listens on the specified port (port). When the server starts successfully, the callback function is executed.
The callback logs a message to the console indicating that the server is running on the specified port.
*/
// requests :(req)incoming http request from the client eg : what we google search 
//response :(res)outgoing http response to be sent back to the client eg: the result we get after google search