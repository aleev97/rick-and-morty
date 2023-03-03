const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const  getCharById = (req, res) => {
    // const { id } = req.params // llega el id ej: {id: 12}
    console.log(req.url)
    const id = req.url.split("/").at(-1)
    //"https://rickandmortyapi.com/api/character/12"
  
    axios.get(URL + id)
    .then(({ data }) => {

        const character = {
            id: data.id,
            name: data.name,
            species: data.species,
            image: data.image,
            gender: data.gender,
        };

         res.status(200).json(character);
        })
        .catch(error => { res.status(500).send(error.message) })
}

module.exports = {  getCharById };