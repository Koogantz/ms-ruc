const mongoose = require("mongoose");

const RucSchema = new mongoose.Schema(
  {
    businessName: {
      type: String,
      required: true,
    },
    documentNumber: {
      type: Number,
      unique: true,
      dropDups: true,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    businessAdress: {
      type: String,
      required: true,
    },
    ubigeoCode: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const RucModel = mongoose.model("Ruc", RucSchema, "merchantInfo");

module.exports = RucModel;
