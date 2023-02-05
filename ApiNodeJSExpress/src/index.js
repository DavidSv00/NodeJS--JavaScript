const express = require('express');
const app = express();
const morgan = require('morgan');

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

//Routes
app.use(require('./routes/index'));

//Nuestro primer WS Get
app.get('/', (req, res) => {
    res.json(
        {
            "Title": "Hola mundo!"
        }
    );
})

//Iniciar el servidor escuchando...
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});
