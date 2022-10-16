import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta, } from "../../content_option";
import Image from "../../assets/images/living.jpg"
import Image2 from "../../assets/images/12345.jpg"
import Image3 from "../../assets/images/AA.jpg"
import Image4 from "../../assets/images/Comparc.jpg"
import Image5 from "../../assets/images/Highrise.jpg"
import Image6 from "../../assets/images/Modernext.jpg"

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
              <div key={1} className="po_item">
                <img src={Image} alt="" />
                <div className="content">
                  <p>Living Room </p>
                  <a>view project</a>
                </div>
              </div>
              <div key={2} className="po_item">
                <img src={Image2} alt="" />
                <div className="content">
                  <p>Living ROom</p>
                  <a>view project</a>
                </div>
              </div>
              <div key={3} className="po_item">
                <img src={Image3} alt="" />
                <div className="content">
                  <p> Mosque </p>
                  <a>view project</a>
                </div>
              </div>
              <div key={4} className="po_item">
                <img src={Image4} alt="" />
                <div className="content">
                  <p> Mosque </p>
                  <a>view project</a>
                </div>
              </div>
              <div key={5} className="po_item">
                <img src={Image5} alt="" />
                <div className="content">
                  <p> Mosque </p>
                  <a>view project</a>
                </div>
              </div>
              <div key={6} className="po_item">
                <img src={Image6} alt="" />
                <div className="content">
                  <p> Mosque </p>
                  <a>view project</a>
                </div>
              </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};
