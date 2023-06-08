import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const VideoResults = (props) => {
  const [videos, setVideos] = useState(props.videoData);
  return (
    <>
      {videos.map((video, id) => {
        return (
          <Row key={id} className="shadow p-3 mb-5 bg-white rounded">
            <Col lg={4} id="video-thumbnail">
              <Link
                to={`/watch/${video.videoRenderer.videoId}`}
                state={{
                  videoId: video.videoRenderer.videoId,
                  title: video.videoRenderer.title.runs[0].text,
                  views:
                    video.videoRenderer.shortViewCountText &&
                    video.videoRenderer.shortViewCountText.simpleText,
                  posted:
                    video.videoRenderer.publishedTimeText &&
                    video.videoRenderer.publishedTimeText.simpleText,
                }}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Image
                  src={video.videoRenderer.thumbnail.thumbnails[0].url}
                  style={{ maxWidth: "100%", borderRadius: "10px" }}
                />
              </Link>
              <br />
            </Col>
            <Col lg={8} id="result-title-data">
              <Row>
                <h3>
                  <Link
                    to={`/watch/${video.videoRenderer.videoId}`}
                    state={{
                      videoId: video.videoRenderer.videoId,
                      title: video.videoRenderer.title.runs[0].text,
                      views:
                        video.videoRenderer.shortViewCountText &&
                        video.videoRenderer.shortViewCountText.simpleText,
                      posted:
                        video.videoRenderer.publishedTimeText &&
                        video.videoRenderer.publishedTimeText.simpleText,
                    }}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    {video.videoRenderer.title.runs[0].text}
                  </Link>
                </h3>
              </Row>
              <Row>
                <p>
                  {video.videoRenderer.shortViewCountText &&
                    video.videoRenderer.shortViewCountText.simpleText}
                  {"   "}
                  {"   "}
                  <span>•</span>{" "}
                  {video.videoRenderer.publishedTimeText &&
                    video.videoRenderer.publishedTimeText.simpleText}
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

export default VideoResults;
