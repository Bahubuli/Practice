const http = require('http');
const path = require('path');
const fs = require('fs');


const server = http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(`<h1>Home</h1>`);
    }

})

const PORT  = process.env.POST || 5000;

server.listen(PORT, ()=>console.log('server running on a port ',PORT));
