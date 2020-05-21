const express = require('express');
const bodyparser = require('body-parser');
const  mysql = require('mysql');
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}))

//controllers
require('./controllers/TicketsController')(app);


app.listen(app.get('port'), () => {
 console.log(`server works`);
});

