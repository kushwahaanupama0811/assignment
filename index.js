const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const { swaggerUi, swaggerSpec } = require('./swagger')
//console.log(swaggerUi)
const app = express();
const port = 3000;

// PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',     
  host: 'localhost',
  database: 'postgres',
  password: 'ka99nbay',
  port: 5432,
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(bodyParser.json());

// Fetch all to-do items
app.get('/api/fetch/all', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM todos');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Add a new to-do item
app.post('/api/add', async (req, res) => {
  const { description } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO todos (description) VALUES ($1) RETURNING *',
      [description]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
module.exports = app