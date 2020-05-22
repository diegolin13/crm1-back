const connection = require('../dbconnection');

let Cliente1Model = {};

Cliente1Model.createCliente1 = (cliente1, callback) => {
    if(connection) {
        connection.query('INSERT INTO cliente1 SET ?', cliente1, (err, result) => {
            if(err) {
                throw  err
            } else {
                callback(null, {
                   'cliente1': result,
                });
            }
        });
    }
};

Cliente1Model.getCliente1ByEmail = (email, callback) => {
    if(connection) {
        connection.query('SELECT * FROM cliente1 WHERE correo = ?', email, (err, rows) => {
            if(err) {
                throw  err
            } else {
                callback(null, rows);
            }
        });
    }
}

module.exports = Cliente1Model;
