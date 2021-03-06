const Cliente1 = require('../models/Cliente1Model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = function (app) {
    app.post('/login', (req, res) => {
        const body = req.body;
        const passwordIngresada = req.body.password;
        Cliente1.getCliente1ByEmail(body.correo, (err, cliente) => {
           if(err) {
             return res.status(400).json({
                  ok: false,
                  message: err,
               });
           }

           if (cliente.length === 0 ) {
             return  res.status(401).json({
                  ok: false,
                  message: '(Usuario) o contraseña no encontrados',
               });
           }

           const passwordBase = cliente[0].password;
           // if( passwordIngresada !== passwordBase ) {
           //     return  res.status(401).json({
           //         ok: false,
           //         message: 'Usuario o (contraseña) no encontrados'
           //     });
           //
           // }

            if (!bcrypt.compareSync(passwordIngresada, passwordBase)) {
                return res.status(401).json({
                   ok: false,
                   message: 'Usuario o (contraseña) no encontrados',
                });
            }


           let token = jwt.sign({
               usuario: cliente[0].correo,
           }, 'disque-secreto', {expiresIn : '3m' });

           res.status(200).json({
              ok: true,
              usuario: cliente[0].correo,
              token
           });

        });
    });

}
