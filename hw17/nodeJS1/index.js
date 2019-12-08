const http = require('http');
http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

    let body = '';
    req.on('data', (chunk) => {
      body = String(chunk); //преобразуем в JSON
    }).on('end', () => {
      res.end(body); //отдаем JSON
    })
}).listen(3000, '127.0.0.1', () => console.log('Server is listening on port:' + 3000));