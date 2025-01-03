import React, { useState, useEffect } from "react";
import { greetings } from "../portfolio";
import { Button, Container, Row, Col } from "reactstrap";
import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check the current screen size
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize(); // Initial check on component mount

    // Update screen size on resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Conditional styles based on screen size
  const scrollIndicatorStyle = isMobile
    ? { paddingTop: "5rem", marginBottom: "-5rem" } // No extra padding or margin on mobile
    : { paddingTop: "12rem", marginBottom: "-12rem" }; // Extra spacing on desktop


  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <div className="shape shape-style-1 bg-gradient-info">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="6">
                  <h1 className="display-3 text-white">{greetings.title + " "}</h1>
                  <p className="lead text-white">{greetings.description}</p>
                  <SocialLinks />
                  {greetings.resumeLink && (
                    <div className="btn-wrapper my-4">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        href={greetings.resumeLink}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-file" />
                        </span>
                        <span className="btn-inner--text">See My Resume</span>
                      </Button>
                    </div>
                  )}
                </Col>
                <Col lg="6">
                  <GreetingLottie animationPath="/lottie/skills/space_suit_mac.json" />
                </Col>
              </Row>
            </div>
          </Container>

          {/* Scroll Indicator */}
          <div className="scroll-indicator text-center" style={scrollIndicatorStyle}>
            <p className="text-white mb-0">Scroll down</p>
            <i className="fa fa-arrow-down text-white" style={{ fontSize: "1.5rem", animation: "bounce 1s infinite" }}></i>
          </div>

          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew" style={{ marginBottom: "-3px" }}>
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
        {/* 1st Hero Variation */}
      </div>
    </main>
  );
};

export default Greetings;
