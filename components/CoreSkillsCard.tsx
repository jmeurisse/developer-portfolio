import React from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import { CoreSkillsType } from "../types/sections";

const CoreSkillsCard = ({ img, name, desc }: CoreSkillsType) => {
  return (
    <Col lg="6">
      <Card className="shadow-lg--hover shadow mt-4 h-100">
        <CardBody className="d-flex flex-column justify-content-between">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "20vh", // Adjust height for the image container
              paddingBottom: "1rem", // Add space below the image to avoid overlap
            }}
          >
            <img
              src={img}
              alt="Icon"
              style={{
                maxWidth: "100%", 
                maxHeight: "100%", 
                width: "150px", 
                height: "150px", 
                objectFit: "contain", 
              }}
            />
          </div>
          <h3 className="text-center">{name}</h3>
          <p className="description mt-3">{desc}</p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CoreSkillsCard;
