const express = require('express');
const miMiddleware = require('./middleware/logger');
const routes = require('./routes/routes');
const app = express();
var router = express.Router();

router.get('/',(req, res) =>{
    res.send('Pagina de Inicio');
  });

app.use(miMiddleware.logger);
app.use(router);
app.use(routes);

app.listen(3000,() => {
    console.log('servidor arrancado');
});