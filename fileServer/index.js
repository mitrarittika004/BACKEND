const express = require("express");
const port = 2004;
const fs =require("fs");

const app =express();

app.get("/files/:fileName", function(req,res){
    const name =req.params.fileName;
    console.log(name);
    fs.readFile(name, "utf-8",function(err,data){
        res.json({
            data
        });
    })
});
app.listen(port,function(){
    console.log(`server running on port, ${port}`);
})