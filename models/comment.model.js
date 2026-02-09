import mongoose from "mongoose";

const comments = mongoose.Schema({
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    parentCommentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        default: null,
    },
    isApproved: {
        type: Boolean,
        default: false,
    },
    isEdited: {
        type: Boolean,
        default: false,
    },
    editedAt: {
        type: Date,
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

const commentsModel = mongoose.model("Comment", comments);

export default commentsModel;