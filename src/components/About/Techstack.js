// src/components/About/Techstack.js

import React from "react";
import { Col, Row } from "react-bootstrap";

// Languages
import { TbBrandGolang } from "react-icons/tb";
import { SiRust } from "react-icons/si";
import { DiJavascript1, DiPython, DiJava, DiReact, DiNodejs, DiGit, DiMongodb } from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";

// Frameworks & Libraries
import { SiNextdotjs } from "react-icons/si";

// Databases
import { SiPostgresql, SiRedis } from "react-icons/si";

// DevOps & Cloud
import { SiDocker, SiKubernetes, SiAmazonaws, SiGooglecloud, SiGrafana, SiPrometheus } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang title="Go" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRust title="Rust" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava title="Java" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus title="C++" />
      </Col>

      {/* Front-End */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs title="Next.js" />
      </Col>

      {/* Back-End & DevOps */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker title="Docker" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes title="Kubernetes" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git / CI/CD" />
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql title="PostgreSQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb title="MongoDB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis title="Redis" />
      </Col>

      {/* Cloud & Observability */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws title="AWS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud title="GCP" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana title="Grafana" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrometheus title="Prometheus" />
      </Col>
    </Row>
  );
}

export default Techstack;
