const http = require('http');
const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('kalos irthate sto pro')
})






/* const express = require('express');
const app = express();
app.get('/',(req,res) => { res.send('Καλώς ήρθατε στον Express Server!');});
app.listen(8000, () => {
console.log("Ο Server τρέχει στη θύρα 8000");
}); */