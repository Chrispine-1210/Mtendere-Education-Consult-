const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Content = require("../models/Content");
const UserBehavior = require("../models/UserBehavior");

const checkAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: "Access denied" });
    }
    next();
};

// Manage Users
router.get("/users", checkAdmin, async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put("/users/:id", checkAdmin, async (req, res) => {
    try {
        const { role } = req.body;
        const user = await User.findByIdAndUpdate(req.params.id, { role }, { new: true });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete("/users/:id", checkAdmin, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "User deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Manage Content
router.get("/content", checkAdmin, async (req, res) => {
    try {
        const content = await Content.find();
        res.json(content);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put("/content/:id", checkAdmin, async (req, res) => {
    try {
        const { status } = req.body;
        const content = await Content.findByIdAndUpdate(req.params.id, { status }, { new: true });
        res.json(content);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// View Behavior Logs
router.get("/behavior-logs", checkAdmin, async (req, res) => {
    try {
        const logs = await UserBehavior.find();
        res.json(logs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
