const express = require('express');
const morgan = require('morgan');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces',2);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Middlewares
app.use(express.json()); // para que mi servidor entienda este formato
app.use(morgan('dev')); //informacion por consola sobre lo que pasa con el servidor


//Routers
//app.use(require('../src/routes/search.routes'));
//app.use('/search', require('../routes/search.routes'));
app.use('/api/items', require('../src/routes/search.routes'));


//Starting server
app.listen(app.get('port'), () => {
    console.log('server on port' + app.get('port'));
});

