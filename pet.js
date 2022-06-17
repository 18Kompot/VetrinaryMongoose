const mongoose = require("mongoose");

const petObj = new mongoose.Schema(
  {
    nickname: {
      type: String,
      required: true,
    },
    favFood: String,
    age: {
      type: Number,
      min: 1,
      max: 99,
    },
  },
  { collection: "Pet" }
);

exports.petObj = petObj;
