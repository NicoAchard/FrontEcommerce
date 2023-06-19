import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Product.css";

export default () => {
  const [productCount, setProductCount] = useState(1);
  const [mainProductImg, setMainProductImg] = useState();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    async function getProduct() {
      try {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_API_URL}/products/${params.slug}`,
        });
        setProduct(response.data);
        setMainProductImg(response.data.photos[0].url);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, []);
  const handlerChangeImg = (img) => {
    setMainProductImg(img);
  };
  const handlerDecrementCountProduct = () => {
    if (productCount >= 2) {
      setProductCount(productCount - 1);
    }
  };
  const handlerIncreseCountProduct = () => {
    console.log(product.stock + "||" + productCount);
    if (productCount < product.stock) {
      setProductCount(productCount + 1);
    }
  };
  return (
    <div className="d-flex flex-column min-vh-100">
      <div>
        <NavBar />
        <div className="container" style={{ marginTop: "6rem" }}>
          {product ? (
            <div className="d-flex flex-column gap-3" key={product.id}>
              <div className="d-flex gap-2 align-items-center">
                <span
                  style={{ fontSize: "0.9rem", cursor: "pointer" }}
                  onClick={() => navigate("/")}
                >
                  Home
                </span>
                <span className="text-secondary">{`> ${product.name}`}</span>
              </div>
              <div className="container">
                <div className="row mx-4 gap-3">
                  <div className="col-4 d-flex flex-column border p-0 align-items-center">
                    <img
                      className="d-block img-fluid"
                      src={`${import.meta.env.VITE_API_IMG}/${mainProductImg}`}
                      alt={product.name}
                    />
                    {product.photos.length > 1 && (
                      <div className="d-flex border-top w-100 gap-2">
                        {product.photos.map((photo) => {
                          return (
                            <div className="my-2" key={photo.url}>
                              <img
                                className="img-fluid img-product-secondary"
                                src={`${import.meta.env.VITE_API_IMG}/${photo.url}`}
                                alt={product.name}
                                onClick={() => handlerChangeImg(photo.url)}
                              />
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <div className="col d-flex flex-column gap-2">
                    <div className="d-flex flex-column gap-2">
                      <h1> {product.name}</h1>
                      <span>{product.description}</span>
                      <span>
                        <b>In stock:</b> <span> {product.stock}</span>
                      </span>
                    </div>
                    <div className="d-flex justify-content-between  ">
                      <div>
                        <h2>${product.price}.00</h2>
                        <h3>Total: {`$${product.price * productCount}.00`}</h3>{" "}
                        {/* TODO: Cambiar Total price para otro lugar */}
                      </div>

                      <div className="d-flex align-items-end justify-content-end flex-column gap-2">
                        <div className="d-flex gap-2">
                          <div className="border d-flex gap-2">
                            <button className="btn" onClick={handlerDecrementCountProduct}>
                              -
                            </button>
                            <span className="d-flex align-items-center">{productCount}</span>
                            <button className="btn" onClick={handlerIncreseCountProduct}>
                              +
                            </button>
                          </div>
                          <button className="btn btn-warning rounded-0 border-black">
                            ADD TO CART
                          </button>
                        </div>
                        <button className="btn btn-dark rounded-0 w-100">BUY NOW</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="m-0"></div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};
