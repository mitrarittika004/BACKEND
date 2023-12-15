//CREATING A WEB SERVER //http server
//we are creating a log

const http = require("http"); 
const fs =require("fs");
const port = 8001; 
//this is the requests handler
const myServer = http.createServer((req, res) => {
    //we should always use non blocking requests, so that the users dont have to wait
    //by this all the requests are handeled concurrently, no requests has to wait
    
    const log = `\n${Date.now()}: ${req.url} New Req Received`
    fs.appendFile('log.txt', log, (err , data)=>{
        switch(req.url){
            case "/":
                res.end("Welcome");
            break;
            case "/about":
                res.end("I am Rittika Mitra")
            default:
                res.end("404 Not Found");
        }
        res.end('Hello From Server Again'); 
    })
});


myServer.listen(port, () => console.log("Server Started!"));


/*
1.
const fs: This line declares a constant variable named fs, which is assigned the value of the fs module.
The fs module is a built-in Node.js module that provides an API for interacting with the file system.
2.
const myServer: This line declares a constant variable named myServer. It uses the createServer method 
of the http module to create an HTTP server. The callback 
function (req, res) => {...} is executed for each incoming request.
3.
const log = ${Date.now()}: New Req Received;: This line creates a log entry with the current 
timestamp and a message indicating a new request has been received.
4.
Node.js fs.appendFile() Function
The fs.appendFile() method is used to asynchronously append the given data to a file. A new file is created if it does not exist. The options 
parameter can be used to modify the behavior of the operation.
Syntax:
fs.appendFile( path, data[, options], callback )
fs.appendFile('log.txt', log, (err , data)

path: It is a String, Buffer, URL or number that denotes the source filename or file descriptor that will be appended to.
data: It is a String or Buffer that denotes the data that has to be appended.
options: It is an string or an object that can be used to specify optional parameters that will affect the output.
callback: It is a function that would be called when the method is executed.
err: It is an error that would be thrown if the method fails.

callback function in this case is :
(err, data) => {
     This code will be executed after the file operation is complete
}
err: If an error occurred during the file operation, err will contain an error object with information about the error.
 If the operation was successful, err will be null.

data: For fs.appendFile, this parameter will be undefined because it doesn't return any specific data. It's there for
 consistency with other file system methods that might return data.

 In summary,
  the fs.appendFile method appends data to a file. The callback function allows you to handle the outcome of the file operation,
 whether it was successful or encountered an error. It's crucial to check for errors in the callback and 
handle them appropriately based on your application's requirements.
*/