import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import {Link } from "react-router-dom";
const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "About",
    url: "/About",
  },

  {
    display: "Courses",
    url: "#",
  },
  {
    display: "Dashboard",
    url: "/ad",
  },
  {
    display: "Blog",
    url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              {/* <i class="ri-pantone-line"></i> TEACHX */}
              <i class="ri-stack-line"></i>TEACHX
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
             
        

                  <div className="nav__right">
                     <p className="mb-0 d-flex align-items-center gap-2">
                       <Link to ="/Login" className="btnn">login
                        </Link>
                       
                        <Link to="/Signup" className="btna">signup</Link>
                     </p>
                  </div>
                 </ul> 
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
