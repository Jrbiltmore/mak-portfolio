import React from "react";

import "./resume.css";

const Resume = () => {
  return (
    <section id="resume" class="resume">
      <h5>What I Have Done</h5>
      <h2>My Resume</h2>

      <div className="container resume__container">
        <div class="resume__education">
          <h3 class="resume-title">Education</h3>

          <div class="resume-item">
            <h4>Bahria University Islamabad, Pakistan</h4>
            <h5>2016-2020</h5>
            <h4>CGPA: 2.88/4.0 (70%)</h4>
            <p>
              <em>Bachelor of Science in Information Technology</em>
            </p>
            <p>
              Undergraduate Coursework: Algorithms/Data Structures; Databases;
              Programming Languages; Software Architecture; Entrepreneurship;
              Calculus; Operating Systems.
            </p>
          </div>
        </div>

        <div class="resume__experience">
          <h3 class="resume-title">Professional Experience</h3>
          <div class="resume-item">
            <h4>React Developer</h4>
            <h5>June 2021 - Present</h5>

            <p>
              Started hands-on practice on React framework. Took 10-hour long
              course, coded along and did commits on github as the course went.
              Learned the fundamentals, hooks, context API, react router, custom
              hooks and more in this comprehensive course.
            </p>
          </div>
          <div class="resume-item">
            <h4>Mobile Developer</h4>
            <h5>Aug 2020 - Present</h5>
            <p>
              <em>Fiverr</em>
            </p>
            <p>
              Worked on application development, Augmented Reality, platform and
              architecture of suite of apps. Worked as an android developer by
              integrating APIs like Google AR Core and Firebase.
            </p>
          </div>

          <div class="resume-item">
            <h4>Continuous Learning. </h4>
            <p>
              Took online courses, read book chapters, videos and engineering
              articles, build projects to learn about web & android
              applications, augmented reality, 3d models and polyglot
              development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
