import { useEffect, useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

export default ({ FinishProcess }) => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (state.number && state.expiry && state.cvc && state.name) {
      FinishProcess(true);
    } else {
      FinishProcess(false);
    }
  }, [state]);

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <div className="d-flex flex-column gap-3 mt-5">
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form className="container mt-4">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <label htmlFor="number" className="form-label">
              Card Number
            </label>
            <input
              type="number"
              name="number"
              id="number"
              value={state.number}
              className="form-control"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              style={{ fontSize: "1.1rem" }}
            />
            {/* <div className="invalid-feedback"> Credit card number is required </div> */}
          </div>

          <div className="col-lg-6">
            <label htmlFor="number" className="form-label">
              Expiration date (MM/YY)
            </label>
            <input
              type="text"
              name="expiry"
              id="expiry"
              value={state.expiry}
              className="form-control"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              style={{ fontSize: "1.1rem" }}
            />
            {/* <div className="invalid-feedback"> Expiration date required </div> */}
          </div>
        </div>

        <div className="row justify-content-between">
          <div className="col-lg-6">
            <label htmlFor="number" className="form-label w-75">
              Name on card
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={state.name}
              className="form-control"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              style={{ fontSize: "1.1rem" }}
            />
            <small className="text-muted">Full name as displayed on card</small>
            {/* <div className="invalid-feedback"> Name on card is required </div> */}
          </div>

          <div className="col-lg-6">
            <label htmlFor="number" className="form-label">
              CVV
            </label>
            <input
              type="number"
              name="cvc"
              id="cvc"
              value={state.cvc}
              className="form-control"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              style={{ fontSize: "1.1rem" }}
            />
            {/* <div className="invalid-feedback"> Security code required </div> */}
          </div>
        </div>
      </form>
    </div>
  );
};
