const express=require('express');


//getting environment variables to be used 
require('dotenv').config();



// Main code starts here!!
const app=express();



//using React build folder as a public access point

app.use(express.static('client/build'));

//basic api request//
app.get('/xyz',(req,res)=>{
    res.send({hello:"salute"})
});

//Proxy to the react developmental server//

app.get('/api/xyxz',(req,res)=>{
  res.send({api:"xyzzz"})
});




///Default Case///
if(process.env.NODE_ENV==="production"){

    const path=require('path');

    app.get('/*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,"../client","build","index.html"));
    })

  }



  const port=process.env.PORT||1000;
app.listen(port,()=>{
    console.log(`listening to port ---> ${port}`);
    
});