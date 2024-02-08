const express = require('express');
const app= express();
const PORT = 3000;

function positiveIntegerHandler(req,res,next){
    const number = parseInt(req.query.number,10);

    if(Number.isInteger(number) && number > 0){
        return res.status(200).json({message:'Success'});
    }else{
        const error = new Error(`It is not a positive integer`);
        error.status = 400;
        next(error);

    }
}

function errorHandler(err,req,res,next){
    res.status(err.status || 500).json({error:err.message});

}

app.get('/positive',positiveIntegerHandler);
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})