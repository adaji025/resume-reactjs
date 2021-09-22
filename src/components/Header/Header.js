import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import {
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  Twitter,
  Facebook,
  LinkedIn,
  GitHub,
  Telegram,
} from "@material-ui/icons";

import "bootstrap/dist/css/bootstrap.min.css";
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";

import './Header.css'

const Header = (props) => {
  const pathName = props?.location?.pathname;
  return (
    <Navbar expand="lg" sticky="top" className="header">
      {/* Home Link */}
      <Nav.Link as={NavLink} to="/" className='header_navLink'>
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      {/* Navbar Hamburger Button */}
      <Navbar.Toggle />

      {/* Buttons */}
      <Navbar.Collapse>
        <Nav className='header_left'>
        {/* Resume Link */}
       
          {/* Resume Link */}
          <Nav.Link
            as={NavLink}
            to="/resume"
            className={pathName === "/resume" ? "header_active_link" : "header_link"}
          >
            Resume
          </Nav.Link>
          {/* Portfolio Link */}
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={pathName === "/portfolio" ? "header_active_link" : "header_link"}
          >
            Portfolio
          </Nav.Link>
          {/* Contact Link */}
          <Nav.Link
            as={NavLink}
            to="/contact"
            className={pathName === "/contact" ? "header_active_link" : "header_link"}
          >
            Contact
          </Nav.Link>
        </Nav>

        <div className='header_right'>
          {Object.keys(resumeData.socials).map(key => (
            <a href={resumeData.socials[key].link} target='_blank'>
              {resumeData.socials[key].icon}
            </a>
          ))}
          <CustomButton text={'Hire Me'} icon={<Telegram/>} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
