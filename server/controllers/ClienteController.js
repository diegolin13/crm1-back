const Cliente = require('../models/ClienteModel');

module.exports = function (app) {
    app.get('/clientes', (req, res) => {
       Cliente.getClientes((err, clientes) => {
           if (err) {
               res.status(400).json({
                   ok: false,
                   message: err,
               });
           } else  {
               res.status(200).json({
                   ok: true,
                   clientes,
               });
           }
       });
    });

    app.get('/clientes/:idCliente', (req, res) => {
       const  idCliente = req.params.idCliente;
       Cliente.getClienteById(idCliente, (err, cliente) => {
           if (err) {
               return res.status(400).json({
                   ok: false,
                   message: err,
               });
           } else {
               res.status(200).json({
                   ok: true,
                   cliente
               });
           }
       });
    });
}
