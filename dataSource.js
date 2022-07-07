const config = require("config");
const mongoose = require("mongoose");

const uri = config.get("datasource.uri");
const options = config.get("datasource.options");

mongoose.connect(uri, options);

module.exports.connection = mongoose;
