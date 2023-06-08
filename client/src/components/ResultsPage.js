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
      {videoData.length > 0 && <VideoResults videoData={videoData} />}
    </Container>
  );
};

export default ResultsPage;
