const express = require('express');
const router = express.Router();
const University = require('../models/University');

// GET: All Universities
router.get('/', async (req, res) => {
    const { search = '', country = '' } = req.query;
    const query = {
        name: { $regex: search, $options: 'i' },
        ...(country && { country }),
    };
    const data = await University.find(query).sort({ score: -1 });
    res.json(data);
});

module.exports = router;
