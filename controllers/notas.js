const Notas = require('../models/Notas')

const controller = {
    create: async (req,res) => {
        let {user} = req;
        try{
            let new_nota = await Notas.create({
                usuarioId: user.userId,
                fecha: req.body.fecha,
                titulo: req.body.titulo,
                nota: req.body.nota,
                nombreUsuario: user.name,
                rolUsuario: user.role
        })
        res.status(200).json({
            response: new_nota,
            success: true,
            message: 'La nota fue creada correctamente.',
        })
        }catch(error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },
    read: async (req, res) => {
        let query = {};
        if (req.query.fecha) {
            fecha = { fecha: req.query.fecha }
        }
      
        try {
            let notas = await Notas.find(query).sort({ fecha: 1 });
            if (notas) {
                res.status(200).json({
                    response: notas,
                    success: true,
                    message: 'Notas encontradads.',

                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'No encontrado',
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },
    update:async (req, res) => {
      let { id } = req.params;
      let { user } = req
      console.log(req)
      try {
          let nota = await Notas.findOneAndUpdate({ _id: id }, {
          nota: req.body.nota,
          fecha: req.body.date,
          usuarioId: user.id,
          nombreUsuario: user.name,
      }, {
          new: true,
      });
      if (nota) {
      res.status(200).json({
          id: nota._id,
          success: true,
          message: "La nota fue modificada correctamente",
          });
      } else {
      res.status(404).json({
          success: false,
          message: "No se ha encontrado la nota",
          });
      }
      } catch (error) {
          console.log(error)
      res.status(400).json({
          success: false,
          message: error.message,
      });
  }},

  destroy:async (req, res) => {
      let { id } = req.params;
      try {
          let unaNota = await Notas.findOneAndDelete({ _id: id});
          if (unaNota) {
          res.status(200).json({
              success: true,
              message: "La nota se ha eliminado correctamente",
          });
      } else {
          res.status(404).json({
          success: false,
          message: "No se ha encontrado la nota",
          });
      }
      } catch (error) {
      res.status(400).json({
          success: false,
          message: error.message,
      });
  }
  },


}
module.exports = controller;