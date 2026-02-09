import mongoose from "mongoose";

const categoryModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
    icon: {
        type: String,
    },
    color: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    blogCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});