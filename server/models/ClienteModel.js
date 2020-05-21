const connection = require('../dbconnection');

let clienteModel = {};

clienteModel.getClientes = (callback) => {
    if (connection) {
        connection.query(`SELECT * FROM cliente`, (err,rows)=> {
            if (err) {
                throw err;
            } else {
                callback(null, rows)
            }
        });
    }
}

clienteModel.getClienteById = (idCliente, callback) => {
    if(connection) {
        connection.query(`SELECT * FROM cliente WHERE id = ?`, [idCliente], (err, row) => {
            if(err) {
                throw err;
            } else {
                callback(null, row);
            }
        });
    }
}

module.exports = clienteModel;
