const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/stats", (req, res) => {
    // Placeholder for statistics and analytics
    res.json({ users: 10, blogPosts: 20, courses: 5 });
});

module.exports = router;