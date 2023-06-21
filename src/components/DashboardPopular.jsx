import "./DashboardPopular.css";
import axios from "axios";
import { useEffect, useState } from "react";

function DashboardPopular({}) {
  const [highlights, sethighlights] = useState(null);
  useEffect(() => {
    async function getHighlights() {
      try {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_API_URL}/products`,
        });
        const fiveHighlights = response.data.filter((product) => product.highlight).slice(0, 5);
        sethighlights(fiveHighlights);
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
          <div className="popular-product d-flex p-1 me-2">
            <img
              src={`${import.meta.env.VITE_API_IMG}/${product.photos[0].url}`}
              alt="product-img"
            />
            <div className="d-flex flex-column">
              <div>
                <p className="p-0 m-0">{product.name}</p>
                <p className="p-0 popular-price">USD {product.price}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
export default DashboardPopular;
