const express = require('express');
const path = require('path')
const app = express();
const PORT = 3000;

const staticFiles = path.join(__dirname, 'static');
app.use(express.static(staticFiles));

app.get('/', (req, res) => {
  res.sendFile(path.join(staticFiles, '/index.html'));
});
app.get('/float', (req, res) => {
    res.sendFile(path.join(staticFiles, '/float_page.html'));
});
app.get('/flexbox', (req, res) => {
    res.sendFile(path.join(staticFiles, '/flexbox_page.html'));
});
app.get('/grid', (req, res) => {
    res.sendFile(path.join(staticFiles, '/grid_page.html'));
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});