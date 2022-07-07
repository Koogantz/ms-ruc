const { getRuc } = require("../providers/getRuc.provider");
const RucModel = require("../models/ruc.model");
const registerSchema = require("./schemas/register.schema");

module.exports.register = async (data) => {
  try {
    await registerSchema.validateAsync(data);
    const { type, ruc } = data;
    const response = await getRuc(type, ruc);
    await RucModel.create({
      businessName: response.razon_social,
      documentNumber: response.ruc,
      businessAdress: response.direccion,
      department: response.departamento,
      province: response.provincia,
      district: response.distrito,
      ubigeoCode: response.ubigeo,
      status: response.estado,
    });
    return {
      status: 200,
      message: "Ruc registrado correctamente",
    };
  } catch (error) {
    console.log(error.message);
    return {
      status: 500,
      message: error.message || "Error al registrar ruc",
    };
  }
};

module.exports.getAll = async () => {
  try {
    const response = await RucModel.find();
    return {
      status: 200,
      data: response,
    };
  } catch (error) {
    console.log(error.message);
    return {
      status: 500,
      data: { message: error.message || "Error al obtener datos" },
    };
  }
};
