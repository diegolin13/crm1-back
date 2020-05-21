const Ticket = require('../models/TicketModel');

module.exports = function (app) {
    app.get('/tickets', (req,res) => {
       Ticket.getTickets((err, tickets) => {
          if (err) {
              res.status(400).json({
                  ok: false,
                  message: err,
              });
          } else  {
              res.status(200).json({
                 ok: true,
                 tickets,
              });
          }
       });
    });

    app.get('/tickets/:id', (req, res) => {
        const idTicket = req.params.id;
       Ticket.getTicketById(idTicket, (err,ticket) => {
           if (err) {
               return res.status(400).json({
                  ok: false,
                  message: err,
               });
           } else {
               res.status(200).json({
                  ok: true,
                  ticket
               });
           }
       });
    });

    app.get('/tickets/:idMotivoTicket/:idSubarea' , (req, res)=> {
        const idMotivoTicket = req.params.idMotivoTicket;
        const idSubarea = req.params.idSubarea;
        Ticket.getTicketByIdMotivoAndIdSubarea(idMotivoTicket, idSubarea, (err, ticket) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: err,
                });
            } else {
                res.status(200).json({
                    ok: true,
                    ticket
                });
            }
        });
    });

    app.put('/tickets/:idTicket', (req, res) => {
        const idTicket = req.params.idTicket;
        const ticketData = {
            idEmpleado: req.body.idEmpleado,
            idSubarea: req.body.idSubarea,
            idEstadoTicket: req.body.idEstadoTicket,
            fechaSolicitud: req.body.fechaSolicitud,
            idMotivoTicket: req.body.idMotivoTicket,
            fechaCierre: req.body.fechaCierre,
            comentarios: req.body.comentarios,
            activo: req.body.activo,
            idTipoTicket: req.body.idTipoTicket,
            idEmpleadoReceptor:req.body.idEmpleadoReceptor,
            horaSolicitud: req.body.horaSolicitud,
            horaCierre: req.body.horaCierre,
            idCalificacionTicket: req.body.idCalificacionTicket,
            archivo: req.body.archivo
        }
        Ticket.updateTicket(ticketData, idTicket, (err, ticket) => {
            if (err) {
                res.status(400).json({
                    ok: false,
                    message: err
                });
            } else {
                res.json({
                    ok: true,
                    ticketData
                });
            }
        });
    });

    app.post('/tickets', (req, res) => {
        const ticketData = {
            idEmpleado: req.body.idEmpleado,
            idSubarea: req.body.idSubarea,
            idEstadoTicket: req.body.idEstadoTicket,
            fechaSolicitud: req.body.fechaSolicitud,
            idMotivoTicket: req.body.idMotivoTicket,
            fechaCierre: req.body.fechaCierre,
            comentarios: req.body.comentarios,
            activo: req.body.activo,
            idTipoTicket: req.body.idTipoTicket,
            idEmpleadoReceptor:req.body.idEmpleadoReceptor,
            horaSolicitud: req.body.horaSolicitud,
            horaCierre: req.body.horaCierre,
            idCalificacionTicket: req.body.idCalificacionTicket,
            archivo: req.body.archivo
        }
        Ticket.insertTicket(ticketData, (err, data) => {
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

}
