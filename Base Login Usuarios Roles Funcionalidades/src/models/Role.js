import mongoose from "mongoose";

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true
    },
    creator: {
      type: String,
      unique: false
    },
    functionalities: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Functionality",
      },
    ],
    state: {
      type: Number,
      unique: false,
      default: 1
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Role", roleSchema);