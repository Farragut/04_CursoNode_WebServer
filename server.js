const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers')
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//express hbs
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Reaper',
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        year: new Date().getFullYear()
    });
})

app.listen(PORT, () => {
    console.log(`Escuchando peticiones en el puerto ${PORT}`);
});