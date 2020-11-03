const express = require('express');
var routes = express.Router();

routes.get('/suma/:num1/:num2', (req, res) => {
    var num1=req.params.num1;
    var num2=req.params.num2;
    if (isNaN(Number(num1)) || isNaN(Number(num2))) {
        if(isNaN(Number(num1))){
            res.send('primer valor es no numerico o nulo');
        } else{
            res.send('segundo valor es no numerico o nulo');
        }
    } else {
        sumatoria = Number(num1) + Number(num2);
        res.send(num1 + '+' + num2 + '=' + sumatoria);
    }
})  

module.exports = routes;