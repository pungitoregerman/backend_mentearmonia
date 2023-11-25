const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    nombreUsuario: {type: String, required: true},
    rolUsuario: {type: String, required: true},
    usuarioId:{type: mongoose.Types.ObjectId, ref:"users" ,required: true},
    fecha: {type: Date, required: true},
    titulo: {type: String, required: true},
    nota:[{type: String, required: true}],
})
const Notas = mongoose.model('nota',schema);

module.exports = Notas
