import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ExperienceType } from "../types/sections";

const ExperienceCard = ({ companyLogo, company, role, date, desc, descBullets }: ExperienceType) => {
  return (
    <Col lg="6">
      <Card 
        style={{ 
          display: "block",         // Ensure block-level rendering
          width: "100%",            // Full width for consistency
          height: "100%",           // Full height within the container
          backgroundColor: "transparent", 
          border: "none" 
        }} 
        className="shadow-lg--hover my-4 shadow border-0 text-center rounded h-100"
      >
        <CardBody 
          style={{ 
            textAlign: "center", 
            backgroundColor: "transparent", 
            height: "100%" 
          }}
        >
          <img
            src={companyLogo}
            style={{
              objectFit: "contain",  // Ensures the entire image fits inside the circle
              display: "block",      // Centers the image horizontally
              marginLeft: "auto",
              marginRight: "auto",
              width: "8rem",
              height: "8rem",
              borderRadius: "50%",   // Creates a circular shape
              overflow: "hidden",    // Ensures content doesn't exceed the circle
              backgroundColor: "transparent",  // Ensures no background color
              boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)" // Optional shadow for aesthetics
            }}
            className="mb-3"
            alt="Company Logo"
          />
          <CardTitle tag="h4" className="mb-2">
            {company}
          </CardTitle>
          <CardSubtitle tag="h5" className="mb-2">
            {role}
          </CardSubtitle>
          <CardSubtitle>{date}</CardSubtitle>
          <CardText tag="div" className="description my-3 text-left">
            {desc}
            <ul>
              {descBullets
                ? descBullets.map(desc => {
                    return <li key={desc}>{desc}</li>;
                  })
                : null}
            </ul>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ExperienceCard;
