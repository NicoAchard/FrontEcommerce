import { Link } from "react-router-dom";

export default () => (
  <div className="container">
    <h1 className="my-4">Error 404</h1>
    <p className="mb-4">Lo sentimos, la página a la que se está intentando acceder no existe.</p>

    <Link to="/" className="btn btn-primary">
      Ir a página de inicio
    </Link>
  </div>
);
