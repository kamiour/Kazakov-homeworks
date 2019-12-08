const http = require('http');
const url = require('url');
const phones = [
    {
        name: 'iphone7',
        price: 14000,
        color: 'black'
    },
    {
        name: 'iphone8',
        price: 18000,
        color: 'white'
    },
    {
        name: 'iphone10',
        price: 24000,
        color: 'pink'
    },
    {
        name: 'iphone11',
        price: 28000,
        color: 'black'
    },
    {
        name: 'sumsung',
        price: 14000,
        color: 'black'
    },
    {
        name: 'xiomi',
        price: 10000,
        color: 'black'
    },
    {
        name: 'meizu',
        price: 8000,
        color: 'green'
    },
    {
        name: 'huaiwei',
        price: 11000,
        color: 'black'
    },
];

http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let requestURL = new URL(req.url, 'http://localhost:3000/');
    if (requestURL.pathname === '/phones') {
        let priceRangeStart = requestURL.searchParams.get('priceS');
        let priceRangeStop = requestURL.searchParams.get('priceF');
        let phoneColor = requestURL.searchParams.get('color');
        let filteredPhones = phones.filter((item) => {
            if (item.price >= priceRangeStart && item.price <= priceRangeStop && item.color === phoneColor) {
                return item;
            }
        })
        res.end(JSON.stringify(filteredPhones));
    } else {
        res.end("Not requesting any phones now");
    }    
}).listen(3000, '127.0.0.1', () => console.log('Server is listening on port:' + 3000));