import React, { useEffect, useRef } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./Project.css";

function Project() {
  const durationRef = useRef(null);
  const stackRef = useRef(null);
  const tasksRef = useRef(null);

  useEffect(() => {
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
          <div className="header col-md-7 text-black ms-4">
            <h1>About this project</h1>
            <p className="fs-5 ">
              Welcome to the Hey Bro! e-commerce website. This project was developed under the
              context of the final integrative test of the Hack Academy Web Development Bootcamp.
              It's the result of hard work, planning, team-job and many, many hours of coding...
              Hope you enjoy the visuals and its functionalities.
            </p>
          </div>
        </div>
        <div className="squares row gap-3 d-flex justify-content-center mx-3">
          <div ref={durationRef} className="square col-lg-3 m-2 border rounded">
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
              Overall, this project was built in 3 weeks time, during June 2023. It was divided into
              3 sprints (Scrum) lasting one week each.
            </p>
          </div>
          <div ref={stackRef} className="square col-lg-3 m-2 border rounded">
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
              Front-End: full React, using Vite-Latest. Back-End, a REST API was made using Node.js,
              Express, SQL, and Git/GitHub.
            </p>
          </div>
          <div ref={tasksRef} className="square col-lg-3 m-2 border rounded">
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
              Miro platform was used for the organization of tasks. This allowed each member of the
              team to permanently be aware of the status of the project as well as the task
              assignment and the MVP's for each sprint.
            </p>
          </div>
        </div>
      </div>

      <div className=" row justify-content-between mx-2 mb-5 g-4 ">
        <div className=" col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <img
              style={{ height: "12rem", objectFit: "cover" }}
              src={"src/img/User3.jpg"}
              alt="Author image"
            />
            <div className="card-body">
              <h5 className="card-title">Iván Pintos</h5>
              <div className="d-flex flex-column card-text">
                <div>
                  <span className="text-secondary"> ivanleonpintos@gmail.com</span>
                  <hr />
                </div>

                <div className="text-center fs-3 ">
                  <Link target="_blank" to="https://www.linkedin.com/in/ivan-pintos/">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                  <span> </span>
                  <Link style={{ color: "purple" }} to="https://github.com/Ivan-Pintos">
                    <i className="bi bi-github"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <img
              style={{ height: "12rem", objectFit: "cover" }}
              src={"src/img/UserA.jpg"}
              alt="Author image"
            />
            <div className="card-body">
              <h5 className="card-title">Diego Valiente</h5>
              <div className="d-flex flex-column card-text">
                <div>
                  <span className="text-secondary"> dievaliente@gmail.com</span>
                  <hr />
                </div>

                <div className="text-center fs-3 ">
                  <Link target="_blank" to="https://www.linkedin.com/in/dievaliente/">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                  <span> </span>

                  <Link style={{ color: "purple" }} to="https://github.com/dievaliente">
                    <i className="bi bi-github"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <img
              style={{ height: "12rem", objectFit: "cover" }}
              src={"src/img/User6.jpg"}
              alt="Author image"
            />
            <div className="card-body">
              <h5 className="card-title">Ramiro Vidal</h5>
              <div className="d-flex flex-column card-text">
                <div>
                  <span className="text-secondary"> ramavidal96@gmail.com</span>
                  <hr />
                </div>

                <div className="text-center fs-3 ">
                  <Link
                    target="_blank"
                    to="https://www.linkedin.com/in/ramiro-vidal-cutinella-972aa0210/"
                  >
                    <i className="bi bi-linkedin"></i>
                  </Link>
                  <span> </span>
                  <Link style={{ color: "purple" }} to="https://github.com/RamiroVidal26">
                    <i className="bi bi-github"></i>
                  </Link>
                </div>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={"src/img/UserB.jpg"}
              alt="Author image"
              style={{ height: "12rem", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Nicolás Achard</h5>
              <div className="d-flex flex-column card-text">
                <div>
                  <span className="text-secondary"> achardn@gmail.com</span>
                  <hr />
                </div>

                <div className="text-center fs-3 ">
                  <Link
                    target="_blank"
                    to="https://www.linkedin.com/in/nicol%C3%A1s-achard-arlington/"
                  >
                    <i className="bi bi-linkedin"></i>
                  </Link>

                  <span> </span>

                  <Link style={{ color: "purple" }} to="https://github.com/NicoAchard">
                    <i className="bi bi-github"></i>
                  </Link>
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
