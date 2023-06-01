const { Schema, model } = require("mongoose");

const billingSchema = new Schema(
  {
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    phone_number: {
        type: Number,
    },
    payment_id: {
        type: Schema.Types.ObjectId,
        ref: "Payment",
    },
    items: [
        {
            type: Schema.Types.ObjectId,
            ref: "Illustration",
        }
    ],
  },
  {
    timestamps: true,
  }
);

const Billing = model("Billing", billingSchema);

module.exports = Billing;