# Task API — FlyRank Backend Assignment

A simple RESTful Task Management API built with Node.js and Express.js.

## Features

- Get all tasks
- Get a single task by ID
- Create a new task
- Update an existing task
- Delete a task
- Input validation and error handling
- Interactive API documentation using Swagger UI

## Technologies

- Node.js
- Express.js
- JavaScript
- Swagger UI
- OpenAPI 3.0

## Installation

Clone the repository:

```bash
git clone https://github.com/khaled1267/flyrank-backend-a1.git
```

Navigate to the project:

```bash
cd flyrank-backend-a1
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

Server URL: `http://localhost:3000`

Swagger Documentation: `http://localhost:3000/docs`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | API information |
| GET | `/health` | Health check |
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get a task by ID |
| POST | `/tasks` | Create a task |
| PUT | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

## Example Request

POST `/tasks`

```json
{
  "title": "Learn Backend Development"
}
```

Example Response:

```json
{
  "id": 4,
  "title": "Learn Backend Development",
  "done": false
}
```

## HTTP Status Codes

- `200` — Successful request
- `201` — Task created
- `204` — Task deleted
- `400` — Invalid request body
- `404` — Task not found

## Data Storage

This project uses in-memory storage. Tasks are reset to their initial sample data whenever the server restarts. No database is used in this assignment.

## Swagger UI

Interactive API documentation is available at:

`http://localhost:3000/docs`

## Learning Outcomes

- Understanding REST APIs and HTTP methods
- Implementing CRUD operations
- Handling HTTP status codes
- Validating request data
- Testing APIs with Postman
- Documenting APIs with Swagger UI
- Using Git and GitHub

## Author

Khaled Mahmud

GitHub: https://github.com/khaled1267

# Task API — FlyRank Backend Assignment

A simple RESTful Task Management API built with Node.js and Express.js.

## Features

- Get all tasks
- Get a single task by ID
- Create a new task
- Update an existing task
- Delete a task
- Input validation and error handling
- Interactive API documentation using Swagger UI

## Technologies

- Node.js
- Express.js
- JavaScript
- Swagger UI
- OpenAPI 3.0

## Installation

Clone the repository:

```bash
git clone https://github.com/khaled1267/flyrank-backend-a1.git
```

Navigate to the project:

```bash
cd flyrank-backend-a1
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

Server URL: `http://localhost:3000`

Swagger Documentation: `http://localhost:3000/docs`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | API information |
| GET | `/health` | Health check |
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get a task by ID |
| POST | `/tasks` | Create a task |
| PUT | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

## Example Request

POST `/tasks`

```json
{
  "title": "Learn Backend Development"
}
```

Example Response:

```json
{
  "id": 4,
  "title": "Learn Backend Development",
  "done": false
}
```

## HTTP Status Codes

- `200` — Successful request
- `201` — Task created
- `204` — Task deleted
- `400` — Invalid request body
- `404` — Task not found

## Data Storage

This project uses in-memory storage. Tasks are reset to their initial sample data whenever the server restarts. No database is used in this assignment.

## Swagger UI

Interactive API documentation is available at:

`http://localhost:3000/docs`

## Learning Outcomes

- Understanding REST APIs and HTTP methods
- Implementing CRUD operations
- Handling HTTP status codes
- Validating request data
- Testing APIs with Postman
- Documenting APIs with Swagger UI
- Using Git and GitHub

## Author

Khaled Mahmud

GitHub: https://github.com/khaled1267