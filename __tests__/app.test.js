// __tests__/app.test.js
const request = require('supertest');
const app = require('../../index'); // Import the app from index.js
const { pool, createTable } = require('../../migrate');

// Initialize the server
let server;

beforeAll(async () => {
  await createTable();
  // Start the server and assign it to `server`
  server = app.listen(4000); // Match the port number used in app.js
});

afterAll(async () => {
  await pool.end();
  server.close(); // Close the server
});

describe('To-Do API', () => {
  test('GET /api/fetch/all returns all todos', async () => {
    const response = await request(server).get('/api/fetch/all');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('POST /api/add creates a new todo', async () => {
    const response = await request(server)
      .post('/api/add')
      .send({ description: 'Test To-Do' });
    expect(response.statusCode).toBe(201);
    expect(response.body.description).toBe('Test To-Do');
  });
});
