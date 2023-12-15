const http =require("http"); 
const port =8000;
//creates a web server
//This line creates an HTTP server using the createServer method
const myServer = http.createServer((req, res)=>{
    //stores the information about the requests
    //what does the requests wants to access & who is the user
    console.log(req.headers);
    //response object sends response to the user
    res.end('Hello From Server');
});
//handler function that handles incomming requests
//whenever there is a incomming requests , the callback function is run
myServer.listen(port , () =>  console.log("Server Started!"));
//This line starts the server by calling the listen method on the server object. The callback function is executed once the server is successfully listening,
// and it logs a message indicating that the server has started.