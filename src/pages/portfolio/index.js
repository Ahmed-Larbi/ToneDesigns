import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta, } from "../../content_option";
import FsLightbox from 'fslightbox-react';
import Select from "react-select";
import { buildQueries } from "@testing-library/react";

export const Portfolio = () => {

  const [isOpen, setIsOpen] = React.useState(false);
  const [imgIndex, setImgIndex] = React.useState(0);
  const [imgType, setImgType] = React.useState(0);

  const selections = [
    { value: 'resident', label: 'Residential', color: "black" },
    { value: 'commerce', label: 'Commercial', color: "black" },
    { value: 'industry', label: 'Industrial', color: "black" }
  ]

  const colorStyles = {
    option: (styles, { data }) => {
        return {
            ...styles,
            backgroundColor: data.color,
        };
    },
};

  function imgDecider(image)
  {
    if(image === "BedRoom")
    {
      setImgIndex(1)
    }
    else if (image === "Hall")
    {
      setImgIndex(1)
    }
    else {
      setImgIndex(1)
    }
  }

  const handleChange = (event) => {
    switch(event.label)
    {
      case "Residential":
        setImgType(0)
        break
      case "Commercial":
        setImgType(2)
        break
      default:
        setImgType(4)
        break
    }
  }

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
        <Select options = {selections}menuPortalTarget={document.body} 
    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) } } onChange={handleChange} classNamePrefix="selectFilter"/>
        <div>
        <div key={imgIndex} className="po_item">
                <img src={dataportfolio[imgType].img} alt="" />
                { imgType === 0 ?
                <div className="content">
                  <button id="button1" onClick={ () => {setIsOpen(!isOpen); imgDecider("BedRoom") }}> Bed Room </button>
                  <button id="button2" onClick={ () => {setIsOpen(!isOpen); imgDecider("Hall") }}> Hall </button>
                  <button id="button3" onClick={ () => {setIsOpen(!isOpen); imgDecider("Entrance") }}> Entrance </button>
                  <button id="button4" onClick={ () => {setIsOpen(!isOpen); imgDecider("Bathroom") }}> Bathroom </button>
                </div>
               : <h2>Here</h2>}
          </div>

          <FsLightbox
                  toggler={isOpen}
                  sources={
                  dataportfolio[imgIndex].img
                  
                  }
                  />
        </div>
      </Container>
    </HelmetProvider>
  );
};
