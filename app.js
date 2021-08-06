const http = require('http');

const hostname = 'localhost';
const port = 3030;

http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello, Let's Start Code");
}).listen(port, hostname, () =>{
    console.log(`Server Sedang Berjalan Pada http://${hostname}:${port}`);
});
