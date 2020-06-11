const Cliente1 = require('../models/Cliente1Model');
const bcrypt = require('bcrypt');

module.exports = function (app) {
    app.post('/cliente1', (req,res) => {
        cliente1Data = {
          correo: req.body.correo,
          password: bcrypt.hashSync(req.body.password, 10),
        };
       Cliente1.createCliente1(cliente1Data, (err, data) => {
           if (err) {
               res.status(400).json({
                   ok: false,
                   message: err
               });
           } else {
               res.json({
                   ok: true,
                   data
               });
           }
       });

    });

    app.get('/cliente1/:email', (req, res) => {
        const email = req.params.email;
        Cliente1.getCliente1ByEmail(email, (err, cliente) => {
            if (err) {
                res.status(400).json({
                    ok: false,
                    message: err
                });
            } else {
                res.json({
                    ok: true,
                    cliente
                });
            }
        });
    });

    app.get('/extensiones' , (req, res) => {
       Cliente1.getextensions((err, extensiones) => {
           if (err) {
               res.status(400).json({
                  ok: false,
                  message: err
               });
           } else {
               res.json({
                  ok: true,
                  extensiones
               });
           }
       }) ;
    });
}
