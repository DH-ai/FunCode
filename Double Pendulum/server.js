const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log(`Request Made with code ${req.statusCOde}`);
    console.log (req.url,req.method)
    // res.setHeader
    
    fs.readFile('./Double Pendulum/index.html',(err,data)=>{
        if (err){
            console.log("Unable to Send the data");
            // console.log(path)
            res.setHeader('content-type','text/html');
            res.write("<h1>Error 401</h1>");
            res.end();
        }
        else{
            res.setHeader('content-type','text/html');
            res.write(data.toString());
            res.end();
        }
    })

})

let port = 5000

server.listen(port,'localhost',()=>{
    console.log("Listining on port 5000")
})