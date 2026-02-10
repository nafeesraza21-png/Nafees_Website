const http = require('http');
const port = process.env.PORT || 3000;
const fs= require('fs')
const server = http.createServer((req, res)=>{
     res.statusCode = 200;
    res.setHeader('content-type', 'text/html')
    console.log(req.url)
    res.statusCode=200
    if(req.url =='/'){
    res.end('<h1> This is Nafees Website</h1><p>Startign Web development!</p>');
    }
   
    else  if(req.url =='/about'){
        res.statusCode=200
    res.end('<h1> This is about Nafees Website</h1><p>this is about website development</p>'); 
    }

     else  if(req.url =='/hello'){
        res.statusCode=200
     const data =   fs.readFileSync('index.html')
    res.end(data.toString()); 
    }

    else  if(req.url =='/resume'){
        res.statusCode=200
     const data =   fs.readFileSync('resume.html')
    res.end(data.toString()); 
    }


else
{
    res.statusCode = 404
     res.end('<h1>Page not found</h1><p>Page not found on this server !</p>'); 
}

})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);  // Changed to backticks
});
