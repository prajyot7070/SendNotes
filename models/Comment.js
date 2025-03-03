import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    lectureId: { type: String, required: true }, // Links to `lectures`
    userId: { type: String, required: true }, // Links to `users`
    content: { type: String, required: true },
    position: { type: Number, required: true }, // Text index where comment is added
    upvotes: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

export const Comment = mongoose.model("Comment", CommentSchema);
