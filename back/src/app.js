const express = require('express');
const bodyParser = require('body-parser');
const pokemonRoutes = require('./api/routes/pokemonRoutes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', pokemonRoutes);

const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
