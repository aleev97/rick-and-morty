const express = require('express');
const cors = require("cors");
const server = express();
const PORT = 3001;
const router = require("./routes/index")
const favsRouter = require("./routes/favsRouter");


server.use(express.json()); // para que funcione mi cv con formato json
server.use(cors()) //habilito a todos a hacerme solicitudes a mi servidor
server.use("/rickandmorty/", router);
server.use("/favs", favsRouter);

server.listen(PORT, () => {
  console.log('Server raised in port ' + PORT);
});