import { Link } from "react-router-dom";

function SignUp() {
  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="px-5 ms-xl-4">
              <img src="src\img\heybroInvert.png" alt="Logo" className="hey-bro-nav" />
            </div>

            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form style={{ width: "23rem" }}>
                <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                  Sign Up
                </h3>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form2Example18"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form2Example18">
                    Email address
                  </label>
                </div>

                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1m"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example1m">
                        First name
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1m"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example1m">
                        Last name
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1m"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example1m">
                        Phone Number
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1m"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example1m">
                        Address
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example28"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form2Example28">
                    Password
                  </label>
                </div>

                <div className="pt-1 mb-2">
                  <button className="btn btn-dark btn-lg btn-block" type="button">
                    Sign Up
                  </button>
                </div>

                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="link-info">
                    Log in
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img
              src="src/img/skateLogin.jpg"
              alt="Login image"
              className="w-100 vh-100"
              style={{ objectFit: "cover", objectPosition: "left" }}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
