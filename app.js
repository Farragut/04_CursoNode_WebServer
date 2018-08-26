const http = require('http');
const PORT = 8080;


http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application / json' });
        let salida = {
            nombre: 'Reaper',
            edad: 22,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(PORT);
console.log(`Escuchando el puerto ${PORT}`);