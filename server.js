const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api', authRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
