const mongoose = require("mongoose");

const vetObj = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    phone: Number,
  },
  { collection: "Vet" }
);

exports.vetObj = vetObj;
