require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());  // Middleware to parse JSON body

const taskRoute = require('./routes/taskRoute');
app.use('/tasks', taskRoute);  // Set up the task routes

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});