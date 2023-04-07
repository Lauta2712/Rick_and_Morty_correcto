let {favs} = require('../utils/favs')

function postFavs ( req, res ) {
    favs.push(req.body);
    console.log(favs);
    res.status(201).json(favs);
}

function getFavs (req, res) {
    res.status(200).json(favs);
}

function deleteFavs (req, res) {
    let {id} = req.params;
    favs = favs.filter(char => char.id != id)
    console.log(favs);
    res.status(200).json(favs);
}

module.exports = {
    postFavs,
    getFavs,
    deleteFavs
}