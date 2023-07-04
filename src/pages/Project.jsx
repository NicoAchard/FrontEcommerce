import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Project.css";
import aboutImg from "../img/about-this-project.webp";
import aboutTitle from "../img/about-header.svg";
import Technologies from "../components/Technologies";
import Ivan from "../img/Ivan.jpg";
import Diego from "../img/Diego.jpg";
import Ramiro from "../img/Ramiro.jpg";
import Nico from "../img/Nico.jpg";

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
        <div ref={headerRef} className="row header-container-project w-100">
          <img src={aboutImg} alt="Header img" className=" header-image position-absolute" />
          <div className="fade-overlay-2 position-absolute" />
          <div className="container">
            <div className="header d-flex flex-column justify-content-center col-md-9 col-lg-9  text-black ms-5">
              <div className="header-title-container">
                <img src={aboutTitle} alt="About-this-project" className="header-title"></img>
              </div>
              <div>
                <p className="fs-5 outlined-text">
                  Welcome to the Hey! Boards' e-commerce website. This project was developed as part
                  of the final integrative exam of the Hack Academy Web Development Bootcamp. It is
                  the result of hard work, meticulous planning, effective teamwork, and many, many
                  hours of coding. We hope that you enjoy the visuals and functionalities of our
                  website.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="squares row gap-3 d-flex justify-content-between">
            <div ref={durationRef} className="square col-lg-3  border rounded">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <h4 className="fw-bold">Duration</h4>
                </div>
                <div className="col d-flex justify-content-end" style={{ marginTop: "-140px" }}>
                  <div className="icon-square">
                    <i className="fs-4 bi bi-clock-fill"></i>
                  </div>
                </div>
              </div>
              <p className="fs-6">
                The development process followed the Scrum methodology and was divided into three
                sprints, each lasting one week, resulting in a total of three weeks of focused work
                during the month of June 2023.
              </p>
            </div>
            <div ref={stackRef} className="square col-lg-3 border rounded">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <h4 className="fw-bold">Stack</h4>
                </div>
                <div className="col d-flex justify-content-end" style={{ marginTop: "-140px" }}>
                  <div className="icon-square">
                    <i className="fs-4 bi bi-tools"></i>
                  </div>
                </div>
              </div>
              <p className="fs-6">
                For the Front-End of the site, an application was developed in React (using
                Vite.js), while for the Back-End, a REST API was built with Node.js, Express, SQL,
                and Git/GitHub.
              </p>
            </div>
            <div ref={tasksRef} className="square col-lg-3  border rounded">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <h4 className="fw-bold">Tasks</h4>
                </div>
                <div className="col d-flex justify-content-end" style={{ marginTop: "-140px" }}>
                  <div className="icon-square">
                    <i className="fs-4 bi bi-kanban"></i>
                  </div>
                </div>
              </div>
              <p className="fs-6">
                Miro platform was used for organizing tasks, allowing each team member to stay
                informed about the project's status, manage task assignments, and achieve the
                Minimum Viable Product (MVP) for each sprint. You can see it{" "}
                <Link
                  to="https://miro.com/app/board/uXjVM_QQ1hE=/?share_link_id=515675317311"
                  target="blank"
                  className="miro fw-bold text-decoration-none"
                >
                  here.
                </Link>
              </p>
            </div>
          </div>
          <h3
            className="w-100 text-center mt-4 pb-lg-3 fs-3 outlined-text"
            data-text="Technologies"
          >
            Technologies
          </h3>
          <div className="d-flex flex-column row square border rounded px-3 pt-3 mb-5">
            <Technologies />
            <div className="col fs-6 mt-5">
              <p>
                This intensive three-month course has equipped us with over 700 practical hours,
                dedicated to learning and honing the skills required to build robust and dynamic web
                applications. Following the given instructions, we embarked on the task of
                developing an e-commerce website for a product of our choosing, employing these
                technologies to bring this project to life.
              </p>
            </div>
          </div>
          <div className="team rounded d-flex flex-column mb-5 py-4 align-items-center gap-4">
            <h2 className="m-4 outlined-text" data-text="Team">
              Team
            </h2>
            <div className="row w-100 g-4">
              <div className="col-12 col-md-6 col-lg-3 p-0 d-flex justify-content-center">
                <div className="card team-card w-75 h-100">
                  <img style={{ height: "16rem", objectFit: "cover" }} src={Ivan} alt="Ivan" />
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
                <div className="card team-card w-75 d-flex justify-content-center h-100">
                  <img style={{ height: "16rem", objectFit: "cover" }} src={Diego} alt="Diego" />
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
                <div className="card team-card w-75 d-flex justify-content-center h-100">
                  <img style={{ height: "16rem", objectFit: "cover" }} src={Ramiro} alt="Ramiro" />
                  <div className="card-body">
                    <h5 className="card-title text-responsive">Ramiro Vidal</h5>
                    <div className="d-flex flex-column justify-content-between h-75">
                      <span className="text-secondary text-responsive">
                        {" "}
                        ramirovidalc@gmail.com
                      </span>
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
                <div className="card team-card w-75 d-flex justify-content-center h-100">
                  <img src={Nico} alt="Nicolas" style={{ height: "16rem", objectFit: "cover" }} />
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
          <p className="fs-6 mb-5 pb-2 text-center">
            We are excited to showcase this e-commerce project as a culmination of our journey to
            become full stack web developers.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Project;
