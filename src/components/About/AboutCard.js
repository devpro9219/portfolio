import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bijan Navarifar &nbsp;</span>
            from <span className="purple"> California, U.S.</span>
            <br />
            I am currently working as a <span className="purple">Project Manager</span> on several projects such as <span className="purple">Cariclub</span>, <span className="purple">Dealeraddendums</span>, <span className="purple">Hisync</span>, and more.
            <br />
            With <span className="purple">9+ years of software development experience</span>, I also have expertise in <span className="purple">project management</span>, <span className="purple">software architecture</span>, <span className="purple">DevOps</span>, and <span className="purple">API integrations</span>.
            <br />
            <br />
            Apart from my work, here are some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">devpro9219</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
