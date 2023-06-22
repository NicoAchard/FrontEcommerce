import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Profile() {
  return (
    <div className="">
      <Navbar />
      <div className="d-flex justify-content-center">
        <form style={{ width: "23rem" }}>
          <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
            Sign Up
          </h3>

          <div className="form-outline mb-4">
            <div style={{ fontSize: "0.8rem" }} className="text-danger">
              Email already exists, please use another Email.
            </div>

            <input
              type="email"
              name="email"
              id="email"
              className={`form-control form-control-lg`}
            />

            <label className="form-label" htmlFor="email">
              Email
            </label>
          </div>

          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="form-control form-control-lg"
                />

                <label className="form-label" htmlFor="firstname">
                  Firstname
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="lastname">
                  Lastname
                </label>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="phone_number">
                  Phone Number
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="address">
                  Address
                </label>
              </div>
            </div>
          </div>
          <div className="row mb-1">
            <div className="col">
              <div className="form-outline mb-4">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={`form-control form-control-lg`}
                />
                <label className="form-label" htmlFor="password">
                  Password
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  type="password"
                  id="repeatPassword"
                  name="repeatPassword"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="repeatPassword">
                  Repeat password
                </label>
              </div>
            </div>
          </div>
          <div className="form-outline">
            <input className="form-control" name="avatar" id="avatar" type="file" />
            <label className="form-label" htmlFor="avatar">
              Profile Image
            </label>
          </div>

          <div className="pt-1 mb-2">
            <button className="btn btn-dark btn-lg btn-block" type="submit">
              Sign Up
            </button>
          </div>

          <p>Already have an account?</p>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
