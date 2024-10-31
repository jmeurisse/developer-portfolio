import React, { useEffect, useState } from "react";
import { projects } from "../portfolio";
import { Container, Row } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import Fade from "react-reveal/Fade";

const Projects = () => {
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
    projects && (
      <section className="section section-lg">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-laptop text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Technical Projects</h4>
            </div>
          </div>
          <Row className="row-grid align-items-center">
            {projects.map((data, i) => {
              return <ProjectsCard key={i} {...data} />;
            })}
          </Row>
        </Container>
      </section>
    )
  );
  
  return isMobile ? content : <Fade bottom duration={1000}>{content}</Fade>;
};

export default Projects;
