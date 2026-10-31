const express = require("express");

const app = express();

const PORT = 3000;
app.use(express.json());

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
  res.json(tasks);
});

// Get a single task by ID
app.get("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({
      error: "Task not found",
    });
  }

  res.json(task);
});

// Create a new task
app.post("/tasks", (req, res) => {
  const { title } = req.body;

  // Validate title
  if (!title || typeof title !== "string" || !title.trim()) {
    return res.status(400).json({
      error: "Title is required and must be a non-empty string",
    });
  }

  const newTask = {
    id: tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1,
    title: title.trim(),
    done: false,
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});