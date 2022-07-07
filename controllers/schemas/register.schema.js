const Joi = require("joi");

module.exports = Joi.object({
  type: Joi.number().optional().default(2),
  ruc: Joi.string().required(),
});
