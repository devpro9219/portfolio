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
              Results-driven <b className="purple">Senior Software Engineer</b> with 8 years of professional experience
              in designing, developing, and deploying <b className="purple">scalable web applications</b> and
              <b className="purple"> microservices</b>.
              <br />
              <br />
              Proven expertise in{" "}
              <b className="purple">Golang</b>, <b className="purple">Rust</b>, <b className="purple">React.js</b>,{" "}
              <b className="purple">PostgreSQL</b>, and modern cloud-native technologies including{" "}
              <b className="purple">Docker</b>, <b className="purple">Kubernetes</b>, and{" "}
              <b className="purple">Google Cloud Platform (GCP)</b>.
              <br />
              <br />
              Skilled in leading cross-functional teams, mentoring junior engineers, and collaborating across
              agile product environments to deliver <b className="purple">business-critical solutions</b>.
              <br />
              <br />
              Strong foundation in <b className="purple">software architecture</b>,{" "}
              <b className="purple">CI/CD pipelines</b>, <b className="purple">observability</b>, and full{" "}
              <b className="purple">SDLC ownership</b>.
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
                  href="https://github.com/bijannavar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/yourhandle"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bijan-navar-82043337b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/yourhandle"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
