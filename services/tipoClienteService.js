const db = require('./db');
const config = require('../config');

async function getAllTipoCliente(){

  const rows = await db.query(
    `SELECT * FROM tipo_cliente`
  );

  return rows
  
}

module.exports = {
    getAllTipoCliente
}