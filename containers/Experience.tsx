import React, { useEffect, useState } from "react";
import { experience } from "../portfolio";
import { Container, Row } from "reactstrap";
import ExperienceCard from "../components/ExperienceCard";
import Fade from "react-reveal/Fade";

const Experience = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size on component mount
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();

    // Add event listener to track screen resizing
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const content = (
    experience && (
      <section className="section pb-0 bg-gradient-info my-5">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-briefcase-24 text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-white">Experience</h4>
            </div>
          </div>
          <Row className="row-grid align-items-start">
            {experience.map((data, i) => {
              return <ExperienceCard key={i} {...data} />;
            })}
          </Row>
          <div style={{ height: "4rem" }} />
        </Container>
        <div className="separator separator-bottom separator-skew zindex-100" style={{ marginBottom: "-3px" }}>
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
    )
  );

  return isMobile ? content : <Fade bottom duration={1000}>{content}</Fade>;
};

export default Experience;
