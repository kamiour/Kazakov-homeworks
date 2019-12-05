const http = require('http'); // подключаем http модуль!
http.createServer((req, res) => {
  //res.end('HELLO WORLD');

  // res.end(JSON.stringify({ name: 'SERGEi', lastName: 'SHAKHOV' })); //вывести в браузере
  // console.log({ name: 'SERGEi', lastName: 'SHAKHOV' }); //вывести в консоль

  // if (req.url === '/data') {
  //   res.end('success');
  // }
  // res.end('failure');
}).listen(3000, '127.0.0.1', () => console.log('Server is listening on port:' + 3000) );