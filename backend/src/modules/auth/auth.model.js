import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 2,
      maxlength: 50,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 8,
      select: false,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("user", UserSchema);
export default User