var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator'); // Plugin para validaciones de emails. Envía errores de forma más estética.

var Schema = mongoose.Schema;

// Objeto para controlar roles válidos

var rolesValidos = {

    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol permitido'
};

var usuarioSchema = new Schema({

    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    email: { type: String, unique: true, required: [true, 'El correo es necesario'] },
    password: { type: String, required: [true, 'La contraseña es necesaria'] },
    img: { type: String, required: false },
    role: { type: String, required: true, default: 'USER_ROLE', enum: rolesValidos },
    google: { type: Boolean, default: false }

});


usuarioSchema.plugin(uniqueValidator, { message: 'El {PATH} debe de ser único' });

module.exports = mongoose.model('Usuario', usuarioSchema); // Para exportar el esquema.