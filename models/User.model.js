const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
    type: String,
    unique: true,
    required: [true, "Name is required."],
    
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    shoppingCart: [
      {
        type: Schema.Types.ObjectId,
        ref:'Illustration',
      }
    ],
    paymentInformation: {
      type: Schema.Types.ObjectId,
      ref:'Billing-details',
    },
  }
);

const User = model("User", userSchema);

module.exports = User;
