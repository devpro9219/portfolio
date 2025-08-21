import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Results-driven <b className="purple">Senior Software Engineer</b> with 8 years of professional
            experience in designing, developing, and deploying <b className="purple">scalable web applications</b> and <b className="purple">microservices</b>.
            Proven expertise in <b className="purple">Golang, Rust, React.js, PostgreSQL</b>, and modern cloud-native technologies including <b className="purple">Docker, Kubernetes, and Google Cloud Platform</b>.
            Skilled in leading cross-functional teams, mentoring junior engineers, and collaborating across agile product environments to deliver <b className="purple">business-critical solutions</b>.
            Strong foundation in <b className="purple">software architecture, CI/CD pipelines, observability</b>, and full <b className="purple">SDLC ownership</b>.
            <br />
            <br />
            <b className="purple">Experience:</b>
            <br />
            <b>Inclined Technologies, Remote - Senior Software Engineer (Feb 2022 – Present)</b>
            <ul>
              <li>Led the development of scalable Go-based microservices, supporting over 1M+ monthly API requests.</li>
              <li>Designed and implemented full-stack features using Go, PostgreSQL, and React.js.</li>
              <li>Refactored legacy Go codebase, increasing test coverage to 95%.</li>
              <li>Optimized database queries and complex CTEs to support DRY code.</li>
              <li>Built WebAssembly (WASM) modules in Rust to handle intensive client-side logic.</li>
              <li>Implemented CI/CD pipelines using Docker, Kubernetes, and GitHub Actions.</li>
              <li>Mentored junior developers, improving team velocity.</li>
            </ul>
            <b>Sourcegraph, Remote - Senior Software Engineer (Sep 2020 – Jan 2022)</b>
            <ul>
              <li>Designed and deployed performant Go microservices for high-scale code indexing, processing over 100M+ code files.</li>
              <li>Enhanced front-end interfaces with React.js and TypeScript, improving UX.</li>
              <li>Integrated distributed tracing and observability tools (OpenTelemetry, Prometheus).</li>
              <li>Implemented WASM modules for ultra-fast syntax parsing on browser extensions.</li>
              <li>Maintained robust unit and integration tests with 98% coverage.</li>
            </ul>
            <b>Timber.io, Remote - Software Engineer (May 2017 – Aug 2020)</b>
            <ul>
              <li>Engineered scalable real-time log management tools using Go and Kafka.</li>
              <li>Reduced ingestion latency by 45% and improved system reliability.</li>
              <li>Integrated with AWS and GCP for seamless log shipping and analysis.</li>
              <li>Refactored monolithic codebase into modular microservices.</li>
              <li>Developed WASM components to run analytics client-side, reducing server load.</li>
            </ul>
            <br />
            <b className="purple">Technical Skills:</b>
            <ul>
              <li>Languages: Go, Rust, TypeScript, JavaScript (ES6+), Python, SQL, Bash</li>
              <li>Back-End: RESTful APIs, GraphQL, Microservices, gRPC, Event-Driven Systems, JWT, OAuth 2.0</li>
              <li>Front-End: SPA, Responsive Design, React.js, State Management, UI/UX Optimization</li>
              <li>Databases: PostgreSQL, MongoDB, Redis, ElasticSearch, SQL Optimization</li>
              <li>Cloud & DevOps: AWS, GCP, Docker, Kubernetes, CI/CD, Terraform, Observability (Prometheus/Grafana)</li>
              <li>Soft Skills: Analytical Thinking, Mentorship, Collaboration, Ownership, Problem Solving, Adaptability</li>
            </ul>
            <br />
            <b className="purple">Soft Skills:</b>
            <ul>
              <li>Analytical Thinking</li>
              <li>Effective Communication</li>
              <li>Team Collaboration</li>
              <li>Attention to Detail</li>
              <li>Mentorship & Coaching</li>
              <li>Problem Solving</li>
              <li>Time Management</li>
              <li>Adaptability in Fast-Paced Environments</li>
              <li>Client-Facing Professionalism</li>
            </ul>
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">bijannavar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}


export default AboutCard;
