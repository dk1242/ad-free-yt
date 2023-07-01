import React, { useState } from "react";
import { Alert, Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const YTLinkInput = () => {
  const navigate = useNavigate();
  const [ytlink, setYTlink] = useState("");
  const [errorText, setErrorText] = useState("");
  const searchVideo = (event) => {
    event.preventDefault();
    if (ytlink !== "") {
      setErrorText("");
      if (ytlink.includes("youtu.be")) {
        let videoId = ytlink.substring(ytlink.indexOf("youtu.be") + 9);
        navigate(`/watch/${videoId}`);
      } else if (ytlink.includes("youtube.com/watch")) {
        let videoId = ytlink.substring(ytlink.indexOf("watch?v=") + 8);
        navigate(`/watch/${videoId}`);
      } else {
        setErrorText(
          `Invalid YouTube link: ${ytlink}. Please enter a valid one.`
        );
      }
    }
  };
  return (
    <Row>
      <Col
        style={{
          marginTop: "1em",
        }}
      >
        <Form onSubmit={searchVideo}>
          <InputGroup className="mb-3" size="lg">
            <Form.Control
              placeholder="Enter Youtube Video Link"
              aria-label="YT Video Link"
              value={ytlink}
              onChange={(e) => {
                setYTlink(e.target.value);
              }}
              style={{ borderRadius: "20px 0 0 20px" }}
              required
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              onClick={searchVideo}
              style={{ borderRadius: "0 20px 20px 0" }}
              type="submit"
            >
              Watch
            </Button>
          </InputGroup>
        </Form>
        {errorText !== "" && (
          <Alert key="danger" variant="danger">
            {errorText}
          </Alert>
        )}
      </Col>
    </Row>
  );
};

export default YTLinkInput;
