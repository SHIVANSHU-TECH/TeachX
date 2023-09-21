import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/third.avif";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section id="abt">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
              Our mission is to empower individuals to achieve their
              personal and professional goals through innovative and
              engaging learning experiences. We believe that everyone
              should have the opportunity to learn and grow, regardless 
              of their background or circumstances.

             We are dedicated to creating a supportive and inclusive learning
             community that fosters collaboration, creativity, and critical 
             thinking. Our team of experienced educators and professionals are 
             committed to delivering content that is both informative and enjoyable,
            helping learners to develop the knowledge and skills
              </p>

             
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
