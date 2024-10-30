import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { CoreSkillsType } from "../types/sections";

const CoreSkillsCard = ({ img, name, desc }: CoreSkillsType) => {
  return (
    <Col lg="6">
      <Card className="shadow-lg--hover shadow mt-4 h-100">
        <CardBody 
          className="d-flex flex-column justify-content-between"
          style={{ padding: "1rem" }} // Add padding to the CardBody to prevent content cutoff
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "20vh", 
              padding: "0rem", // Ensure spacing within the container
              overflow: "hidden", // Prevent image overflow
            }}
          >
            <img
              src={img}
              alt="Icon"
              style={{
                maxWidth: "100%", 
                maxHeight: "100%", 
                width: "100px", 
                height: "100px", 
                objectFit: "contain", 
                borderRadius: "10px", 
                marginBottom: "15px" 
              }}
            />
          </div>
          <h3 className="text-center mt-3">{name}</h3>
          <p 
            className="description mt-2 text-center"
            style={{ wordBreak: "break-word", padding: "0 0.5rem" }} // Prevent text overflow and add padding
          >
            {desc}
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CoreSkillsCard;
