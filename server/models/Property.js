//Property details (title, description, price, owner, etc.).
import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    owner_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: String,
    description: String,
    location: String,
    price: Number,

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },
    rejectionReason: {
      type: String,
      default: null
    },

  },
  { timestamps: true }
);

export default mongoose.model("Property", propertySchema);
