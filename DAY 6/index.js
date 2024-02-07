const express = require("express");
const PORT =3000;

const app=express();

function greetHandler(req,res){
    const name = req.query.name;

    if(name){
        res.send(`Hello,${name}`);
    }else{
        res.send("Hello,Guest");
    }
}

app.get("/greet",greetHandler);
app.listen(PORT,()=>{
    console.log(`App Listening  on ${PORT} port`);
})