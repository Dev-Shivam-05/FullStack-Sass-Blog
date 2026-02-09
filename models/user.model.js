import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, "is invalid"],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    match: [
      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/,
      "must contain at least one uppercase letter, one lowercase letter, one number and one special character",
    ],
  },
  fullName: {
    type: String,
    trim: true,
  },
  role: {
    enum: ["VISITOR", "USER", "ADMIN"],
    type: String,
    default: "USER",
  },
  avatar: {
    type: String,
  },
  bio: {
    type: String,
    trim: true,
  },
  socialLinks: {
    type: Object,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  verificationToken: {
    type: String,
  },
  passwordResetToken: {
    type: String,
  },
  lastLogin: {
    type: Date,
  },
  loginAttempts: {
    type: Number,
    default: 0,
  },
  lockUntil: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: {
    type: Date,
    default: Date.now(),
  }
});

const User = mongoose.model("User", userSchema);

export default User;
