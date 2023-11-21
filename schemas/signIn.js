const joi = require('joi')

const schema = joi.object({
            email: joi
            .string()
            .required()
            .min(2)
            .messages({
                "any.required": "El campo es requerido",
                "string.empty": "El campo es obligatorio, pofravor, introduce el email.",
                "string.min": "Porfavor, introduce un email válido.",
            }),
            password: joi
            .string()
            .required()
            .min(3)
            .messages({
                "any.required": "El campo es requerido.",
                "string.empty": "El campo es requerido, porfavor, introduce la contraseña.",
                "string.min": "Porfavor ingrese una contraseña correcta.",
            })
})

module.exports = schema