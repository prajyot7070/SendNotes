import mongoose from "mongoose";

const LectureSchema = new mongoose.Schema({
    lectureId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    date: { type: Date, required: true },
    instructor: { type: String, required: true },
    tags: [String], // Keywords for search
    createdAt: { type: Date, default: Date.now }
});

export const Lecture = mongoose.model("Lecture", LectureSchema);
