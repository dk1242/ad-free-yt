import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Header from "./Header";

const VideoPage = () => {
  let { state } = useLocation();
  return (
    <Container>
      <Header />
      <br />
      <div id="video-container" className="shadow-lg p-3 mb-5 bg-white rounded">
        <Row>
          <iframe
            className="youtube-video"
            style={{ width: "100%" }}
            src={`https://www.youtube.com/embed/${state.videoId}`}
            title={state.title}
            frameborder="2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowfullscreen
          ></iframe>
        </Row>
        <br />
        <Row style={{ padding: "0 8% 8% 8%" }}>
          <Col lg={8}>
            <h4>{state.title}</h4>
          </Col>
          <Col id="video-details" lg={4}>
            {state.views}
            <br />
            {state.posted}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default VideoPage;
