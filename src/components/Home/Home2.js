import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <p>I'm a developer and enthusiast of independent projects with a strong focus on web development, specifically backend using <b className="purple">Node.js</b>, <b className="purple">Express</b>, and integrating with databases like <b className="purple">MongoDB</b>. I also have experience in Robotic Process Automation (RPA) and its integration in Data Science projects.</p>

              <p>In the backend, I primarily utilize Node.js, but I also have proficiency in <b className="purple">Python</b> with <b className="purple">Flask</b>. I possess knowledge in creating servers, managing routes, implementing user authentication, and integrating with databases. My expertise lies in Node.js, Express, and related libraries, enabling me to develop highly efficient web applications. I am proficient in working with both relational databases such as <b className="purple">MySQL</b> and <b className="purple">PostgreSQL</b>, as well as non-relational databases like MongoDB. MongoDB, in particular, allows me to store data in a flexible and scalable document format.</p>

              <p>Moreover, I have skills in performing CRUD and ETL operations using Python, <b className="puple">SQL</b>, and specialized libraries like <b className="purple">Selenium, pandas, and numpy</b>. For frontend development, I employ <b className="purple">HTML, CSS, and JavaScript</b> to craft responsive interfaces. I am experienced in creating visually appealing and responsive interfaces using frameworks such as <b className="purple">React and Bootstrap</b>.</p>

              <p>When it comes to version control, I rely on <b className="purple">Git and GitHub</b> to share my projects and portfolios.</p>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/devlooppear"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/devlooppear"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/iago-silva-42130b209/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/devlooppear"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
