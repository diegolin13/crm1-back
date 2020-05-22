const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const puerto = 3000;



// settings
app.set('port', process.env.PORT || puerto);

//middlewares
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}))

//controllers
// require('./controllers/TicketsController')(app);
// require('./controllers/ClienteController')(app);

//controllers
require('./controllers/index')(app);


app.listen(app.get('port'), () => {
 console.log(`server on port: ${puerto}`);
});

