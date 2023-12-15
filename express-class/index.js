const express =require("express");
const app =express();
const port =3020;

const users = [{
    name:"Rittika",
    kidneys:[{
        healthy:false
    }]

}];
//middleware
app.use(express.json())

//query parameter
app.get("/", function(req,res){
    //write logic
    const rittikakidneys =users[0].kidneys;
    const numberofKidneys = rittikakidneys.length;
    let numberofHealthyKidneys =0;
    for(let i=0 ; i<rittikakidneys.length; i++){
        if(rittikakidneys[i].healthy){
            numberofHealthyKidneys =numberofHealthyKidneys +1;
        }
    }
    const numberofUnhealthyKidneys = numberofKidneys -numberofHealthyKidneys;
    numberofHealthyKidneys;
    res.json({
        numberofKidneys ,
        numberofHealthyKidneys,
        numberofUnhealthyKidneys

    })
});   

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"DONE!"
    })
})

app.put("/" ,function(req,res){
    //update the unhealthy kidneys to healthy kidneys
    for(let i=0;i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy =true;
    }
    res.json({})
})

app.delete("/",function(req,res){
    //delete all the unheathy kidneys
    //we do this by creating a new kidney array
    const newKidneys =[];
    for(let i =0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy :true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg:"done!"})
    
})



app.listen(port,function(){
    console.log(`server running at port,${port}`);

});

/*

Getting  query parameter

function sum(n){
    let ans =0;
    for (let i=1; i<=n;i++){
        ans =ans+i;
    }
    return ans;
}

app.get("/", function(req,res){
    const n=req.query.n;
    const ans=sum(n);
    res.send("hi your ans is " +ans);
})
*/