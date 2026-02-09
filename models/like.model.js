import { mongo } from "mongoose";

const like = mongo.Schema({
    blogId: {
        type: mongo.Schema.Types.ObjectId,
        ref: "Blog",
        required: true,
    },
    user: {
        type: mongo.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const likeModel = mongo.model("Like", like);

export default likeModel;