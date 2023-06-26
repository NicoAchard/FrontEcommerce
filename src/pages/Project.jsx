import React, { useEffect, useRef } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import "./Project.css";
import vite from "../img/Vite.js.svg";
import redux from "../img/redux.svg";
import react from "../img/react.svg";
import mysql from "../img/mysql.svg";
import nodejs from "../img/nodejs.svg";
import bootstrap from "../img/Bootstrap.svg";
import express from "../img/express.svg";
import github from "../img/github.svg";

function Project() {
  const introductionRef = useRef(null);
  const durationRef = useRef(null);
  const stackRef = useRef(null);
  const tasksRef = useRef(null);

  useEffect(() => {
    introductionRef.current.classList.add("animate-introduction");
    durationRef.current.classList.add("animate-duration");
    stackRef.current.classList.add("animate-stack");
    tasksRef.current.classList.add("animate-tasks");
  }, []);

  return (
    <div className="project-container">
      <NavBar />
      <div className="d-flex flex-column align-items-center">
        <div className="row header-container-project w-100">
          <img
            src="src/img/about-this-project.jpg"
            alt="Header img"
            className=" header-image position-absolute"
          />
          <div className="fade-overlay-2 position-absolute" />
          <div
            ref={introductionRef}
            className="header d-flex flex-column justify-content-center col-md-9 col-lg-9  text-black ms-4"
          >
            <div style={{ marginTop: "-250px", marginBottom: "20px" }}>
              <h1>About this project</h1>
            </div>
            <div>
              <p className="fs-5">
                Welcome to the Hey Bro! e-commerce website. This project was developed under the
                context of the final integrative test of the Hack Academy Web Development Bootcamp.
                It's the result of hard work, planning, team-job and many, many hours of coding...
                Hope you enjoy the visuals and its functionalities.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="squares row gap-3 d-flex justify-content-between">
            <div ref={durationRef} className="square col-lg-3  border rounded">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <h4>Duration</h4>
                </div>
                <div className="col d-flex justify-content-end" style={{ marginTop: "-180px" }}>
                  <div className="icon-square">
                    <i className="fs-4 bi bi-clock-fill"></i>
                  </div>
                </div>
              </div>
              <p>
                Overall, this project was built in 3 weeks time, during June 2023. It was divided
                into 3 sprints (Scrum) lasting one week each.
              </p>
            </div>
            <div ref={stackRef} className="square col-lg-3 border rounded">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <h4>Stack</h4>
                </div>
                <div className="col d-flex justify-content-end" style={{ marginTop: "-180px" }}>
                  <div className="icon-square">
                    <i className="fs-4 bi bi-tools"></i>
                  </div>
                </div>
              </div>
              <p>
                Front-End: full React, using Vite-Latest. Back-End, a REST API was made using
                Node.js, Express, SQL, and Git/GitHub.
              </p>
            </div>
            <div ref={tasksRef} className="square col-lg-3  border rounded">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <h4>Tasks</h4>
                </div>
                <div className="col d-flex justify-content-end" style={{ marginTop: "-180px" }}>
                  <div className="icon-square">
                    <i className="fs-4 bi bi-kanban"></i>
                  </div>
                </div>
              </div>
              <p>
                Miro platform was used for the organization of tasks. This allowed each member of
                the team to permanently be aware of the status of the project as well as the task
                assignment and the MVP's for each sprint.
              </p>
            </div>
          </div>
          <div className="row squere px-3   mb-5">
            <h3 className="text-center pt-3 pb-lg-3">Technologies</h3>
            <div className="col d-flex justify-content-center justify-content-md-between  flex-wrap p-3 p-0">
              <div className="d-flex flex-column  align-items-center gap-2">
                <img src={vite} alt="" style={{ width: "64px", height: "64px" }} srcset="" />
                <span>Vite.js</span>
              </div>
              <div className="d-flex flex-column  align-items-center gap-2">
                <img src={bootstrap} alt="" style={{ width: "64px", height: "64px" }} srcset="" />
                <span>Bootstrap</span>
              </div>
              <div className="d-flex flex-column  align-items-center gap-2">
                <img src={redux} alt="" style={{ width: "64px", height: "64px" }} srcset="" />
                <span>Redux.js</span>
              </div>
              <div className="d-flex flex-column  align-items-center gap-2">
                <img src={react} alt="" style={{ width: "64px", height: "64px" }} srcset="" />
                <span>react</span>
              </div>
              <div className="d-flex flex-column  align-items-center gap-2">
                <img src={mysql} alt="" style={{ width: "64px", height: "64px" }} srcset="" />
                <span>MySql</span>
              </div>
              <div className="d-flex flex-column  align-items-center gap-2">
                <img src={nodejs} alt="" style={{ width: "64px", height: "64px" }} srcset="" />
                <span>node.js</span>
              </div>
              <div className="d-flex flex-column  align-items-center gap-2">
                <img src={express} alt="" style={{ width: "64px", height: "64px" }} srcset="" />
                <span>Express</span>
              </div>
              <div className="d-flex flex-column  align-items-center gap-2">
                <img src={github} alt="" style={{ width: "64px", height: "64px" }} srcset="" />
                <span>Github</span>
              </div>
            </div>
          </div>
          <div className="row squere px-3   mb-2">
            <div className="col">
              <p>
                Final integrative exam project of the Full Stack web development bootcamp at Hack
                Academy, Uruguay. More than 700 practical hours, in Full Time mode. Instruction:
                develop an ecommerce of a product of your choice using the technologies numbered
                before.
              </p>
            </div>
          </div>
          <div className="d-flex flex-column mb-5 py-4 align-items-center gap-4">
            <h2>Team</h2>
            <div className="row w-100 g-4">
              <div className="col-12 col-md-6 col-lg-3 p-0 d-flex justify-content-center">
                <div className="card w-75 h-100">
                  <img
                    style={{ height: "12rem", objectFit: "cover" }}
                    src={"src/img/User3.jpg"}
                    alt="Author image"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-responsive">Iván Pintos</h5>
                    <div className="d-flex flex-column justify-content-between h-75">
                      <span className="text-secondary text-responsive">
                        ivanleonpintos@gmail.com
                      </span>
                      <div className="d-flex justify-content-center fs-3 gap-2 border-top">
                        <Link target="_blank" to="https://www.linkedin.com/in/ivan-pintos/">
                          <i className="bi bi-linkedin"></i>
                        </Link>
                        <Link style={{ color: "purple" }} to="https://github.com/Ivan-Pintos">
                          <i className="bi bi-github"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 p-0 d-flex justify-content-center">
                <div className="card w-75 d-flex justify-content-center h-100">
                  <img
                    style={{ height: "12rem", objectFit: "cover" }}
                    src={"src/img/UserA.jpg"}
                    alt="Author image"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-responsive">Diego Valiente</h5>
                    <div className="d-flex flex-column justify-content-between h-75">
                      <span className="text-secondary text-responsive"> dievaliente@gmail.com</span>

                      <div className="d-flex justify-content-center fs-3 gap-2 border-top">
                        <Link target="_blank" to="https://www.linkedin.com/in/dievaliente/">
                          <i className="bi bi-linkedin"></i>
                        </Link>
                        <Link style={{ color: "purple" }} to="https://github.com/dievaliente">
                          <i className="bi bi-github"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 p-0 d-flex justify-content-center">
                <div className="card w-75 d-flex justify-content-center h-100">
                  <img
                    style={{ height: "12rem", objectFit: "cover" }}
                    src={"src/img/User6.jpg"}
                    alt="Author image"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-responsive">Ramiro Vidal</h5>
                    <div className="d-flex flex-column justify-content-between h-75">
                      <span className="text-secondary text-responsive"> ramavidal96@gmail.com</span>
                      <div className="d-flex justify-content-center fs-3 gap-2 border-top">
                        <Link
                          target="_blank"
                          to="https://www.linkedin.com/in/ramiro-vidal-cutinella-972aa0210/"
                        >
                          <i className="bi bi-linkedin"></i>
                        </Link>
                        <Link style={{ color: "purple" }} to="https://github.com/RamiroVidal26">
                          <i className="bi bi-github"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 p-0 d-flex justify-content-center">
                <div className="card w-75 d-flex justify-content-center h-100">
                  <img
                    src={"src/img/UserB.jpg"}
                    alt="Author image"
                    style={{ height: "12rem", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-responsive">Nicolás Achard</h5>
                    <div className="d-flex flex-column justify-content-between h-75">
                      <span className="text-secondary text-responsive"> achardn@gmail.com</span>
                      <div className="d-flex justify-content-center fs-3 gap-2 border-top">
                        <Link
                          target="_blank"
                          to="https://www.linkedin.com/in/nicol%C3%A1s-achard-arlington/"
                        >
                          <i className="bi bi-linkedin"></i>
                        </Link>
                        <Link style={{ color: "purple" }} to="https://github.com/NicoAchard">
                          <i className="bi bi-github"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Project;
