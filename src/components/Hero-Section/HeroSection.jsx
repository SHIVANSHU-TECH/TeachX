import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.avif";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
              Unlock your potential and <br /> expand your knowledge <br /> with our platform
               
              </h2>
              <p className="mb-5">
              Our educational website is a student-friendly platform . that offers high-quality courses, personalized learning  experiences,  and a supportive community. 
                Our unique  approach  prioritizes student success.
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Email address" />
              <button className="btn">join our community</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
