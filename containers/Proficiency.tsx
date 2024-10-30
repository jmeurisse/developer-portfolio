import React from "react";
import { coreSkills } from "../portfolio";
import { Container, Row } from "reactstrap";
import CoreSkillsCard from "../components/CoreSkillsCard";
import Fade from "react-reveal/Fade";

const CoreSkills = () => {
  return (
    coreSkills && (
      <Fade bottom duration={2000}>
        <section className="section pb-0 bg-gradient-info my-5">
          <Container>
            <div className="d-flex p-4">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="ni ni-ui-04 text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-white">Key Competencies</h4>
              </div>
            </div>
            <Row className="row-grid align-items-center">
              {coreSkills.map((data, i) => {
                return <CoreSkillsCard key={i} {...data} />;
              })}
            </Row>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </Fade>
    )
  );
};

export default CoreSkills;
