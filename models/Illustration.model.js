const { Schema, model } = require("mongoose");

const ilustrationSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    name: {
      type: String,
      required: [true, "Name is required."],
      },
    imageUrl: {
      type: String,
      required: [true, "Image is required."],
    },
    price: {
      type: Number,
      required: [true, "Price is required."],
    }
  },
  {
    timestamps: true,
  }
);

const Ilustration = model("Ilustration", ilustrationSchema);

module.exports = Ilustration;