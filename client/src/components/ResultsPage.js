import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import VideoResults from "./VideoResults";

const ResultsPage = (props) => {
  const [resultData, setResultData] = useState(props.searchResults);
  const [videoData, setVideodata] = useState([]);

  const extractVideoData = () => {
    let tempArray = resultData.filter((data) =>
      data.hasOwnProperty("videoRenderer")
    );
    setVideodata(tempArray);
  };

  useEffect(() => {
    extractVideoData();
  }, []);

  return (
    <Container>
      {videoData.length > 0 ? (
        <VideoResults videoData={videoData} />
      ) : (
        <h5 style={{ textAlign: "center" }}>
          No videos were found for this search query. Please try with something else.
        </h5>
      )}
    </Container>
  );
};

export default ResultsPage;
