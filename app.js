require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'admin.html'));
});

app.get('/qr', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'qr.html'));
});

app.get('/userLogin', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'userLogin.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});