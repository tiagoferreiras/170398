const db = require('./db');
const config = require('../config');

async function getAllCliente(){
  const rows = await db.query(
    `SELECT * FROM cliente`
  );
  return rows
  
}

async function getClient(search){
    const rows = await db.query(
      `SELECT * FROM cliente WHERE id = '${search}' || email = '${search}'`
    );

    return rows

  }
  

async function saveCliente(cliente){
    await db.query(
      `INSERT INTO cliente
      (nome,
      telefone,
      email,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      uf,
      cep,
      tipo_cliente_id)
      VALUES
      ('${cliente.nome}',
        '${cliente.telefone}',
        '${cliente.email}',
        '${cliente.logradouro}',
        '${cliente.numero}',
        '${cliente.complemento}',
        '${cliente.bairro}',
        '${cliente.cidade}',
        '${cliente.uf}',
        '${cliente.cep}',
        ${cliente.tipoCliente})`
    );
  }


module.exports = {
    getClient,
    getAllCliente,
    saveCliente
}