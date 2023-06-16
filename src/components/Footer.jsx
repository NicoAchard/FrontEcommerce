import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-black text-center text-white ">
      <div className="container p-4" style={{ fontSize: "0.8rem" }}>
        <section className="mb-4">
          <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button">
            <i class="bi bi-instagram"></i>
          </Link>

          <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button">
            <i class="bi bi-twitter"></i>
          </Link>

          <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button">
            <i class="bi bi-github"></i>
          </Link>
        </section>

        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter :</strong>
                </p>
              </div>

              <div className="col-md-5 col-12">
                <div className="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="form5Example2"
                    className="form-control"
                    placeholder="Email address..."
                  />
                  <label className="form-label mt-2" for="form5Example2">
                    The latest deals and savings, sent to your inbox weekly
                  </label>
                </div>
              </div>

              <div className="col-auto">
                <button type="submit" className="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>

        <section>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5>Shop</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link to="/" className="text-white text-decoration-none">
                    Skates
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white text-decoration-none">
                    Carver
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white text-decoration-none">
                    Longboard
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white text-decoration-none">
                    Penny
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5>Company</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link to="/about-this-project" className="text-white text-decoration-none">
                    Who we are
                  </Link>
                </li>
                <li>
                  <Link to="/about-this-project" className="text-white text-decoration-none">
                    Product manufacturing
                  </Link>
                </li>
                <li>
                  <Link to="/about-this-project" className="text-white text-decoration-none">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/about-this-project" className="text-white text-decoration-none">
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5>Account</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link to="/admin" className="text-white text-decoration-none">
                    Manage Account
                  </Link>
                </li>
                <li>
                  <Link to="/admin" className="text-white text-decoration-none">
                    Returns and Exchanges
                  </Link>
                </li>
                <li>
                  <Link to="/admin" className="text-white text-decoration-none">
                    Gift Cards
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5>Connect</h5>

              <ul className="list-unstyled mb-0 ">
                <li>
                  <Link to="/" className="text-white text-decoration-none">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white text-decoration-none">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white text-decoration-none">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white text-decoration-none">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2023 Copyright:{" "}
        <Link className="text-white text-decoration-none" to="https://ha.dev/">
          Hack Academy 2023
        </Link>
      </div>
    </footer>
  );
}
export default Footer;
