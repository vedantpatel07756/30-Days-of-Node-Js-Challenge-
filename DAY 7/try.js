const express = require("express");
const PORT =3000;

const app=express();

function requestLoggerMiddleware(req,res,next){
    const timestamp = new Date().toISOString();
    const method =req.method;
    console.log(`${timestamp}-${method} request received`);
    next();
}

app.use(requestLoggerMiddleware);

app.get("/",(req,res)=>{
    res.send("Hello , Welcome to to Model");
})


app.listen(PORT,()=>{
    console.log(`App Listening  on ${PORT} port`);
})