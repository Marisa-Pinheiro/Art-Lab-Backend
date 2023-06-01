const { Schema, model } = require("mongoose");

const ilustrationSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
      },
    imageUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    date: {
      type: [Number],
      required: true,
    }
  }
);

const Ilustration = model("Ilustration", ilustrationSchema);

module.exports = Ilustration;