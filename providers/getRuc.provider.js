const axios = require("axios");
const config = require("config");

const url = config.get("providers.ruc.url");
const token = config.get("providers.ruc.token");

module.exports.getRuc = async (type, ruc) => {
  const response = await axios.get(
    `${url}?tipo=${type}&ruc=${ruc}&token=${token}/`
  );

  if (response.status !== 200) throw Error("Error buscando el ruc");

  if (!response.data.ruc) throw Error(response.data.razon_social);

  return response.data;
};
