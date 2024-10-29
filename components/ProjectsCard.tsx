import React from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ProjectType } from "../types/sections";

const ProjectsCard = ({ name, desc, github, link, videoSrc, gifSrc, imageSrc }: ProjectType) => {
  return (
    <Col lg="6">
      <Card className="shadow-lg--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              {videoSrc ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  width="100%"
                  style={{ borderRadius: "10px", marginBottom: "15px", outline: "none" }}
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : gifSrc ? (
                <img
                  src={gifSrc}
                  alt="Project GIF"
                  style={{ width: "100%", borderRadius: "10px", marginBottom: "15px" }}
                />
              ) : imageSrc ? (
                <img
                  src={imageSrc}
                  alt="Project"
                  style={{ 
                    width: "100%", 
                    height: "50px",  // Set a fixed height or adjust as needed
                    objectFit: "cover",  // Ensures the image maintains aspect ratio and fills the area
                    borderRadius: "10px", 
                    marginBottom: "15px" 
                  }}
                />
              ) : null}
              <h3 className="text-center">{name}</h3>
              <p className="description mt-3">{desc}</p>
              <div className="d-flex justify-content-center mt-3">
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
                    aria-label="Paper Link"
                  >
                    <span className="btn-inner--icon">
                      <i className="ni ni-collection mr-2" />
                    </span>
                    <span className="nav-link-inner--text ml-1">View Research</span>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectsCard;
