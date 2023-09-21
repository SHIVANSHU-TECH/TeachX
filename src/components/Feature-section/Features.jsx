import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    // desc: "Our platform is designed to provide learners with flexible and convenient access to educational resources, allowing them to learn at their own pace and on their own schedule. Our courses are structured to provide concise and focused content, enabling learners to quickly acquire the information and skills they need to achieve their goals.We understand that time is a precious commodity, and that's why we prioritize efficiency and effectiveness in our educational offerings",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    // desc: " here we are committed to providing learners with the support they need to achieve their learning goals at any time.Our experienced support team is available around the clock to answer any questions, address any concerns, and provide guidance to learners. Whether you need help navigating our platform, accessing course materials, or understanding course content our support team is here to assist you every step of the way.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    // desc: "here we offer high-quality courses and programs that provide learners with the knowledge and skills they need to succeed in their chosen field.Our certificates are designed to acknowledge and celebrate learners' accomplishments, demonstrating their commitment to learning and their mastery of course content. To earn a certificate of completion, learners must successfully complete all course requirements and assessments.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
