import mongoose from "mongoose";

const SessionModel = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  ipAddress: {
    type: String,
  },
  userAgent: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600, // Session expires after 1 hour
  },
  expiresAt: {
    type: Date,
    required: true,
  },
});

const Session = mongoose.model("Session", SessionModel);

export default Session;
