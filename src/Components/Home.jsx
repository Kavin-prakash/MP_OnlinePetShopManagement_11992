import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import axios from "axios";
// import { Product } from "./Petproducts";
import { Product } from "./Petproducts";
import './Home.css';
import { useContext } from "react";
import { cartContext } from "../App";
import { Header } from './Homeheader';
import Cookies from 'js-cookie'; // Import js-cookie


export const Home = () => {


  const { cart, setCart } = useContext(cartContext);
  const [product, setProduct] = useState([]);


  

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5066/api/OnlinePetShop/GetAllPetAccessoryy");
        setProduct(response.data);
        console.log(response.data);
        Cookies.set('product', response.data[0].id); // Set cookie with user email

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (

    <>
    <Header cart={cart}/>
      <Container className="product-container">


        {product.map((product) => (

          <Product key={product.id} product={product} cart={cart} setCart={setCart} />


        ))}
      </Container>
    </>
  );
};

export default Home;