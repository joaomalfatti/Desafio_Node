const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const TaskModel = require('../models/taskModel');

// Função para importar tasks via CSV
const importTasksFromCSV = (req, res) => {
  const filePath = path.join(__dirname, '..', '..', 'uploads', req.file.filename);
  
  const results = [];
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => {
      // Supondo que o CSV tem colunas 'title' e 'description'
      const { title, description } = data;
      if (title && description) {
        TaskModel.create(title, description);
      }
    })
    .on('end', () => {
      // Após processar o CSV, remover o arquivo temporário
      fs.unlinkSync(filePath);
      res.status(201).json({ message: 'Tasks imported successfully' });
    })
    .on('error', (err) => {
      res.status(500).json({ error: 'Error processing CSV file', details: err.message });
    });
};

module.exports = {
  // Outras funções já existentes...
  importTasksFromCSV,
};
