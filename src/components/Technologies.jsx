import vite from "../img/Vite.js.svg";
import redux from "../img/redux.svg";
import react from "../img/react.svg";
import mysql from "../img/mysql.svg";
import nodejs from "../img/nodejs.svg";
import bootstrap from "../img/Bootstrap.svg";
import express from "../img/express.svg";
import github from "../img/github.svg";
import "./Technologies.css";

function Technologies() {
  return (
    <div className="col d-flex justify-content-center justify-content-md-between  flex-wrap p-3 p-0">
      <div className="d-flex flex-column  align-items-center gap-2">
        <img
          src={vite}
          alt=""
          style={{ width: "64px", height: "64px" }}
          srcset=""
          className="carousel-icon"
        />
        <span>Vite.js</span>
      </div>
      <div className="d-flex flex-column  align-items-center gap-2">
        <img
          src={bootstrap}
          alt=""
          style={{ width: "64px", height: "64px" }}
          srcset=""
          className="carousel-icon"
        />
        <span>Bootstrap</span>
      </div>
      <div className="d-flex flex-column  align-items-center gap-2">
        <img
          src={redux}
          alt=""
          style={{ width: "64px", height: "64px" }}
          srcset=""
          className="carousel-icon"
        />
        <span>Redux.js</span>
      </div>
      <div className="d-flex flex-column  align-items-center gap-2">
        <img
          src={react}
          alt=""
          style={{ width: "64px", height: "64px" }}
          srcset=""
          className="carousel-icon"
        />
        <span>react</span>
      </div>
      <div className="d-flex flex-column  align-items-center gap-2">
        <img
          src={mysql}
          alt=""
          style={{ width: "64px", height: "64px" }}
          srcset=""
          className="carousel-icon"
        />
        <span>MySql</span>
      </div>
      <div className="d-flex flex-column  align-items-center gap-2">
        <img
          src={nodejs}
          alt=""
          style={{ width: "64px", height: "64px" }}
          srcset=""
          className="carousel-icon"
        />
        <span>node.js</span>
      </div>
      <div className="d-flex flex-column  align-items-center gap-2">
        <img
          src={express}
          alt=""
          style={{ width: "64px", height: "64px" }}
          srcset=""
          className="carousel-icon"
        />
        <span>Express</span>
      </div>
      <div className="d-flex flex-column  align-items-center gap-2">
        <img
          src={github}
          alt=""
          style={{ width: "64px", height: "64px" }}
          srcset=""
          className="carousel-icon"
        />
        <span>Github</span>
      </div>
    </div>
  );
}

export default Technologies;
