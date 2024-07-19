-- migrations/001_create_todos_table.sql
CREATE TABLE IF NOT EXISTS todos (
  id SERIAL PRIMARY KEY,
  description1 TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE
);