import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    lectureId: { type: String, required: true }, // Links to `lectures`
    content: { type: String, default: "" }, // Yjs CRDT content
    lastUpdated: { type: Date, default: Date.now }
});

export const Note = mongoose.model("Note", NoteSchema);
