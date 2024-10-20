import React from "react";
import { coreSkills } from "../portfolio";
import { Container, Row } from "reactstrap";
import CoreSkillsCard from "../components/CoreSkillsCard";
import Fade from "react-reveal/Fade";

const CoreSkills = () => {
  return (
    coreSkills && (
      <Fade bottom duration={2000}>
        <section className="section section-lg">
          <Container>
            <div className="d-flex p-4">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="ni ni-settings-gear-65 text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-info">Core Skills</h4>
              </div>
            </div>
            <Row className="row-grid align-items-center">
              {coreSkills.map((data, i) => {
                return <CoreSkillsCard key={i} {...data} />;
              })}
            </Row>
          </Container>
        </section>
      </Fade>
    )
  );
};

export default CoreSkills;
