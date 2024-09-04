const { v4: uuidv4 } = require('uuid');

let tasks = [];

const findAll = () => {
  return tasks;
};

const findById = (id) => {
  return tasks.find(task => task.id === id);
};

const create = (title, description) => {
  const newTask = {
    id: uuidv4(),
    title,
    description,
    completed_at: null,
    created_at: new Date(),
    updated_at: new Date(),
  };
  tasks.push(newTask);
  return newTask;
};

const update = (id, title, description) => {
  const task = findById(id);
  if (task) {
    task.title = title;
    task.description = description;
    task.updated_at = new Date();
  }
  return task;
};

const remove = (id) => {
  tasks = tasks.filter(task => task.id !== id);
};

const markAsComplete = (id) => {
  const task = findById(id);
  if (task) {
    task.completed_at = new Date();
  }
  return task;
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
  markAsComplete,
};
