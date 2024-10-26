import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ExperienceType } from "../types/sections";

const ExperienceCard = ({ companyLogo, company, role, date, desc, descBullets }: ExperienceType) => {
  return (
    <Col lg="6">
      <Card style={{ flex: 1 }} className="shadow-lg--hover my-4 shadow border-0 text-center rounded h-100">
        <CardBody className="">
          <div
            style={{
              width: "8rem",
              height: "8rem",
              borderRadius: "50%",  // Creates the circular frame
              overflow: "hidden",   // Ensures content stays within the circle
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",  // Optional: Background color to enhance visibility
              boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",  // Aesthetic shadow
            }}
          >
            <img
              src={companyLogo}
              alt="Company Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",  // Ensures the image scales without cropping
                backgroundColor: "transparent",  // Keeps the transparency intact
              }}
              className="mb-3"
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
        </CardBody>
      </Card>
    </Col>
  );
};

export default ExperienceCard;
