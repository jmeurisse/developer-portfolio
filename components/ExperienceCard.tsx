import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ExperienceType } from "../types/sections";

const ExperienceCard = ({ companyLogo, company, role, date, titles, desc }: ExperienceType) => {
  return (
    <Col lg="6">
      <Card 
        style={{ 
          flex: 1, 
          backgroundColor: "#fff",  // Keep card background white if needed
          border: "none", 
        }} 
        className="shadow-lg--hover my-4 shadow border-0 text-center rounded h-100"
      >
        <CardBody className="">
          <div 
            style={{
              width: "8rem",
              height: "8rem",
              margin: "0 auto", 
              position: "relative", // Allows layering with transparency
            }}
          >
            <img
              src={companyLogo}
              style={{
                objectFit: "contain",   // Scales the image within its bounds
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",  // Transparent background just for logo
                borderRadius: "0",  // Ensures the image keeps its original shape
                border: "none",
                boxShadow: "none", 
              }}
              alt="Company Logo"
            />
          </div>
          <CardTitle tag="h4" className="mb-2">
            {company}
          </CardTitle>
          <CardSubtitle tag="h5" className="mb-2">
            {role}
          </CardSubtitle>
          <CardSubtitle>{date}</CardSubtitle>
          <CardText tag="div" className="description my-3 text-left">
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
              {titles.map((title, index) => (
                <div key={index} style={{ width: "48%" }}>
                  <h6>{title}</h6>
                  <ul style={{ paddingLeft: "1.2rem" }}>
                    {desc[index]?.map((task, taskIndex) => (
                      <li key={taskIndex}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ExperienceCard;
