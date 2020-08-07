const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const heroSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    heroname: {
      type: String,
      required: true,
    },
    classType: {
      type: String,
      required: true,
    },
    race: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Hero = mongoose.model("Hero", heroSchema);

module.exports = Hero;
