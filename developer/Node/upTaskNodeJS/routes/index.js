const express = require('express');
const router = express.Router();


module.exports = function(){
    //rutas para el home
    router.get('/', (req, res) => {
        res.send('Index');
    })

    //rutas para el home
    router.get('/nosotros', (req, res) => {
        res.send('Nosotros');
    })

    return router;
}