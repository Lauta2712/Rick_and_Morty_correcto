const {Router} = require("express")
const {getCharById} = require("../controllers/getCharById");
const {getCharDetail} = require("../controllers/getCharDetail");
const {postFavs} = require("../controllers/favs")
const {getFavs} = require("../controllers/favs")
const {deleteFavs} = require("../controllers/favs")

const router = Router();

router.get('/onsearch/:id', getCharById)

router.get('/detail/:detailId', getCharDetail)

router.post('/favs', postFavs)

router.get('/favs', getFavs)

router.delete('/favs/:id', deleteFavs)

module.exports = router;