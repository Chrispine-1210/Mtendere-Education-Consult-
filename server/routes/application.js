const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    console.log("Received application:", req.body);
    res.json({ message: 'Application submitted successfully!' });
});

module.exports = router;
