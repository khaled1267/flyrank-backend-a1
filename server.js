const express = require("express");
const db = require("./db");

const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./openapi.json");
const PORT = 3000;
app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const getTasks = db.prepare("SELECT * FROM tasks");
const getTaskById = db.prepare("SELECT * FROM tasks WHERE id = ?");
const insertTask = db.prepare("INSERT INTO tasks (title, done) VALUES (?, ?)");

// In-memory tasks
let tasks = [
  {
    id: 1,
    title: "Learn Node.js",
    done: false,
  },
  {
    id: 2,
    title: "Learn Express.js",
    done: false,
  },
  {
    id: 3,
    title: "Build CRUD API",
    done: true,
  },
];

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    name: "Task API",
    version: "1.0",
    endpoints: ["/tasks"],
  });
});

// Health endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
  });
});

// Get all tasks
app.get("/tasks", (req, res) => {
  try {
    const tasks = getTasks.all().map((task) => ({
      ...task,
      done: Boolean(task.done),
    }));

    res.json(tasks);
  } catch (error) {
    console.error("Failed to retrieve tasks:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get a single task by ID
app.get("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  let task;

  try {
    task = getTaskById.get(id);
  } catch (error) {
    console.error("Failed to retrieve task:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

  if (!task) {
    return res.status(404).json({
      error: "Task not found",
    });
  }

  res.json({
    ...task,
    done: Boolean(task.done),
  });
});

// Create a new task
app.post("/tasks", (req, res) => {
  const { title } = req.body ?? {};

  // Validate title
  if (!title || typeof title !== "string" || !title.trim()) {
    return res.status(400).json({
      error: "Title is required and must be a non-empty string",
    });
  }

  try {
    const result = insertTask.run(title.trim(), 0);
    const newTask = getTaskById.get(result.lastInsertRowid);

    res.status(201).json({
      ...newTask,
      done: Boolean(newTask.done),
    });
  } catch (error) {
    console.error("Failed to create task:", error);
    res.status(500).json({ error: "Internal server error" });
  }

});

// Update a task
app.put("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({
      error: "Task not found",
    });
  }

  const { title, done } = req.body;

  // Validate request body
  if (
    !req.body ||
    Object.keys(req.body).length === 0 ||
    (title !== undefined &&
      (typeof title !== "string" || !title.trim())) ||
    (done !== undefined && typeof done !== "boolean") ||
    (title === undefined && done === undefined)
  ) {
    return res.status(400).json({
      error: "Invalid request body",
    });
  }

  if (title !== undefined) {
    task.title = title.trim();
  }

  if (done !== undefined) {
    task.done = done;
  }

  res.json(task);
});

// Delete a task
app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({
      error: "Task not found",
    });
  }

  tasks.splice(taskIndex, 1);

  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
