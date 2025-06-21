// Express backend code placeholder
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const medications = [
  { name: 'Paracetamol', dosage: '500mg' },
  { name: 'Ibuprofen', dosage: '200mg' },
];

app.get('/api/medications', (req, res) => {
  res.json(medications);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

