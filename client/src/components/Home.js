import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import ResultsPage from "./ResultsPage";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import YTLinkInput from "./YTLinkInput";

const Home = (props) => {
  const { state } = useLocation();
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(
    state && state.data.length > 0 ? state.data : []
  );
  const [loading, setLoading] = useState(false);

  const searchCall = async (event) => {
    if (searchText !== "") {
      event.preventDefault();
      setLoading(true);
      await fetch("https://ad-free-yt.vercel.app/api/search/" + searchText, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setSearchResults(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <Container>
      <Row
        style={{
          position: "sticky",
          backgroundColor: "#fff",
          top: "0",
        }}
        className="shadow-sm p-3 mb-5 bg-white rounded"
      >
        <Col lg={3} style={{ textAlign: "center", marginTop: "1em" }}>
          <h1>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Ad-free <span style={{ color: "red" }}>YT</span>
            </Link>
          </h1>
        </Col>
        <Col
          lg={6}
          style={{
            marginTop: "1em",
          }}
        >
          <Form onSubmit={searchCall}>
            <InputGroup className="mb-3" size="lg">
              <Form.Control
                placeholder="Search"
                aria-label="Search"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
                style={{ borderRadius: "20px 0 0 20px" }}
                required
              />
              <Button
                variant="outline-secondary"
                id="button-addon2"
                onClick={searchCall}
                style={{ borderRadius: "0 20px 20px 0" }}
                type="submit"
              >
                <i className="fa fa-search" aria-hidden="true"></i>
              </Button>
            </InputGroup>
          </Form>
        </Col>
        <Col></Col>
      </Row>
      {loading ? (
        <Row style={{ textAlign: "center" }}>
          <div className="spinner-container">
            <div className="spinner-3"></div>
          </div>
        </Row>
      ) : searchResults.length > 0 ? (
        <Row id="search-results">
          <ResultsPage searchResults={searchResults} />
        </Row>
      ) : (
        <Row style={{ textAlign: "center" }}>
          <div className="spinner-container">
            <div id="yt-link-cont">
              Enter the Youtube video title in the search box above.
              <br />
              or
              <br />
              Directly Paste the Youtube video link below
              <br />
              <YTLinkInput />
            </div>
          </div>
        </Row>
      )}
    </Container>
  );
};

export default Home;
