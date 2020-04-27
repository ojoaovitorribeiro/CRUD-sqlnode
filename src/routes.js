const express = require("express");
const AddressController = require("./controllers/AddressController");
const UserController = require("./controllers/UserController");
const TechController = require("./controllers/TechController");
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ hello: "Hello World" });
});
routes.post("/users", UserController.store);
routes.get("/listusers", UserController.index);

routes.post("/user/:user_id/addresses", AddressController.store);
routes.get("/user/:user_id/addresses", AddressController.index);

routes.post("/users/:user_id/techs", TechController.store);
routes.get("/users/:user_id/techs", TechController.index);
routes.delete('/users/:user_id/techs', TechController.delete);

  

const ReportController = require('./controllers/ReportController');
routes.get('/report', ReportController.show);

module.exports = routes;
