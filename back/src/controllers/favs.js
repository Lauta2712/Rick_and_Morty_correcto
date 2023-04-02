const favs = require('../utils/favs')

function postFavs ( req, res ) {
    favs.push(req.body);
    res.status(201).json(favs);
}

function getFavs (req, res) {
    res.status(200).json(favs);
}

function deleteFavs (req, res) {
    const {id} = req.params;
    favs = favs.filter(char => char.id != id)
    res.status(200).json(favs);
}

module.exports = {
    postFavs,
    getFavs,
    deleteFavs
}