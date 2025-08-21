import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hisync from "../../Assets/Projects/hisync.png";
import sharpmower from "../../Assets/Projects/sharpmower.png";
import dealeraddendums from "../../Assets/Projects/dealeraddendums.png";
import cariclub from "../../Assets/Projects/cariclub.png";
import soft4school from "../../Assets/Projects/soft4school.png";
import instantinsites from "../../Assets/Projects/instantinsites.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cariclub}
              isBlog={false}
              title="CariClub"
              description="Our mission is to unlock the potential within each individual to become a driving force for good."
              ghLink=""
              demoLink="https://cariclub.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hisync}
              isBlog={false}
              title="Hisync (Sass)"
              description="Our platform automatically syncs key data from your Intercom account to HubSpot—covering tickets, contacts, and conversion metrics—so you can manage and analyze your customer interactions from a single source."
              ghLink=""
              demoLink="https://hisync.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sharpmower}
              isBlog={false}
              title="Sharpmower (Sass)"
              description="Sharpmower is a SaaS platform that manages multiple order truck statuses, handling the entire process from lead assignment to payment."
              ghLink=""
              demoLink="https://admin.servasw.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dealeraddendums}
              isBlog={false}
              title="DealerAddendums"
              description="DealerAddendums is a platform that streamlines the creation, management, and printing of vehicle sales documents. It helps dealers efficiently generate and handle sales-related paperwork, ensuring smooth transaction processes."
              ghLink=""
              demoLink="https://dealeraddendums.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soft4school}
              isBlog={false}
              title="SoftWare4School"
              description="Software4School is a platform that combines CRM (Customer Relationship Management) and HRM (Human Resource Management) functionalities tailored for managing students and educational processes. It's also a SaaS project, offering cloud-based solutions to streamline student management, communication, and administrative tasks."
              ghLink=""
              demoLink="https://software4school.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instantinsites}
              isBlog={false}
              title="Instantinsites"
              description="InstantInsites is a platform that performs web scraping from various websites. It helps users analyze and interpret website UI, UX, and product detail pages by extracting data, making it easier to understand layout structures and design elements."
              ghLink=""
              demoLink="https://instantinsites.com" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
