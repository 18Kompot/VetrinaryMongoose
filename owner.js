const mongoose = require("mongoose");

const ownerObj = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: String,
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    age: {
      type: Number,
      min: 1,
      max: 99,
    },
    assignedvet: mongoose.ObjectId,
    ownedpet: [mongoose.ObjectId],
  },
  { collection: "Owner" }
);

exports.ownerObj = ownerObj;
