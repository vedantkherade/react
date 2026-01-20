const http = require("http");

const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;

    if(url  == '/about'){
        res.end("About page")
    }else if(url == '/contact'){
        res.end("Contact")
    }else{
       res.end("Welcome");
    }
   
})

server.listen(port, 'localhost', () => {
  console.log(`Serving Running at http://${host}:${port}`);
})


// common JS modules