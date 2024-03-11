const Joi = require('joi')

const createValidation = Joi.object({
    fullname: Joi.string().required().min(3),
    username: Joi.string().required().min(3),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6).max(30),
});

const updateValidation = Joi.object({
    fullname: Joi.string().required().min(3),
    username: Joi.string().required().min(3),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6).max(30),
});

const loginValidation = Joi.object({
    identifier: Joi.string().required(),
    password: Joi.string().required().min(6).max(30),
});

module.exports = {
    createValidation,
    updateValidation,
    loginValidation
}