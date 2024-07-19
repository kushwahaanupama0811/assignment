TODO

This is a RESTful API built with Express.js and PostgreSQL, providing endpoints for managing to-do items. It includes Swagger documentation for easy interaction with the API and a simple PostgreSQL setup for data storage.

Requirements
Node.js
PostgreSQL

Installation

Clone the repository:
git clone 



Install dependencies:
npm i

Setup environment variables:
Create a .env file in the root directory and add the following environment variables .Replace it with your credential:
PG_HOST=localhost
PG_USER=your_postgres_username
PG_PASS=your_postgres_password
PG_PORT=5432
PG_DB=your_postgres_dbname


Swagger Documentation
Swagger provides interactive API documentation. It is available at /api-docs:

URL: http://localhost:3000/api-docs

API Endpoints
Fetch all to-do items:

URL: /api/fetch/all
Method: GET
Success Response:
json
Copy code
[
  {
    "id": 1,
    "description": "Sample To-Do Item"
  }
]
Add a new to-do item:

URL: /api/add
Method: POST
Request Body:
json
Copy code
{
  "description": "New To-Do Item"
}
Success Response:
json
Copy code
{
  "id": 2,
  "description": "New To-Do Item"
}



