const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// In-memory array to store ToDo items
const todos = [];

// Route to get all ToDo items
app.get('/todos', (req, res) => {
  
  res.json({
    name: "Rittika",
    age : 18
})
});

// Route to add a new ToDo item
app.post('/todos', (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const newTodo = {
    id: todos.length + 1,
    title,
    completed: false,
  };

  todos.push(newTodo);

  res.status(201).json(newTodo);
});

// Route to update the completion status of a ToDo item
app.patch('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  const todo = todos.find((item) => item.id === parseInt(id));

  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  todo.completed = completed;
  res.json(todo);
});

// Route to delete a ToDo item
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;

  const index = todos.findIndex((item) => item.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  todos.splice(index, 1);
  res.json({ message: 'Todo deleted successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
