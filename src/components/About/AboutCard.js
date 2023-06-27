import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Iago Silva</span> from{" "}
            <span className="purple">Brazil</span>.
            <br />
            <br />
            I am a programmer who enjoys creating web applications and automations to make things easier in my daily life. I hope you like my work here. You can find me on my social networks.
          </p>
          <br />
          <p>Apart from coding, here are some other activities that I love to do:</p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155, 126, 172)" }}>
            "There is no long way when you find what you wish."
          </p>
          <footer className="blockquote-footer">Nelson Mandela</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
