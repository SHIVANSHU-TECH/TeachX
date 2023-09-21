import React from "react";
import { Container, Row, Col } from "reactstrap";
import Physics from "../../assests/images/physics.avif";
import Chemistry from "../../assests/images/chemistry.jpg";
import maths from "../../assests/images/maths.avif";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Physics-Energy is liberated matter, matter is energy waiting to happen",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: Physics,
  },

  {
    id: "02",
    title: "Chemistry-can be a good and bad thing",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: Chemistry,
  },

  {
    id: "03",
    title: "Maths-Pure mathematics is, in its way, the poetry of logical ideas.",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: maths,
  },
];

const Courses = () => {
  return (
    <section className="courses">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center" id="box">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                {/* <p>
                here we offer a wide range of popular courses in the fields of 
                Physics, Chemistry, and Mathematics (PCM). Our courses are 
                designed to provide learners with a comprehensive understanding
                of these subjects, and to help them develop the skills they need
                to succeed in their academic and professional pursuits.
                </p> */}
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
