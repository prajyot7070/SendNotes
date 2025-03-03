import express from "express";
import mongoose from "mongoose";
import { User } from "./models/User.js";
import { Lecture } from "./models/Lecture.js";
import { Note } from "./models/Note.js";
import { Comment } from "./models/Comment.js";
import { NoteSchema } from "./models/NoteSchema.js"; // Renamed from ConfusionMarker.js

const app = express();
const PORT = 5000;

// MongoDB Connection URI (Replace <db_password> with your actual password)
const MONGO_URI = "mongodb+srv://devanshjaiswal291203:JkcVkZ9mkQmgN2oZ@cluster0.avlaf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Middleware to parse JSON
app.use(express.json());

// ========== API ENDPOINTS ==========

// ✅ Create a User
app.post("/api/users", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Get All Users
app.get("/api/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Create a Lecture
app.post("/api/lectures", async (req, res) => {
    try {
        const lecture = await Lecture.create(req.body);
        res.status(201).json(lecture);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Get All Lectures
app.get("/api/lectures", async (req, res) => {
    try {
        const lectures = await Lecture.find();
        res.status(200).json(lectures);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Create a Note
app.post("/api/notes", async (req, res) => {
    try {
        const note = await Note.create(req.body);
        res.status(201).json(note);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Get Notes by Lecture ID
app.get("/api/notes/:lectureId", async (req, res) => {
    try {
        const note = await Note.findOne({ lectureId: req.params.lectureId });
        res.status(200).json(note);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Create a Comment
app.post("/api/comments", async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(201).json(comment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Get Comments by Lecture ID
app.get("/api/comments/:lectureId", async (req, res) => {
    try {
        const comments = await Comment.find({ lectureId: req.params.lectureId });
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Create a NoteSchema (previously ConfusionMarker)
app.post("/api/note-schema", async (req, res) => {
    try {
        const noteSchema = await NoteSchema.create(req.body);
        res.status(201).json(noteSchema);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Get NoteSchema by Lecture ID
app.get("/api/note-schema/:lectureId", async (req, res) => {
    try {
        const noteSchema = await NoteSchema.find({ lectureId: req.params.lectureId });
        res.status(200).json(noteSchema);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
