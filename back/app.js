var db = require('./db');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });


  db.query("SELECT * FROM Pokemons", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
