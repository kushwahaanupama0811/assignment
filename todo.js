// src/routes/todos.js

/**
 * @swagger
 * tags:
 *   name: Todos
 *   description: API endpoints for managing todos
 */

/**
 * @swagger
 * /api/fetch/all:
 *   get:
 *     summary: Retrieve all todos
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: A list of todos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The to-do ID
 *                   description:
 *                     type: string
 *                     description: The description of the to-do
 *                   completed:
 *                     type: boolean
 *                     description: The completion status of the to-do
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/add:
 *   post:
 *     summary: Create a new todo
 *     tags: [Todos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 description: The description of the new to-do
 *     responses:
 *       201:
 *         description: The created to-do
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The to-do ID
 *                 description:
 *                   type: string
 *                   description: The description of the to-do
 *                 completed:
 *                   type: boolean
 *                   description: The completion status of the to-do
 *       500:
 *         description: Server error
 */
