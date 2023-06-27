import vite from "../img/Vite.js.svg";
import redux from "../img/redux.svg";
import react from "../img/react.svg";
import mysql from "../img/mysql.svg";
import nodejs from "../img/nodejs.svg";
import bootstrap from "../img/Bootstrap.svg";
import express from "../img/express.svg";
import github from "../img/github.svg";
import "./TechnologiesCarousel.css";

function TechnologiesCarousel() {
  return (
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
  );
}

export default TechnologiesCarousel;
