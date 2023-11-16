const joi = require('joi')

const schema = joi.object({
            name: joi
            .string()
            .required()
            .min(3)
            .max(20)
            .messages({
                "any.required": "El campo es required.",
                "string.empty": "El campo es empty, porfavor, introducí un nombre.",
                "string.min": "El campo es requerido, porfavor, introducí un nombre con mínimo de 3 letras",
                "string.max": "El campo es requerido, porfavor, introducí un nombre con máximo de 20 letras."
            })
            ,

            lastName: joi
            .string()
            .required()
            .min(3)
            .max(30)
            .messages({
                "any.required": "El campo es required.",
                "string.empty": "El campo es empty, porfavor, introducí un apellido.",
                "string.min": "El campo es requerido, porfavor, introducí un apellido con mínimo de 3 letras.",
                "string.max": "El campo es requerido, porfavor, introducí un apellido con máximo de 20 letras."
            }),
            age: joi
            .number()
            .required()
            .min(1)
            .messages({
                "any.required": "El campo es requerido.",
                "number.empty": "El campo esta vacío, porfavor ingrese una edad."

            }),
            email: joi
            .string()
            .email()
            .required()
            .messages({
                "any.required": "El campo es requerido.",
                "string.empty": "El campo es requerido, porfavor ingrese un Email"
            }),
            password: joi
            .string()
            .required()
            .min(8)
            .messages({
                "any.required": "El campo es requerido.",
                "string.empty": "El campo es requerido, porfavor, introduce una contraseña.",
                "string.min": "Introduce una contraseña de minimo 8 caracteres."
            }),
})

module.exports = schema