const connection = require('../dbconnection');

let ticketModel = {};

ticketModel.getTickets = (callback) => {
    if (connection) {
        connection.query(`SELECT * FROM tickets`, (err, rows, fields) => {
           if (err) {
               throw err;
           } else {
               callback(null, rows)
           }
        });
    }
};

ticketModel.getTicketById = (idTicket, callback) => {
    if(connection) {
        connection.query(`SELECT * FROM tickets WHERE id = ?`, [idTicket] , (err, row) =>{
            if(err) {
                throw err;
            } else {
                callback(null, row);
            }
        });
    }
}

ticketModel.getTicketByIdMotivoAndIdSubarea = (idMotivoTicket, idSubarea, callback) => {
    if(connection) {
        connection.query(`SELECT * FROM tickets WHERE idMotivoTicket = ? AND idSubarea = ?`, [idMotivoTicket, idSubarea], (err, row) => {
            if(err) {
                throw err;
            } else {
                callback(null, row);
            }
        });
    }
}

ticketModel.updateTicket = (ticketData, idTicket,callback) => {
    if (connection) {
        const sql =  `
        UPDATE tickets SET
            idEmpleado = ${connection.escape(ticketData.idEmpleado)},
            idSubarea = ${connection.escape(ticketData.idSubarea)},
            idEstadoTicket = ${connection.escape(ticketData.idEstadoTicket)},
            fechaSolicitud = ${connection.escape(ticketData.fechaSolicitud)},
            idMotivoTicket = ${connection.escape(ticketData.idMotivoTicket)},
            fechaCierre = ${connection.escape(ticketData.fechaCierre)},
            comentarios = ${connection.escape(ticketData.comentarios)},
            activo = ${connection.escape(ticketData.activo)},
            idTipoTicket = ${connection.escape(ticketData.idTipoTicket)},
            idEmpleadoReceptor = ${connection.escape(ticketData.idEmpleadoReceptor)},
            horaSolicitud = ${connection.escape(ticketData.horaSolicitud)},
            horaCierre = ${connection.escape(ticketData.horaCierre)},
            idCalificacionTicket = ${connection.escape(ticketData.idCalificacionTicket)},
            archivo = ${connection.escape(ticketData.archivo)}
            WHERE id = ?
        `
        connection.query(sql, [idTicket] ,(err, result)=> {
            if(err) {
                throw err;
            } else {
                callback(null, result);
            }
        });
    }
}

ticketModel.insertTicket = (ticketData, callback) => {
    if (connection) {
        connection.query('INSERT INTO tickets SET ?', ticketData, (err,result) => {
            if (err) {
                throw err
            } else {
                callback(null, {
                    'ticketNuevo': result,
                })
            }
        }) ;
    }
}


module.exports = ticketModel;
