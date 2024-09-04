const express = require('express');
const tasksRoutes = require('./src/routes/tasks');

const app = express();
app.use(express.json());

app.use('/tasks', tasksRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
