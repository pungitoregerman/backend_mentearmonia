const joi = require('joi')

const schema = joi.object({
            name: joi
            .string()
            .required()
            .min(2)
            .max(30)
            .messages({
                "any.required": "El campo es requerido.",
                "string.empty": "porfavor, introducí un nombre.",
                "string.min": "Porfavor, introducí un nombre with con mínimo de 3 letras.",
                "string.max": "Porfavor, introducí un nombre con máximo de 30 letras."
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
                "string.min": "Porfavor introducí un apellido con mínimo de 20 letras.",
                "string.max": "Porfavor introducí un apellido con máximo de 20 letras."
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
                "string.empty": "El campo esta vacío, porfavor ingrese un Email"
            }),
})

module.exports = schema