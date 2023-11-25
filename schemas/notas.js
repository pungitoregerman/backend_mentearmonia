const joi = require('joi')

const schema = joi.object({
            nombreUsuario: joi.any(),
            rolUsario: joi.any(),
            usuarioId: joi.any()
            ,
            fecha: joi.
            date()
            .required()
            .messages({
                "any.required": "Campo fecha es requerido.",
                "number.empty": "Introducí una fecha."
            }), 
            titulo: joi
            .string()
            .required()
            .min(5)
            .max(25)
            .messages({
                "any.required": "Campo nota es requerido.",
                "string.empty": "Introducí una nota.",
                "string.min": "Introducí un título con un máximo de 5 letras.",
                "string.max": "Introducí un título con un mínimo de 15 letras."
            }),
            nota: joi
            .string()
            .required()
            .min(10)
            .max(150)
            .messages({
                "any.required": "Campo nota es requerido.",
                "string.empty": "Introducí una nota.",
                "string.min": "Introducí una nota máximo con un de 10 letras.",
                "string.max": "Introducí una nota mínimo con un de 150 letras."
            }),
           

})

module.exports = schema