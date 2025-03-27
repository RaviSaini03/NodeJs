const http = require('http');
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000;
const home = fs.readFileSync('./index.html')
const about = fs.readFileSync('./about.html')
const contact = fs.readFileSync('./contact.html')
const services= fs.readFileSync('./services.html')

const server = http.createServer((req, res) => {
    url = req.url
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/home'){
        res.end(home);
    } else if(url == '/about'){
        res.end(about);
    } else if(url == '/contact'){
        res.end(contact);
    } else{
        res.end(services);
    }
});

server.listen(port, hostname, ()=>{
    console.log(`Server is running at: http://${hostname}:${port}/`);
});