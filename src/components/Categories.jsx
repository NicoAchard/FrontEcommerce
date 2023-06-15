import React, { useState } from "react";
import "./Categories.css";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();
  const handleCategoryClick = () => {
    navigate("/products");
  };
  const initialHideConfig = { text1: "d-none", text2: "d-none", text3: "d-none", text4: "d-none" };
  const [textHide, setTextHide] = useState(initialHideConfig);
  function handleTextHide(target) {
    console.log(target);
    setTextHide(initialHideConfig);
    setTextHide({ ...textHide, [target]: "d-flex" });
  }
  return (
    <div className="d-flex justify-content-center categories container mb-4">
      <div className="d-flex" style={{ width: "800px", height: "500px" }}>
        <div className=" category">
          <div className="text-center ">
            <h4 className={`${textHide.text1}`}>Skateboards</h4>
          </div>
          <img
            src="src\img\category-skate.jpg"
            alt="Skates"
            className="category-img rounded"
            onClick={handleCategoryClick}
            onMouseEnter={() => handleTextHide("text1")}
          />
        </div>
        <div className="category">
          <div className="text-center">
            <h4 className={`${textHide.text2}`}>Longboards</h4>
          </div>
          <img
            src="src\img\category-longboard.jpg"
            alt="Longboards"
            className="category-img rounded"
            onClick={handleCategoryClick}
            onMouseEnter={() => handleTextHide("text2")}
          />
        </div>
        <div className="category">
          <div className="text-center">
            <h4 className={`${textHide.text3}`}>Cruisers</h4>
          </div>
          <img
            src="src\img\category-cruiser.jpg"
            alt="Cruisers"
            className="category-img rounded"
            onClick={handleCategoryClick}
            onMouseEnter={() => handleTextHide("text3")}
          />
        </div>
        <div className="category">
          <div className="text-center">
            <h4 className={`${textHide.text4}`}>Surfboards</h4>
          </div>
          <img
            src="src\img\category-surf.jpg"
            alt="Surfboards"
            className="category-img rounded"
            onClick={handleCategoryClick}
            onMouseEnter={() => handleTextHide("text4")}
          />
        </div>
      </div>
    </div>
  );
}

export default Categories;

// function Categories() {
//     const navigate = useNavigate();
//     const handleCategoryClick = () => {
//       navigate("/products");
//     };
//     return (
//       <div className="categories container mb-4">
//         <div className="row d-flex" style={{ width: "600px", height: "430px" }}>
//           <div
//             className="col-3 category"
//             style={{ }}
//           >
//             <div className="text-center">
//               <h4 className={hideConfig.text1}>Skateboards</h4>
//             </div>
//             <img
//               src="src\img\category-skate.jpg"
//               alt="Skates"
//               className="category-img rounded"
//               onClick={handleCategoryClick}
//             />
//           </div>
//           <div className="col-3 category">
//             <div className="text-center">
//               <h4>Longboards</h4>
//             </div>
//             <img
//               src="src\img\category-longboard.jpg"
//               alt="Longboards"
//               className="category-img rounded"
//               onClick={handleCategoryClick}
//             />
//           </div>
//           <div className="col-3 category">
//             <div className="text-center">
//               <h4>Cruisers</h4>
//             </div>
//             <img
//               src="src\img\category-cruiser.jpg"
//               alt="Cruisers"
//               className="category-img rounded"
//               onClick={handleCategoryClick}
//             />
//           </div>
//           <div className="col-3 category">
//             <div className="text-center">
//               <h4>Surfboards</h4>
//             </div>
//             <img
//               src="src\img\category-surf.jpg"
//               alt="Surfboards"
//               className="category-img rounded"
//               onClick={handleCategoryClick}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
