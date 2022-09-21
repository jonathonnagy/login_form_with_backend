const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
	cikkszam: { type: Number, unique: true},
	cikk_megnevezes: { type: String },
	netto_ar: { type: Number },
	afa: { type: Number }
  });
  
  const Data = mongoose.model("data", dataSchema);
  module.exports = Data;