const express = require('express');
const path = require('path');
const app = express();


// Serve Angular app
app.use(express.static(path.join(__dirname, '..', 'dist', 'angular-node-app')));

// API endpoint (if needed)
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Node.js API' });
});

// Catch-all handler to serve Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'angular-node-app', 'index.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
