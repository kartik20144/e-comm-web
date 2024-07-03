// import React from "react";
// import { Link } from "react-router-dom";
// import { Carousel, Image } from "react-bootstrap";
// import Loader from "./Loader";
// import Message from "./Message";
// import { useGetTopProductsQuery } from "../slices/productsApiSlice";
// import shopping from "../assets/shopping.png"

// const ProductsCarousel = () => {
//   const { data: products, isLoading, error } = useGetTopProductsQuery();

//   return isLoading ? (
//     <Loader />
//   ) : error ? (
//     <Message variant="danger">{error}</Message>
//   ) : (
//     <Carousel pause="hover" className="bg-primary mb-4">
//       {products.map((product) => (
//         <Carousel.Item key={product._id}>
//           <div className="inline-block">
//           <div>
//           <Link to={`/product/${product._id}`}>

//             <Image  src={product.image} alt={product.name} />
          
//           </Link>
//           </div>
//           <div>

//           <Link to={`/product/${product._id}`}>
//           <Image className="align-bottom" src={shopping} alt={product.name} />
//           </Link>
//           </div>
            
//           </div>
//             <Carousel.Caption className="carousel-caption">
//               <h2>
//                 {product.name} (${product.price})
//               </h2>
//             </Carousel.Caption>
//         </Carousel.Item>
        
        
//       ))}
//     </Carousel>
//   );
// };

// export default ProductsCarousel;
import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";
import shopping from "../assets/shopping.png";

const ProductsCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel pause="hover" className="bg-primary mb-4 p-0 m-0">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <div className="d-flex ">
            <div className="p-0 m-0">
              <Link to={`/product/${product._id}`}>
                <Image src={product.image} alt={product.name} fluid className="d-block w-100 p-0 m-0" />
              </Link>
            </div>
            <div className="p-2 d-none d-md-block" >
              <Link to={`/product/${product._id}`}>
                <Image src={shopping} alt="Shopping icon" fluid className="d-block w-100" />
              </Link>
            </div>
          </div>
          <Carousel.Caption className="carousel-caption">
            <h2>
              {product.name} (${product.price})
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductsCarousel;
