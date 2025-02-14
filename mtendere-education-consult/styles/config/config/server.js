const { connection } = require('next/server');

require('dotenv').config();
cost express = require('express');
cost cors = require('cors');
cost connectDB = require('.config/db');
cost app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.get('/' (req, res) => res.send('API running...'));
cost PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('server running on port ${PORT' ());