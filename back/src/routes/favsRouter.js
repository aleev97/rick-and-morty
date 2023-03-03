const { Router } = require("express");
const { favs } = require("../utils/favs")

const favsRouter = Router();

//recibe un personaje por req.body. A este personaje lo  pusheo dentro de este arreglo.
favsRouter.post("/create", (req, res)=>{
  favs.push({ ...req.body });
  res.status(201).json(favs);
});

//obtengo los personajes guardados en el arreglo favs.
favsRouter.get("/get", (req, res)=>{
    return res.json(favs);
})

//elimina el personaje en el arreglo fav a partir del id que recibe por parámetro
favsRouter.delete("/delete/:id", (req, res)=>{
  const { id } = req.params;
  favs = favs.filter((char)=> char.id !== Number(id));
  return res.status(200).json({ favs })
});

module.exports = favsRouter;