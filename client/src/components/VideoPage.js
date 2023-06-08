import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import WatchNext from "./WatchNext";

const VideoPage = (props) => {
  let { state } = useLocation();
  const vidId = window.location.pathname.substring(
    7,
    window.location.pathname.length
  );
  const [videoId, setVideoId] = useState(
    state && state.videoId ? state.videoId : vidId
  );
  const [title, setTitle] = useState(state && state.title ? state.title : "");
  const [views, setViews] = useState(state && state.views ? state.views : "");
  const [posted, setPosted] = useState(
    state && state.posted ? state.posted : ""
  );
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [watchNextVideos, setWatchNextVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRelatedData = async () => {
    await fetch("https://ad-free-yt.vercel.app/api/video/" + vidId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setTitle(
          data.result.twoColumnWatchNextResults.results.results.contents[0]
            .videoPrimaryInfoRenderer.title.runs[0].text
        );
        setViews(
          data.result.twoColumnWatchNextResults.results.results.contents[0]
            .videoPrimaryInfoRenderer.viewCount.videoViewCountRenderer
            .shortViewCount.simpleText
        );
        setPosted(
          data.result.twoColumnWatchNextResults.results.results.contents[0]
            .videoPrimaryInfoRenderer.relativeDateText.simpleText
        );
        setWatchNextVideos(
          data.watchNext.playerOverlayRenderer.endScreen
            .watchNextEndScreenRenderer.results
        );
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchRelatedData();
  }, []);

  return (
    <Container>
      <Header />
      <br />
      <div id="video-container" className="shadow-lg p-3 mb-5 bg-white rounded">
        <Row>
          <iframe
            className="youtube-video"
            style={{ width: "100%" }}
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            frameborder="2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowfullscreen
          ></iframe>
        </Row>
        <br />
        <Row style={{ padding: "0 8% 2% 8%" }}>
          <Col lg={8}>
            <h4>{title}</h4>
          </Col>
          <Col id="video-details" lg={4}>
            {views}
            <br />
            {posted}
          </Col>
        </Row>
      </div>
      {/* <div>
        {watchNextVideos.length > 0 ? (
          <WatchNext videoData={watchNextVideos} />
        ) : (
          <h4>Loading...</h4>
        )}
      </div> */}
      
    </Container>
  );
};

export default VideoPage;
