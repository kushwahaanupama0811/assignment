const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'ka99nbay',
  port: 5432,
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE
  );
`;

const createTable = async () => {
  try {
    await pool.query(createTableQuery);
    console.log('Table created successfully');
  } catch (err) {
    console.error('Error creating table:', err);
  }
};

const runMigrations = async () => {
  try {
    const client = await pool.connect();
    const migrationDir = path.join(__dirname, 'migrations');
    const files = fs.readdirSync(migrationDir).filter(file => file.endsWith('.sql'));

    if (files.length === 0) {
      console.log('No migration files found');
      return;
    }

    for (const file of files) {
      const filePath = path.join(migrationDir, file);
      const sql = fs.readFileSync(filePath, 'utf-8');
      console.log(`Running migration: ${file}`);
      await client.query(sql);
    }

    client.release();
    console.log('Migrations completed successfully');
  } catch (err) {
    console.error('Error running migrations:', err);
    process.exit(1);
  } finally {
    await pool.end();
  }
};

const initializeDatabase = async () => {
  await createTable();
  await runMigrations();
};

module.exports = {
    createTable,
    pool,
    initializeDatabase
  };;
