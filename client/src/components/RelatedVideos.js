import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { Link, useNavigate } from "react-router-dom";

const RelatedVideos = (props) => {
  const [videos, setVideos] = useState(props.videoData);
  const navigate = useNavigate();
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 1400,
            min: 1200,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        desktop1: {
          breakpoint: {
            max: 3000,
            min: 1400,
          },
          items: 3.5,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 470,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        mobile1: {
          breakpoint: {
            max: 540,
            min: 470,
          },
          items: 1.2,
          partialVisibilityGutter: 30,
        },
        mobile2: {
          breakpoint: {
            max: 768,
            min: 540,
          },
          items: 1.4,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 991,
            min: 768,
          },
          items: 1.9,
          partialVisibilityGutter: 30,
        },
        laptop: {
          breakpoint: {
            max: 1200,
            min: 992,
          },
          items: 2.5,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
      // partialVisible
    >
      {videos.map((video, id) => {
        return (
          video.compactVideoRenderer && (
            <Row key={id}>
              <Col
                lg={12}
                md={12}
                sm={12}
                style={{
                  paddingLeft: "5%",
                  paddingRight: "5%",
                }}
              >
                <Link
                  to={`/watch/${video.compactVideoRenderer.videoId}`}
                  state={{
                    videoId: video.compactVideoRenderer.videoId,
                    title: video.compactVideoRenderer.title.simpleText,
                    views:
                      video.compactVideoRenderer.shortViewCountText &&
                      video.compactVideoRenderer.shortViewCountText.simpleText,
                    posted:
                      video.compactVideoRenderer.publishedTimeText &&
                      video.compactVideoRenderer.publishedTimeText.simpleText,
                  }}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  onClick={() => {
                    navigate(`/watch/${video.compactVideoRenderer.videoId}`);
                    window.location.reload();
                  }}
                >
                  <Image
                    src={video.compactVideoRenderer.thumbnail.thumbnails[1].url}
                    style={{
                      // width: "100%",
                      borderRadius: "10px",
                    }}
                  />
                </Link>
                <br />
              </Col>
              <Col
                lg={10}
                style={{
                  paddingLeft: "5%",
                  paddingRight: "5%",
                }}
              >
                <br />
                <Row>
                  <h5>
                    <Link
                      to={`/watch/${video.compactVideoRenderer.videoId}`}
                      state={{
                        videoId: video.compactVideoRenderer.videoId,
                        title: video.compactVideoRenderer.title.simpleText,
                        views:
                          video.compactVideoRenderer.shortViewCountText &&
                          video.compactVideoRenderer.shortViewCountText
                            .simpleText,
                        posted:
                          video.compactVideoRenderer.publishedTimeText &&
                          video.compactVideoRenderer.publishedTimeText
                            .simpleText,
                      }}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                      onClick={() => {
                        navigate(
                          `/watch/${video.compactVideoRenderer.videoId}`
                        );
                        window.location.reload();
                      }}
                    >
                      {video.compactVideoRenderer.title.simpleText}
                    </Link>
                  </h5>
                </Row>
                <Row>
                  <p>
                    {video.compactVideoRenderer.shortViewCountText &&
                      video.compactVideoRenderer.shortViewCountText.simpleText}
                    {"   "}
                    {"   "}
                    <span>•</span>{" "}
                    {video.compactVideoRenderer.publishedTimeText &&
                      video.compactVideoRenderer.publishedTimeText.simpleText}
                  </p>
                </Row>
              </Col>
            </Row>
          )
        );
      })}
    </Carousel>
  );
};

export default RelatedVideos;
