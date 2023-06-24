import { useState, useEffect } from "react";
import axios from "axios";
import Product from "./ProductIem";
import SkeletonProduct from "./SkeletonProduct";
import "./Surfboards.css";

function Surfboards() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_API_URL}/products`,
        });
        const surfboards = response.data.filter((product) => product.categoryId === 4).slice(0, 2);

        setProducts(surfboards);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, []);

  return (
    <div className="container surfboards-container">
      <div className="row">
        <div className="col-6 m-0 p-0">
          <img
            src="src/img/master-the-waves2.jpg" // Update the image source path
            alt="master-the-waves"
            className="img-fluid h-100"
          />
        </div>

        <div className="surfboards col-5 d-flex pe-0">
          {products ? (
            products.map((product) => <Product product={product} key={product.id} />)
          ) : (
            <div>
              <SkeletonProduct count={2} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Surfboards;

// import "./Surfboards.css";
// import ProductListCarrousel from "./ProductListCarrousel";

// function Surfboards() {
//   return (
//     <div className="container surfboards-container">
//       <div className="row">
//         <div className="col-5 m-0 p-0">
//           <img
//             src="src\img\master-the-waves.jpg"
//             alt="master-the-waves"
//             className="img-fluid h-100"
//           />
//         </div>
//         <div className="col-7 d-flex pe-0">
//           <ProductListCarrousel categoryID={4} size="sm" interval={3000} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Surfboards;
