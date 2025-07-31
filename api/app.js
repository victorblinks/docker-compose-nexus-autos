const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const port = 5000;

// Database connection
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST || 'db',
    user: process.env.MYSQL_USER || 'nexususer',
    password: process.env.MYSQL_PASSWORD || 'nexuspass',
    database: process.env.MYSQL_DB || 'nexusautodb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Middleware
app.use(express.json());

// API Routes
app.get('/api/vehicles', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM vehicles');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.get('/api/vehicles/:id', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM vehicles WHERE id = ?', [req.params.id]);
        if (rows.length === 0) {
            return res.status(404).send('Vehicle not found');
        }
        res.json(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Start server
app.listen(port, () => {
    console.log(`API server running on port ${port}`);
});