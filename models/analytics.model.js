import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema({
  blogId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  uniqueVisitors: {
    type: Number,
    default: 0,
  },
  like: {
    type: Number,
    default: 0,
  },
  comments: {
    type: Number,
    default: 0,
  },
  shares: {
    type: Number,
    default: 0,
  },
  averageReadTime: {
    type: Number,
    default: 0,
  },
  bounceRate: {
    type: Number,
    default: 0,
  },
  sources: {
    type: Object,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const analytics = mongoose.model("Analytics", analyticsSchema);

export default analytics;