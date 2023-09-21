import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/first.jpg";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        student friendly platform
                      </h6>
                      <p>
                      Courses are well-designed and instructors are knowledgeable and
                       engaging. The personalized approach to learning is excellent
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">shyam raj</h6>
                        <p>New Delhi, india</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        suitable courses and resources for students
                      </h6>
                      <p>
                      "This educational website is the best I've used. Courses are challenging and rewarding,
                       and instructors provide personalized support. Highly recommended.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">jezz white</h6>
                        <p>new york, United State</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        student supportive
                      </h6>
                      <p>
                      I was hesitant to try online learning, but this platform exceeded my expectations. Courses were
                       informative and well-organized, and the community was supportive.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
