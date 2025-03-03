const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const Lecture = require("../models/Lecture");
const NoteSchema = require("../models/Note");
const Comment = require("../models/Comment");

const router = express.Router();

// MongoDB Connection
const uri = "mongodb+srv://devanshjaiswal291203:JkcVkZ9mkQmgN2oZ@cluster0.avlaf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.log("MongoDB connection error:", err));

// User Routes
router.post("/users", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Lecture Routes
router.post("/lectures", async (req, res) => {
    try {
        const lecture = await Lecture.create(req.body);
        res.status(201).json(lecture);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/lectures", async (req, res) => {
    try {
        const lectures = await Lecture.find();
        res.status(200).json(lectures);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Notes Routes
router.post("/notes", async (req, res) => {
    try {
        const note = await NoteSchema.create(req.body);
        res.status(201).json(note);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/notes/:courseId", async (req, res) => {
    try {
        const notes = await NoteSchema.find({ courseId: req.params.courseId });
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Comment Routes
router.post("/comments", async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(201).json(comment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/comments/:lectureId", async (req, res) => {
    try {
        const comments = await Comment.find({ lectureId: req.params.lectureId });
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
