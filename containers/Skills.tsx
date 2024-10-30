import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";

const Skills = () => {
  return (
    skillsSection && (
      <Fade bottom duration={2000}>
        <Container className="text-center my-5 section section-lg">
          <h1 className="h1">{skillsSection.title}</h1>
          <p className="lead">{skillsSection.subTitle}</p>
          {skillsSection.data.map((section, index) => {
            return (
              <Row className="my-5" key={index}>
                <Col lg="6" className="order-2 order-lg-1">
                  <img
                    src={section.imagePath}
                    alt="Project Preview"
                    style={{ width: "100%", borderRadius: "10px", objectFit: "cover" }}
                  />
                </Col>
                <Col lg="6" className="order-1 order-lg-2">
                  <h3 className="h3 mb-2">{section.title}</h3>
                  <div className="d-flex justify-content-center flex-wrap mb-2">
                    {section.softwareSkills.map((skill, i) => {
                      return (
                        <Fragment key={i}>
                          <div
                            className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                            id={`${skill.skillName.replace(/\s/g, "").replace(/\+/g, "Plus").replace(/\//g, "Slash")}-${i}`}
                          >
                            <Icon icon={skill.iconifyTag} width="40" height="40"></Icon>
                          </div>
                          <UncontrolledTooltip delay={0} placement="bottom" target={`${skill.skillName.replace(/\s/g, "").replace(/\+/g, "Plus").replace(/\//g, "Slash")}-${i}`}>
                            {skill.skillName}
                          </UncontrolledTooltip>
                        </Fragment>
                      );
                    })}
                  </div>
                  <div 
                    style={{ marginTop: "32px", marginLeft: "48px" }}
                  >
                    {section.skills.map((skill, i) => (
                      <p key={i} style={{ textAlign: 'left', paddingLeft: '20px' }}>{skill}</p>
                    ))}
                  </div>
                </Col>
              </Row>
            );
          })}
        </Container>
      </Fade>
    )
  );
};

export default Skills;
