import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const WatchNext = (props) => {
  const [videos, setVideos] = useState(props.videoData);
  console.log(videos);
  return (
    <>
      {videos.map((video, id) => {
        return (
          <Row key={id} className="shadow p-3 mb-5 bg-white rounded">
            <Col lg={4} id="video-thumbnail">
              <Link
                to={`/watch/${video.endScreenVideoRenderer.videoId}`}
                state={{
                  videoId: video.endScreenVideoRenderer.videoId,
                  title: video.endScreenVideoRenderer.title.simpleText,
                  views:
                    video.endScreenVideoRenderer.shortViewCountText &&
                    video.endScreenVideoRenderer.shortViewCountText.simpleText,
                  posted:
                    video.endScreenVideoRenderer.publishedTimeText &&
                    video.endScreenVideoRenderer.publishedTimeText.simpleText,
                }}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Image
                  src={video.endScreenVideoRenderer.thumbnail.thumbnails[3].url}
                  style={{ maxWidth: "100%", borderRadius: "10px" }}
                />
              </Link>
              <br />
            </Col>
            <Col lg={8} id="result-title-data">
              <Row>
                <h3>
                  <Link
                    to={`/watch/${video.endScreenVideoRenderer.videoId}`}
                    state={{
                      videoId: video.endScreenVideoRenderer.videoId,
                      title: video.endScreenVideoRenderer.title.simpleText,
                      views:
                        video.endScreenVideoRenderer.shortViewCountText &&
                        video.endScreenVideoRenderer.shortViewCountText
                          .simpleText,
                      posted:
                        video.endScreenVideoRenderer.publishedTimeText &&
                        video.endScreenVideoRenderer.publishedTimeText
                          .simpleText,
                    }}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    {video.endScreenVideoRenderer.title.simpleText}
                  </Link>
                </h3>
              </Row>
              <Row>
                <p>
                  {video.endScreenVideoRenderer.shortViewCountText &&
                    video.endScreenVideoRenderer.shortViewCountText.simpleText}
                  {"   "}
                  {"   "}
                  <span>•</span>{" "}
                  {video.endScreenVideoRenderer.publishedTimeText &&
                    video.endScreenVideoRenderer.publishedTimeText.simpleText}
                </p>
              </Row>
            </Col>
            <br />
          </Row>
        );
      })}
    </>
  );
};

export default WatchNext;
