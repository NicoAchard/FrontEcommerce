import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import vite from "../img/Vite.js.svg";
import redux from "../img/redux.svg";
import react from "../img/react.svg";
import mysql from "../img/mysql.svg";
import nodejs from "../img/nodejs.svg";
import bootstrap from "../img/Bootstrap.svg";
import express from "../img/express.svg";
import github from "../img/github.svg";
import "./Project.css";
import TechnologiesCarousel from "../components/TechnologiesCarousel";

function Project() {
  const durationRef = useRef(null);
  const stackRef = useRef(null);
  const tasksRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    durationRef.current.classList.add("animate-duration");
    stackRef.current.classList.add("animate-stack");
    tasksRef.current.classList.add("animate-tasks");
    headerRef.current.classList.add("animate-header");
  }, []);

  return (
    <div className="project-container">
      <NavBar />
      <div className="d-flex flex-column align-items-center">
        <div ref={headerRef} className="row header-container-project w-100 ">
          <img
            src="src/img/about-this-project.webp"
            alt="Header img"
            className=" header-image position-absolute"
          />
          <div className="fade-overlay-2 position-absolute" />
          <div className="header d-flex flex-column justify-content-center col-md-9 col-lg-9  text-black ms-4">
            <div style={{ marginTop: "-250px", marginBottom: "20px" }}>
              <h1>About this project</h1>
            </div>
            <div>
              <p className="fs-5">
                Welcome to the Hey! Boards e-commerce website. This project was developed as part of
                the final integrative exam of the Hack Academy Web Development Bootcamp. It is the
                result of hard work, meticulous planning, effective teamwork, and many, many hours
                of coding. We sincerely hope that you enjoy the visuals and functionalities of our
                website.
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
                The development process followed the Scrum methodology and was divided into three
                sprints, each lasting one week, resulting in a total of three weeks of focused work
                during the month of June 2023. By adopting this approach, our team effectively
                managed time and maintained a consistent pace throughout the project.
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
                For the Front-End of the site, an application was developed in React (using
                Vite.js), while for the Back-End, a REST API was built with Node.js, Express, SQL,
                and Git/GitHub.
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
                <span className="fw-bold">
                  <Link
                    to="https://miro.com/app/board/uXjVM_QQ1hE=/"
                    target="blank"
                    className="miro"
                  >
                    Miro{" "}
                  </Link>
                </span>
                platform was used for the organization of tasks. This allowed each member of the
                team to permanently be aware of the status of the project as well as the task's
                assignment and the MVP (Minimum Viable Product) for each sprint.
              </p>
            </div>
          </div>
          <div className="row squere px-3   mb-5">
            <h3 className="text-center pt-3 pb-lg-3">Technologies</h3>
            <TechnologiesCarousel />
            {/* <div className="col d-flex justify-content-center justify-content-md-between  flex-wrap p-3 p-0">
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
            </div> */}
          </div>
          <div className="row squere px-3   mb-2">
            <div className="col fs-5 text-center">
              <p>
                This intensive three-month course has equipped us with over 700 practical hours,
                dedicated to learning and honing the skills required to build robust and dynamic web
                applications. Following the given instructions, we embarked on the task of
                developing an e-commerce website for a product of our choosing, employing these
                technologies to bring this project to life.
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
            <p className="fs-5 mt-4">
              We are excited to showcase this e-commerce project as a culmination of our journey to
              become full stack web developers.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Project;
