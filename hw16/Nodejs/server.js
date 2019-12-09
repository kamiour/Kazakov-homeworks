const http = require('http'); // подключаем http модуль
http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //for all requests
  res.setHeader("Access-Control-Allow-Headers", "*"); //for POST request
  if (req.url === '/post') {
    console.log('it is POST'); //в консоль
    let body = '';
    req.on('data', (chunk) => {
      body = String(chunk); //преобразуем в JSON
    }).on('end', () => {
      res.end(body); //выдаем пользователю JSON
    })
  } else {
    console.log('it is GET') //в консоль
    res.end('GET request'); //выдаем пользователю
  }
}).listen(3000, '127.0.0.1', () => console.log('Server is listening on port:' + 3000) );