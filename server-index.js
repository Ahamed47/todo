const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//Routes

//create a todo to the table present in the DB.

app.post("/todos", async (req, res) => {
  try {
    const { detail } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo(detail) VALUES($1) RETURNING *",
      [detail]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all todos from the table present in the DB.

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a todo from the table present in the DB.

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE id = $1", [id]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo from the table present in the DB.

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE id = $1", [id]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

//server running on port 7777

app.listen(7777, () => {
  console.log("server has started on port 7777");
});
