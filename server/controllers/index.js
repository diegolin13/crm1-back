const cors = require('cors');
module.exports = function (app) {
    app.use(cors());
    require('./TicketsController')(app);
    require('./ClienteController')(app);
    require('./Cliente1Controller')(app);
    require('./LoginController')(app);
}
