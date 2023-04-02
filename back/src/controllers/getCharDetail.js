const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = async (req, res) => {
    const {detailId} = req.params;
    await axios.get( URL + detailId )
    .then(response => {
        const character = {
            id : response.data.id,
            name : response.data.name,
            image : response.data.image,
            gender : response.data.gender,
            species : response.data.species,
            status : response.data.status,
            origin : response.data.origin?.name
        }
        res.status(200).json(character)
    }, 
        (error) => res.status(500).json(error.message)
    )
};

module.exports = {
    getCharDetail
}