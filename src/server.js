const express = require("express");
const routes = require("./routes");
const app = express();

require("./database");
 //ligando nosso servidor com a 
 //conexão do nosso banco de dados
 
app.use(express.json());
app.use(routes);

app.listen(3333);
