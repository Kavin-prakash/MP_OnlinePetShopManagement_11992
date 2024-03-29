// import React, { useContext } from "react";
// import "./Petproduct.css";
// import { Card, Button } from "react-bootstrap";
// import { cartContext } from "../App";



// export const Product = ({ product }) => {



//   const { cart, setCart } = useContext(cartContext);


//   const addCart = (id) => {
//     console.log(id)
//     setCart([...cart, product]);
//   };

//   const removeCart = (productId) => {
//     setCart(cart.filter((c) => c.id !== productId));
//   };

//   return (
//     <>
//       <div className="petproducts-container">
//         <Card style={{ width: "18rem" }} className="mt-4 card-container" >
//           <Card.Img className="card-img" variant="top" src={product.imageUrl} />
//           <Card.Body>
//             <p>Accessory: {product.petaccessoryname}</p>
//             <p>Price: {product.petaccessoryprice}</p>
//             <p>Description: {product.petaccessorydescription}</p> 
//             {/* <Button onClick={()=>{addCart(product.id)}}>Add to Cart</Button> */}

//             {cart.some((p) => p.id === product.id) ? (
//               <Button
//                 className="btn btn-danger"
//                 variant="primary"
//                 onClick={() => removeCart(product.id)}
//               >
//                 Remove from Cart
//               </Button>
//             ) : (
//               <Button
//                 className="btn btn-primary"
//                 variant="primary"
//                 onClick={addCart}
//               >
//                 Add to Cart
//               </Button>
//             )}
//           </Card.Body>
//         </Card>
//       </div>
//     </>
//   );
// };


// ---------------------------------//


///corrected react code the product list //////





import React, { useContext, useState } from "react";
import "./Petproduct.css";
import { Card, Button } from "react-bootstrap";
import { cartContext } from "../App";
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast
import { ToastContainer } from "react-toastify";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Product = ({ product }) => {

  const { cart, setCart } = useContext(cartContext);
  const [item, setItem] = useState();


  const addCart = async (id) => {

    console.log(id);
    const ProductId = id.toString();

    const orderDto = {
      userId: Cookies.get('userid'),
      // productId: Cookies.get('product',product.id)
      // productId: id.toString()
      productId: ProductId
    }
    console.log(orderDto)
    try {
      const response = await axios.post('http://localhost:5066/api/OnlinePetShop/CreateOrder', orderDto);
      // setSuccessMessage(response.data);
      // setCart([...cart, product]);
      // window.alert("Product Added to the cart successfully")
      toast.success("Cart Added  successfully"); // Show success toast
      console.log(error.response.data);
    } catch (error) {

      if (error.response) {
        toast.error("Cart added failure"); // Show error toast
        console.log(error.response.data);
      } else {
        // setErrorMessage('Something went wrong. Please try again later.');
        // toast.error("Something went wrong")
      }
    }
  };


  return (
    <>
      <div className="petproducts-container">
        <Card style={{ width: "18rem" }} className="mt-4 card-container">
          <Card.Img className="card-img" variant="top" src={product.imageUrl} />
          <Card.Body>
            <p>Accessory: {product.petaccessoryname}</p>
            <p>Price: {product.petaccessoryprice}</p>
            <p>Description: {product.petaccessorydescription}</p>
              <Button onClick={() => addCart(product.id)}>Add<ShoppingCartIcon /></Button>
          </Card.Body>
        </Card>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />

      </div>

    </>
  );
};


/////////////////////////-------------------------------------////



// import React, { useContext, useState, useEffect } from "react";
// import "./Petproduct.css";
// import { Card, Button } from "react-bootstrap";
// import { cartContext } from "../App";
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { toast } from 'react-toastify'; 
// import 'react-toastify/dist/ReactToastify.css'; 
// import { ToastContainer } from "react-toastify";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// export const Product = ({ product }) => {
//   const { cart, setCart } = useContext(cartContext);
//   const [inCart, setInCart] = useState(false);

//   useEffect(() => {
//     // Check if product is already in the cart when component mounts
//     if (cart.find(item => item.productId === product.id)) {
//       setInCart(true);
//     } else {
//       setInCart(false);
//     }
//   }, [cart, product]);

//   const handleDelete = async (id) => {
//     try {
//       const response = await axios.delete(`http://localhost:5066/api/OnlinePetShop/DeleteOrder/${id}`);
//       if (response.status === 200) {
//         setCart(cart.filter(item => item.productId !== id));
//         setInCart(false);
//         toast.success("Product removed from cart successfully");
//       } else {
//         console.error('Error removing product from cart');
//         toast.error("Error removing product from cart");
//       }
//     } catch (error) {
//       console.error('Error removing product from cart:', error);
//       toast.error("Error removing product from cart");
//     }
//   };

//   const addCart = async (id) => {
//     const ProductId = id.toString();

//     const orderDto = {
//       userId: Cookies.get('userid'),
//       productId: ProductId
//     }

//     try {
//       const response = await axios.post('http://localhost:5066/api/OnlinePetShop/CreateOrder', orderDto);
//       if (response.status === 200) {
//         setCart([...cart, { productId: ProductId }]);
//         setInCart(true);
//         toast.success("Product added to cart successfully");
//       } else {
//         toast.error("Error adding product to cart");
//       }
//     } catch (error) {
//       console.error('Error adding product to cart:', error);
//       toast.error("Error adding product to cart");
//     }
//   };

//   return (
//     <>
//       <div className="petproducts-container">
//         <Card style={{ width: "18rem" }} className="mt-4 card-container">
//           <Card.Img className="card-img" variant="top" src={product.imageUrl} />
//           <Card.Body>
//             <p>Accessory: {product.petaccessoryname}</p>
//             <p>Price: {product.petaccessoryprice}</p>
//             <p>Description: {product.petaccessorydescription}</p>
//             {inCart ? (
//               <Button onClick={() => handleDelete(product.id)}>Remove from Cart</Button>
//             ) : (
//               <Button onClick={() => addCart(product.id)}>Add to Cart<ShoppingCartIcon /></Button>
//             )}
//           </Card.Body>
//         </Card>
//         <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
//       </div>
//     </>
//   );
// };
