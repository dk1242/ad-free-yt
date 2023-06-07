const express = require("express");
const router = express.Router();

const { searchQuery, homePageResults } = require("../controllers/searchQuery");

router.get("/home", homePageResults);
router.get("/search/:query", searchQuery);

module.exports = router;
