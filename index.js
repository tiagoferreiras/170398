const express = require("express");
const { getAllCliente, saveCliente, getClient } = require("./services/clienteService");
const { getAllTipoCliente } = require("./services/tipoClienteService");
const app = express();
const port = 3000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/tipos", async function(req, res) {
  res.json(await getAllTipoCliente());
});

app.post("/cliente/gravar", async function(req, res) {
    res.json(await saveCliente(req.body));
});

app.get("/cliente", async function(req, res) {
    res.json(await getAllCliente());
});

app.get("/cliente/buscar/:search", async function(req, res) {
    res.json(await getClient(req.params.search));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});