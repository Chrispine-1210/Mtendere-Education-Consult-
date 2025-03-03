const { connection } = require('next/server');

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('.config/db');
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => res.send('API running...'));//+
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


// Next.js Server Middleware);

export const config = {
  api: {
    externalResolver: true,
  },
};