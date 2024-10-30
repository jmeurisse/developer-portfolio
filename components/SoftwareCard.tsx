import React from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import { SoftwareType } from "../types/sections";

const SoftwareCard = ({ name, desc, github, link, videoSrc, gifSrc, imageSrc, demo }: SoftwareType) => {
  return (
    <Col lg="6">
      <Card className="shadow-lg--hover shadow mt-4 h-100">
        <CardBody className="d-flex flex-column justify-content-between">
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
                  style={{ 
                    width: "100%", 
                    maxHeight: "150px", 
                    objectFit: "contain", 
                    borderRadius: "10px", 
                    marginBottom: "15px" 
                  }}
                />
              ) : imageSrc ? (
                <img
                  src={imageSrc}
                  alt="Project"
                  style={{ 
                    width: "100%", 
                    borderRadius: "10px", 
                    marginBottom: "15px" 
                  }}
                />
              ) : null}
              <h3 className="text-center mt-3">{name}</h3>
              <ul 
                className="description-list mt-3" 
                style={{ paddingLeft: '20px', listStyleType: 'disc', margin: 0 }}
              >
                {desc.map((item, index) => (
                  <li 
                    key={index} 
                    style={{ 
                      marginBottom: '8px', 
                      fontSize: '16px', 
                      lineHeight: '1.5', 
                      color: '#333' 
                    }}
                  >
                    <strong>{item[0]}</strong>: {item[1]}
                  </li>
                ))}
              </ul>
              <div className="d-flex justify-content-center mt-3">
                {github && (
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
                )}
                {link && (
                  <Button
                    className="btn-icon"
                    color="success"
                    href={link}
                    target="_blank"
                    rel="noopener"
                    aria-label="Paper Link"
                  >
                    <span className="nav-link-inner--text ml-1">View Research</span>
                  </Button>
                )}
                {demo && (
                  <Button
                    className="btn-icon"
                    color="success"
                    href={demo}
                    target="_blank"
                    rel="noopener"
                    aria-label="Demo"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-arrow-right mr-2" />
                    </span>
                    <span className="nav-link-inner--text ml-1">Demo</span>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SoftwareCard;
