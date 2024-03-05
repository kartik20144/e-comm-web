import React from "react";
import { Row, Col } from "react-bootstrap";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Product from '../components/product'
import Message from "../components/Message";
import { useParams } from "react-router-dom";
import Paginate from "../components/Paginate";
import { Link } from "react-router-dom";
import ProductsCarousel from "../components/ProductsCarousel";



const HomeScreen = () => {
const {pageNumber, keyword} = useParams();

const {data, isLoading, error} = useGetProductsQuery({keyword, pageNumber});

  return (
    <>
    {!keyword ? (
      <ProductsCarousel />
    ) : (
      <Link to='/' className="btn btn-light mb-2">
      Go Back
      </Link>
    )}
    {isLoading ? (
      <center><h1>Loading</h1></center>
    ) : error ? (
    <Message variant='danger'>{error?.data?.message || error.error }</Message>
    ) : (
    <>
    <h1>Latest Products </h1>
    <Row>
      {data.products.map((product) => (
          <Col key={product._id} sm={12} md ={6} lg={4} xl={3}>
          <Product product={product}/>
          </Col>
          ))}
    </Row>
    <Paginate 
    pages={data.pages}
    page={data.page}
    keyword= {keyword ? keyword: ''}
    />
    </>
    )}
    
    </>
  ); 
}; 

export default HomeScreen;
