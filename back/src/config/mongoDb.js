const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'Adalab';

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

const connectMongoDB = async () => {
  try {
    await client.connect();
    console.log('Conectado a MongoDB');
    db = client.db(dbName);
  } catch (err) {
    console.error('Error al conectar a MongoDB:', err);
  }
};

const getDb = () => {
  if (!db) {
    throw Error('La base de datos no está inicializada');
  }
  return db;
};

connectMongoDB();

module.exports = getDb;