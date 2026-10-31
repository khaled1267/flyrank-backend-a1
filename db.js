const path = require("node:path");
const Database = require("better-sqlite3");

const db = new Database(path.join(__dirname, "tasks.db"));

db.exec(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    done INTEGER NOT NULL DEFAULT 0
  )
`);

const taskCount = db.prepare("SELECT COUNT(*) AS count FROM tasks").get();

if (taskCount.count === 0) {
  const insertTask = db.prepare(
    "INSERT INTO tasks (title, done) VALUES (?, ?)",
  );

  const seedTasks = db.transaction(() => {
    insertTask.run("Learn Node.js", 0);
    insertTask.run("Learn Express.js", 0);
    insertTask.run("Build CRUD API", 1);
  });

  seedTasks();
}

module.exports = db;
