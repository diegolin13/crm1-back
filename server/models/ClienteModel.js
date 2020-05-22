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

clienteModel.getClienteByEmail = (email, callback) => {
    if (connection) {
        const sql = `SELECT * FROM cliente WHERE correo = ?`;
        connection.query(sql, [email], (err, rows) => {
            if(err) {
                throw err;
            } else {
                callback(null, rows);
            }
        });
    }
}

module.exports = clienteModel;
