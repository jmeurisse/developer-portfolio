import React, { useEffect, useState } from "react";
import { coreSkills } from "../portfolio";
import { Container, Row } from "reactstrap";
import CoreSkillsCard from "../components/CoreSkillsCard";
import Fade from "react-reveal/Fade";

const CoreSkills = () => {
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
    coreSkills && (
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

          {/* Row for 2-column layout */}
          <Row className="row-grid align-items-center">
            {coreSkills.map((data, i) => (
              <CoreSkillsCard key={i} {...data} />
            ))}
          </Row>

          {/* Add space after the cards */}
          <div 
            style={{ 
              marginTop: "5rem",  // Adjust this value to control spacing
              height: "1px", // Keeps it subtle, purely for spacing purposes
              backgroundColor: "transparent" // Invisible element to just push content
            }} 
          />
        
        </Container>

        {/* Separator SVG */}
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

export default CoreSkills;
