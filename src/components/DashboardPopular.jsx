import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./DashboardPopular.css";
import axios from "axios";

function DashboardPopular({}) {
  const [highlights, sethighlights] = useState(null);
  const [ordersProducts, setOrdersProducts] = useState(null);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    async function getHighlights() {
      try {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_API_URL}/orders`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const productsSold = {};

        // Recorrer las órdenes y acumular la cantidad vendida de cada producto
        response.data.forEach((order) => {
          // Recorrer los productos de cada orden
          order.products.forEach((product) => {
            const { id, qty, name, unitPrice, img } = product;

            // Verificar si el producto ya existe en productsSold
            if (productsSold.hasOwnProperty(id)) {
              // Si existe, sumar la cantidad vendida y actualizar los valores adicionales
              productsSold[id].qty += qty;
            } else {
              // Si no existe, crear una nueva entrada en productsSold
              productsSold[id] = {
                qty,
                name,
                unitPrice,
                img,
              };
            }
          });
        });

        // Obtener los 5 productos más vendidos
        const topProducts = Object.entries(productsSold)
          .sort(([, a], [, b]) => b.qty - a.qty)
          .slice(0, 5)
          .map(([id, product]) => ({ id, ...product }));
        console.log(topProducts);
        sethighlights(topProducts);
      } catch (error) {
        console.log(error);
      }
    }

    getHighlights();
  }, []);
  return (
    <div>
      <p className="text-center fw-bold fs-5 mt-2">Popular products</p>
      {highlights &&
        highlights.map((product) => (
          <div className="popular-product d-flex p-1 me-2 position-relative" key={product.id}>
            {console.log(product)}
            <img src={`${import.meta.env.VITE_API_IMG}/${product.img[0].url}`} alt="product-img" />
            <div className="d-flex flex-column w-100">
              <div className="border-bottom ">
                <p className="p-0 m-0 fw-bold">{product.name}</p>
                <p className="p-0 popular-price m-0">USD {product.unitPrice}</p>
                <p className="p-0  m-0">Sales: {product.qty}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
export default DashboardPopular;
