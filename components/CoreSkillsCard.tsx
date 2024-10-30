import React from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import { CoreSkillsType } from "../types/sections";
import GreetingLottie from "../components/DisplayLottie";

const CoreSkillsCard = ({ img, name, desc, github, link }: CoreSkillsType) => {
  return (
    <Col lg="6">
      <Card className="shadow-lg--hover shadow mt-4 h-100">
        <CardBody className="d-flex flex-column justify-content-between">
          <div className="d-flex px-3">
            <div className="pl-4">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "20vh", // Adjust the height as needed
                  paddingBottom: "1rem", // Add space below the image to avoid overlap
                }}
              >
                <img
                  src={img}
                  alt="Icon"
                  style={{
                    maxWidth: "100%", // Ensures the image scales responsively
                    maxHeight: "100%", // Prevents overflow from the container
                    width: "150px", // Adjust size as needed
                    height: "150px", // Adjust size as needed
                    objectFit: "contain", // Keeps the aspect ratio of the image
                  }}
                />
              </div>
              <h3>{name}</h3>
              <p className="description mt-3">{desc}</p>
              {github ? (
                <Button
                  className="btn-icon"
                  color="github"
                  href={github}
                  target="_blank"
                  rel="noopener"
                  aria-label="Github"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                </Button>
              ) : null}
              {link ? (
                <Button
                  className="btn-icon"
                  color="success"
                  href={link}
                  target="_blank"
                  rel="noopener"
                  aria-label="Twitter"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-arrow-right mr-2" />
                  </span>
                  <span className="nav-link-inner--text ml-1">Demo</span>
                </Button>
              ) : null}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CoreSkillsCard;
