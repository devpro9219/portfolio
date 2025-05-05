import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Software Engineer",
          "Full Stack Engineer",
          "Tech Lead",
          "MERN, MEVN, and LAMP Stack Expert",
          "API Integration Specialist",
          "DevOps and Cloud Architect",
          "Open Source Contributor",
          "Agile and Scrum Enthusiast",
          "Software Architecture Expert",
          "Technology Mentor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
