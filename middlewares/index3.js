//middlewares
//https://expressjs.com/en/guide/using-middleware.html

const express =require("express");
const app = express();
const port = 3000;

//middlewares plugin
//make the headers as a url
//Returns middleware that only parses urlencoded bodies and only looks
// at requests where the Content-Type header matches the type option
app.use(express.urlencoded({extended: false}))

//then this middleware 1 runs

app.use((req,res,next)=>{
    console.log("Hello from middleware 1");
    req.userName ="rittika.dev";
    //return res.send("Hey"); //this doesnot let it go to middleware2
    next();//calls the middleware2
});


//then this middleware 2 runs

app.use((req,res,next)=>{
    console.log("Hello from middleware 2", req.userName);
    return res.send("Hey")//middleware2 returns hey as response //shown on POSTMAN
   //whenever there is the return function , mdddleware stops and then it doesnot goes to next function
    next();//in this case next() doesnot work,as already something is returned
});
//routes
app.get('/id', function(req,res){
    console.log("I am in the Get Route" , req.userName);
     return res.send("I am in my own hell")//will not return anything as response as the requests doesnot reaches here only
  
})
app.get('/user', function(req,res){
    const html=`
    <ul>
    <li>
    ma<br></li><li>
    Tinni<br></li><li>
    Rini<br>
    </li>
   
    </ul>
    `;
    res.send(html);
})
app.post('/conversation', function(req,res){
    console.log(req.body);
    res.send('hello world!')
})
app.listen(port, function()  {
    console.log(`Server running on port ${port}`);
  });