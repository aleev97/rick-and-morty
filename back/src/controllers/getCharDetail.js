//Ahora crearemos la ruta para obtener el detalle de un personaje.
const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharDetail = (req, res) => {
    const { detailId } = req.params //{id: 12}

    //"https://rickandmortyapi.com/api/character/12"
    axios.get(URL + detailId)
        .then(({ data }) => {

            const character = {
                id: data.id,
                name: data.name,
                species: data.species,
                image: data.image,
                gender: data.gender,
                status: data.status,
                origin: data.origin.name
            };

            return res.status(200).json(character);
        })
        .catch(error => { res.status(500).send(error.message) })
}

module.exports = { getCharDetail };