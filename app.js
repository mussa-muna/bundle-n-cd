const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Add the "/name" route
app.get('/name/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Hello, ${name}!`);
  });

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
