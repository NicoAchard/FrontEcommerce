import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import { ADD_PRODUCT, TOGGLE_SHOWED } from "../redux/cartSlice";

import "react-toastify/dist/ReactToastify.css";
import "./Product.css";

export default () => {
  const [productCount, setProductCount] = useState(1);
  const [mainProductImg, setMainProductImg] = useState();
  const [product, setProduct] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const notify = () => toast("This functionality is under development");

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
    if (productCount < product.stock) {
      setProductCount(productCount + 1);
    }
  };

  const handlerAddToCart = (product) => {
    dispatch(
      ADD_PRODUCT({
        id: product.id,
        description: product.description,
        name: product.name,
        unitPrice: product.price,
        qty: productCount,
        img: product.photos,
        stock: product.stock,
      }),
    );

    dispatch(TOGGLE_SHOWED());
  };

  const handlerBuyNow = (product) => {
    dispatch(
      ADD_PRODUCT({
        id: product.id,
        description: product.description,
        name: product.name,
        unitPrice: product.price,
        qty: productCount,
        img: product.photos,
        stock: product.stock,
      }),
    );
  };
  return (
    <div className="d-flex flex-column min-vh-100">
      <div>
        <NavBar />
        <div className="container mb-4" style={{ marginTop: "6rem" }}>
          {product ? (
            <div className="d-flex flex-column gap-3" key={product.id}>
              <div className="d-flex gap-2 align-items-center">
                <span onClick={() => navigate("/")} className="nav-product-item-secondary">
                  Home
                </span>
                {`>`}
                <span onClick={() => navigate("/products")} className="nav-product-item-secondary">
                  {" "}
                  Products
                </span>
                <span className="text-secondary">{`> ${product.name}`}</span>
              </div>
              <div className="container">
                <div className="row mx-4 gap-3">
                  <div className="col-4 d-flex flex-column  p-0  align-items-center position-relative ">
                    <i
                      className=" bi bi-heart position-absolute top-0 end-0 mx-1 cursor-pointer"
                      onClick={notify}
                    ></i>
                    <ToastContainer
                      theme="dark"
                      pauseOnFocusLoss={false}
                      progressStyle={{ backgroundColor: "#52C9B0" }}
                    />
                    <img
                      className="d-block img-fluid border-bottom border-3"
                      src={`${import.meta.env.VITE_API_IMG}/${mainProductImg}`}
                      alt={product.name}
                    />
                    {product.photos.length > 1 && (
                      <div className="d-flex  w-100 gap-2 mt-2">
                        {product.photos.map((photo) => {
                          return (
                            <div className=" mx-auto" key={photo.url}>
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
                    <div className="d-flex align-items-end justify-content-end flex-column gap-2">
                      <div className="d-flex gap-2">
                        <div className="border d-flex gap-2 ">
                          <button className="btn" onClick={handlerDecrementCountProduct}>
                            -
                          </button>
                          <span className="d-flex align-items-center">{productCount}</span>
                          <button className="btn" onClick={handlerIncreseCountProduct}>
                            +
                          </button>
                        </div>
                        <button
                          className="btn btn-warning rounded-0 border-black"
                          onClick={() => handlerAddToCart(product)}
                        >
                          ADD TO CART
                        </button>
                      </div>
                      <h6>Total: {`$${product.price * productCount}.00`}</h6>

                      <div className="row d-flex justify-content-between ">
                        <div className="col-4 ">
                          <div className="d-flex justify-content-between  ">
                            <div>
                              <h2>${product.price}.00</h2>

                              <div>
                                <p className="text-success mb-0">
                                  {" "}
                                  <i className="bi bi-arrow-return-left"></i> Free return
                                </p>
                                <p style={{ color: "gray", fontSize: "0.8rem" }}>
                                  You have 30 days from the moment you receive it
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <Link to="/checkout">
                            <button
                              onClick={() => handlerBuyNow(product)}
                              className="btn btn-dark rounded-0 w-100"
                            >
                              BUY NOW
                            </button>
                          </Link>
                          <div className="text-start">
                            <p className="mb-2">
                              <Link
                                to="/about-this-project"
                                className="text-decoration-none"
                                style={{ fontSize: "0.8rem" }}
                              >
                                <i className="bi bi-patch-check"></i> Protected purchase
                              </Link>
                              <span style={{ color: "gray", fontSize: "0.8rem" }}>
                                , instant money refund if the product isn't what you expected.
                              </span>
                            </p>
                            <p style={{ color: "gray", fontSize: "0.8rem" }}>
                              <i className="bi bi-shield-slash"></i> 6 months manufacturer extended
                              warranty.
                            </p>
                          </div>
                        </div>
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
