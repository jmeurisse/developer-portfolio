import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ExperienceType } from "../types/sections";

const ExperienceCard = ({ companyLogo, company, role, date, desc, descBullets }: ExperienceType) => {
  return (
    <Col lg="6">
      <Card style={{ flex: 1 }} className="shadow-lg--hover my-4 shadow border-0 text-center rounded h-100">
        <CardBody className="">
          <img
            src={companyLogo}
            style={{
              objectFit: "contain",   // Ensures the image scales without distortion
              display: "block",        // Centers the image horizontally
              marginLeft: "auto",
              marginRight: "auto",
              width: "8rem",
              height: "8rem",
              overflow: "hidden",      // Prevents content overflow
              backgroundColor: "transparent",  // Ensures no background color
              boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)"  // Optional shadow for aesthetics
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
