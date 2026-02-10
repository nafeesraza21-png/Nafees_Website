const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res)=>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html')
    res.end('<h1> This is Nafees Website</h1><p>Startign Web development!</p>');


})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);  // Changed to backticks
});
