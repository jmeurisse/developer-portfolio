import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ExperienceType } from "../types/sections";

const ExperienceCard = ({ companyLogo, company, role, date, desc, descBullets }: ExperienceType) => {
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
            {desc}
            <ul>
              {descBullets
                ? descBullets.map(desc => {
                    return <li key={desc}>{desc}</li>;
                  })
                : null}
            </ul>
          </CardText>
          <div style="width: 100%; background-color: #e0e0e0; border-radius: 5px; overflow: hidden; height: 20px;">
            <div style="width: 80%; background-color: #4CAF50; float: left; height: 100%; text-align: center; color: white;">
              80% Technical
            </div>
            <div style="width: 20%; background-color: #2196F3; float: left; height: 100%; text-align: center; color: white;">
              20% Management
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ExperienceCard;
