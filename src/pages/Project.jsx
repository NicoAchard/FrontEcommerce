import "./Project.css";
import TeamCard from "../components/TeamCard";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import {} from "module";
function Project() {
  return (
    <div className="project-container">
      <NavBar />
      <div className=" d-flex flex-column align-items-center">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laboriosam aperiam
              sit ratione itaque reiciendis perferendis deserunt fugiat ad! Fuga iure odio
              voluptatum fugit sed aliquid sequi voluptas adipisci omnis.
            </p>
          </div>
        </div>
        <div className="squares row gap-3 d-flex justify-content-center">
          <div className="square col-lg-3 m-2 border rounded">
            <h4>Duration</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, aspernatur
              consectetur. Voluptatibus ipsum aut autem necessitatibus amet quae delectus.
              Consequuntur officiis voluptatem adipisci eligendi doloremque earum reiciendis dolores
              quas impedit?
            </p>
          </div>
          <div className="square col-lg-3 m-2 border rounded">
            <h4>Tecnologies</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deserunt, nulla hic,
              similique aspernatur corrupti sit recusandae, voluptatibus illo modi omnis beatae
              harum! Cumque, culpa et molestiae accusamus consectetur dolorem!
            </p>
          </div>
          <div className="square col-lg-3 m-2 border rounded">
            <h4>Methodology</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto modi dicta, magnam hic
              aspernatur corporis dolor! Consequuntur, corporis quia laudantium necessitatibus nemo
              dolorem placeat obcaecati ut doloribus rerum expedita facere!
            </p>
          </div>
          <div className=" team  d-flex flex-column align-items-center justify-content-center gap-3 mx-auto mx-2 ">
            <div className="ps-5">
              <h2>Team</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt repudiandae dicta
                asperiores quia eligendi, libero impedit mollitia consequatur, itaque voluptate eos
                reiciendis facere amet eveniet perspiciatis quo labore! Sapiente, beatae.
              </p>
            </div>
            <div className=" d-flex flex-wrap  justify-content-center">
              <div>
                <TeamCard
                  img={"src/img/User6.jpg"}
                  name={"Iván Pintos"}
                  academicInfo={"Junior Full Stack Developer"}
                  description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minima, quod aspernatur amet cupiditate mollitia? Deleniti non incidunt, tempora necessitatibus reprehenderit, eum, rerum odit maiores ratione est libero accusantium esse?`}
                />
                <TeamCard
                  img={"src/img/User5.jpg"}
                  name={"Nicolás Achard"}
                  academicInfo={"Junior Full Stack Developer"}
                  description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minima, quod aspernatur amet cupiditate mollitia? Deleniti non incidunt, tempora necessitatibus reprehenderit, eum, rerum odit maiores ratione est libero accusantium esse?`}
                />
              </div>
              <div>
                <TeamCard
                  img={"src/img/User3.jpg"}
                  name={"Ramiro Vidal"}
                  academicInfo={"Junior Full Stack Developer"}
                  description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minima, quod aspernatur amet cupiditate mollitia? Deleniti non incidunt, tempora necessitatibus reprehenderit, eum, rerum odit maiores ratione est libero accusantium esse?`}
                />
                <TeamCard
                  img={"src/img/User7.jpg"}
                  name={"Diego Valiente"}
                  academicInfo={"Junior Full Stack Developer"}
                  description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minima, quod aspernatur amet cupiditate mollitia? Deleniti non incidunt, tempora necessitatibus reprehenderit, eum, rerum odit maiores ratione est libero accusantium esse?`}
                />
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
