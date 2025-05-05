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
              I'm a <b className="purple">Senior Software Engineer</b> with a passion for building reliable,
              scalable, and performant full-stack applications.
              <br />
              <br />
              I'm fluent in modern programming languages like{" "}
              <i>
                <b className="purple">JavaScript, TypeScript, Go, C++, and Python</b>
              </i>, and I specialize in full-stack development using technologies like{" "}
              <b className="purple">React.js, Next.js, Node.js, Laravel, and MySQL</b>.
              <br />
              <br />
              I work extensively with{" "}
              <i>
                <b className="purple">GitHub, Git workflows, and open source collaboration</b>
              </i>. I’m experienced in setting up robust CI/CD pipelines using{" "}
              <b className="purple">GitHub Actions, GitLab CI, and CircleCI</b>.
              <br />
              <br />
              As a DevOps enthusiast, I build and deploy cloud-native applications using{" "}
              <b className="purple">Docker, Kubernetes, Vercel, and AWS</b>. I automate infrastructure with{" "}
              <b className="purple">Terraform</b> and monitor performance with tools like{" "}
              <b className="purple">Grafana and Datadog</b>.
              <br />
              <br />
              I’m also skilled in integrating third-party platforms like{" "}
              <b className="purple">HubSpot, Intercom, Stripe, and PayPal</b> to create seamless user experiences.
              <br />
              <br />
              Outside of work, I contribute to open source and enjoy solving complex architecture and deployment challenges.
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
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/devpro9219"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/yourhandle"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yourlinkedin/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/yourhandle"
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
