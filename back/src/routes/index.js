const { Router } = require("express");
const { getCharById } = require("../controllers/getCharById");
const { getCharDetail } = require("../controllers/getCharDetail");

const router = Router();

//antes de esto el link ya tiene "/rickandmorty/"
router.get("/onsearch/:id", getCharById);
router.get("/detail/:detailId", getCharDetail);

module.exports = router;