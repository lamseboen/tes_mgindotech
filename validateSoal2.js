const Joi = require('joi');
const schema = Joi.object({
    nama: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    hobi: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    alamat: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    no_telp: Joi.number()
        .required()
})



module.exports = schema