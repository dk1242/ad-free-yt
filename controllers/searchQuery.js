exports.homePageResults = async (req, res) => {
  await fetch(`https://www.youtube.com/`)
    .then((resp) => {
      return resp.text();
    })
    .then((data) => {
      let searchresult = data.substring(
        data.indexOf("ytInitialData") + "ytInitialData = ".length,
        data.indexOf("</script>", data.indexOf("ytInitialData")) - 1
      );
      let searchResObj = JSON.parse(searchresult);
      res.json(searchResObj);
    });
};

exports.searchQuery = async (req, res) => {
  await fetch(
    `https://www.youtube.com/results?search_query=${req.params.query}`
  )
    .then((resp) => {
      return resp.text();
    })
    .then((data) => {
      let searchresult = data.substring(
        data.indexOf("ytInitialData") + "ytInitialData = ".length,
        data.indexOf("</script>", data.indexOf("ytInitialData")) - 1
      );
      let searchResObj = JSON.parse(searchresult);
      res.json(
        searchResObj.contents.twoColumnSearchResultsRenderer.primaryContents
          .sectionListRenderer.contents[0].itemSectionRenderer.contents
      );
    });
};

exports.videoPageResults = async (req, res) => {
  await fetch(`https://www.youtube.com/watch?v=${req.params.videoId}`)
    .then((resp) => {
      return resp.text();
    })
    .then((data) => {
      let searchresult = data.substring(
        data.indexOf("ytInitialData") + "ytInitialData = ".length,
        data.indexOf("</script>", data.indexOf("ytInitialData")) - 1
      );
      let searchResObj = JSON.parse(searchresult);
      res.json({
        result: searchResObj.contents,
        watchNext: searchResObj.playerOverlays,
      });
    });
};
