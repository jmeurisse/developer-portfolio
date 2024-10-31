import React, { useEffect, useState } from "react";
import EducationCard from "../components/EducationCard";
import { educationInfo } from "../portfolio";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";

const Education = () => {
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
    educationInfo && (
      <section className="section section-lg">
        <Container>
          <div className="d-flex px-3">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-books text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Education</h4>
            </div>
          </div>
          <Row className="row-grid align-items-center">
            {educationInfo.map(info => {
              return (
                <Col className="order-lg-1" lg="6" key={info.schoolName}>
                  <EducationCard {...info} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    )
  );

  return isMobile ? content : <Fade bottom duration={1000}>{content}</Fade>;
};

export default Education;
