import React from "react";
import { software } from "../portfolio";
import { Container, Row } from "reactstrap";
import SoftwareCard from "../components/SoftwareCard";
import Fade from "react-reveal/Fade";

const Software = () => {
  return (
    software && (
      <Fade bottom duration={2000}>
        <section className="section section-lg">
          <Container>
            <div className="d-flex p-4">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="ni ni-settings text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-info">Simulation Software</h4>
              </div>
            </div>
            <Row className="row-grid align-items-center">
              {software.map((data, i) => {
                return <SoftwareCard key={i} {...data} />;
              })}
            </Row>
          </Container>
        </section>
      </Fade>
    )
  );
};

export default Software;
