const express = require("express");
const router = express.Router();

const {
  searchQuery,
  homePageResults,
  videoPageResults,
} = require("../controllers/searchQuery");

router.get("/home", homePageResults);
router.get("/search/:query", searchQuery);
router.get("/video/:videoId", videoPageResults);

module.exports = router;
