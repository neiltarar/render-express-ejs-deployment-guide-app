const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const path = require('path');
const db = require('./db/db');

// Serve static files of the React app
app.use(express.static(path.join(__dirname, '/public/build')));

// Fetch all names from the database
app.get('/api/names', async (req, res) => {
    try {
        const result = await db.query('SELECT name FROM public.names;');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch names' });
    }
});

    // Serve the index.html file if it doesn't recognize the route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));