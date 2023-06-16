import "./Project.css";
import TeamCard from "../components/TeamCard";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import {} from "module";
function Project() {
  return (
    <div>
      <NavBar />
      <div className=" d-flex flex-column align-items-center">
        <div className="row header-container-project">
          <img src="src/img/about-this-project.jpg" alt="Header img" />
          <div className="header col-md-6 text-black ps-4 ms-4">
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
            <h5>Duración</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, aspernatur
              consectetur. Voluptatibus ipsum aut autem necessitatibus amet quae delectus.
              Consequuntur officiis voluptatem adipisci eligendi doloremque earum reiciendis dolores
              quas impedit?
            </p>
          </div>
          <div className="square col-lg-3 m-2 border rounded">
            <h5>Tecnologías</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deserunt, nulla hic,
              similique aspernatur corrupti sit recusandae, voluptatibus illo modi omnis beatae
              harum! Cumque, culpa et molestiae accusamus consectetur dolorem!
            </p>
          </div>
          <div className="square col-lg-3 m-2 border rounded">
            <h5>División de tareas</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto modi dicta, magnam hic
              aspernatur corporis dolor! Consequuntur, corporis quia laudantium necessitatibus nemo
              dolorem placeat obcaecati ut doloribus rerum expedita facere!
            </p>
          </div>
          <div className=" team d-flex flex-column align-items-center justify-content-center gap-3 mx-auto mx-2">
            <div className="p-4">
              <h2>Equipo</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt repudiandae dicta
                asperiores quia eligendi, libero impedit mollitia consequatur, itaque voluptate eos
                reiciendis facere amet eveniet perspiciatis quo labore! Sapiente, beatae.
              </p>
            </div>
            <div className=" d-flex flex-wrap gap-5 justify-content-center">
              <div>
                <TeamCard
                  img={
                    "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                  }
                  name={"Iván Pintos"}
                  academicInfo={"Junior Full Stack Developer"}
                  description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minima, quod aspernatur amet cupiditate mollitia? Deleniti non incidunt, tempora necessitatibus reprehenderit, eum, rerum odit maiores ratione est libero accusantium esse?`}
                />
                <TeamCard
                  img={
                    "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                  }
                  name={"Nicolás Achard"}
                  academicInfo={"Junior Full Stack Developer"}
                  description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minima, quod aspernatur amet cupiditate mollitia? Deleniti non incidunt, tempora necessitatibus reprehenderit, eum, rerum odit maiores ratione est libero accusantium esse?`}
                />
              </div>
              <div>
                <TeamCard
                  img={
                    "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                  }
                  name={"Ramiro Vidal"}
                  academicInfo={"Junior Full Stack Developer"}
                  description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minima, quod aspernatur amet cupiditate mollitia? Deleniti non incidunt, tempora necessitatibus reprehenderit, eum, rerum odit maiores ratione est libero accusantium esse?`}
                />
                <TeamCard
                  img={
                    "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                  }
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
