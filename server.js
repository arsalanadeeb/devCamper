const express = require('express');
const dotenv  = require('dotenv');
const app = express();

dotenv.config({path:'./config/config.env'});
const PORT = process.env.PORT || 3000;
app.get('/',(req,res)=>{
res.writeHead(200,{'Content-Type':'text/plain'});
res.end('Hellow dev camper');
});
app.listen(PORT,
    ()=>{
        `DevCamper server started at ${PORT} in ${process.env.NODE_ENV}`;
    }
    );