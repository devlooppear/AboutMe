import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import DashImg from "../../Assets/Projects/dashClient.png";
import financepro from "../../Assets/Projects/financepro.png";
import introreact from "../../Assets/Projects/imgIntroReact.png";
import codeImg from "../../Assets/Projects/CodeImg1.1.jpg";
import blognode from "../../Assets/Projects/blognode.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Main <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={introreact}
              isBlog={false}
              title="IntroReact"
              description="The provided code represents a project that serves as an introduction to React, showcasing various components and concepts. It covers the fundamentals of React, including importing components, passing props, handling events, using conditional rendering, and working with forms and others things that you can do"
              ghLink="https://github.com/devlooppear/IntroducaoReact.git"
              demoLink="https://wonderful-heliotrope-6f9ec7.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blognode}
              isBlog={false}
              title="BlogNodeJS"
              description="This is a blog application built using Node.js and Express.js. It allows users to view blog posts, browse categories, and manage blog content through an administration panel."
              ghLink="https://github.com/devlooppear/BlogNodeJS.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={financepro}
              isBlog={false}
              title="FinancePro"
              description="FinancePro is a React application for financial management of projects. It provides a responsive design and a dynamic framework, and simulates an API through a JSON file."
              ghLink="https://github.com/devlooppear/FinancePro.git"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeImg}
              isBlog={false}
              title="PostgresFrameWork"
              description="This is a code that automates and facilitates operations within one or more databases using the PostgreSQL Database Management System, such as creating tables, inserting, updating, and deleting data in a more practical way."
              ghLink="https://github.com/devlooppear/PostgresFrameWork.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeImg}
              isBlog={false}
              title="MySQLFrameWork"
              description="This is a code that uses MySQL with Python using the mysql-connector-python package. The goal is to automate and facilitate operations within one or more databases using the MySQL Database Management System, such as creating tables, inserting, updating, and deleting data in a more practical way, for example, inserting multiple variables in a more convenient manner."
              ghLink="https://github.com/devlooppear/MySQLFrameWork.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DashImg}
              isBlog={false}
              title="DashClient"
              description="This is a dashboard developed in React for monitoring client information, with authentication control and integration with an API. The project uses Vite as a bundler and Bootstrap for form styling."
              ghLink="https://github.com/devlooppear/DashClient.git"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
