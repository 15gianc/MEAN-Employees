const mongoose = require('mongoose');

const EmpleadoSchema = mongoose.Schema({
    correo: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },

    apellido: {
        type: String,
        required: true
    },

    ci: {
        type: Number,
        required: true
    },

    cargo: {
        type: String,
        required: true
    },

    salario: {
        type: Number,
        required: true
    },

    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);