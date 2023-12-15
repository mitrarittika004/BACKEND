import http from 'http';
import fs from 'fs';
import url from 'url'; 
const port = 8001; 
//this is the requests handler
const myServer = http.createServer((req, res) => {
    //we should always use non blocking requests, so that the users dont have to wait
    //by this all the requests are handeled concurrently, no requests has to wait
    
    const log = `${Date.now()}: ${req.url} New Req Received`
    const myUrl =url.parse(req.url,true);

    fs.appendFile('log.txt', log, (err , data)=>{
        switch(myUrl.pathname){
            case "/":
                if (req.method ==="GET") res.end("Welcome");
            break;
            case "/about":
                const username =myUrl.query.myName;
                res.end(`hi , ${username}`);
                break;
            case "/search":
                const search =myUrl.query.search_query;
                res.end("Here are your results for" + search);
                break;
            case "/signup":
                    if(req.method ==="GET") res.end("This is a sign up form");
                    else if (req.method === "POST"){
                        //DB QUERY
                        res.sendDate("Success");
                    }
            default:
                res.end("404 Not Found");
        }
        res.end('Hello From Server Again'); 
    })
});


myServer.listen(port, () => console.log("Server Started!"));
