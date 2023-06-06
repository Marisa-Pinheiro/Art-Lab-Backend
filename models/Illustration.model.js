const { Schema, model } = require("mongoose");

const ilustrationSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    name: {
      type: String,
      },
    imageUrl: {
      type: String,
    },
    price: {
      type: Number,
    },
    date: {
      type: Number,
    }
  }
);

const Ilustration = model("Ilustration", ilustrationSchema);

module.exports = Ilustration;