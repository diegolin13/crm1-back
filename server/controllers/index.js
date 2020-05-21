module.exports = function (app) {
    require('./TicketsController')(app);
    require('./ClienteController')(app);
}
