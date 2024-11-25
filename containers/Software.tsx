import React, { useEffect, useState } from "react";
import { software } from "../portfolio";
import { Container, Row } from "reactstrap";
import SoftwareCard from "../components/SoftwareCard";
import Fade from "react-reveal/Fade";

const Software = () => {
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
    software && (
      <section className="section section-lg">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-settings text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Simulation Platforms</h4>
            </div>
          </div>
          <Row className="row-grid align-items-center">
            {software.map((data, i) => {
              return <SoftwareCard key={i} {...data} />;
            })}
          </Row>
        </Container>
      </section>
    )
  );

  return isMobile ? content : <Fade bottom duration={1000}>{content}</Fade>;
};

export default Software;
