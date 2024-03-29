import React, { useEffect, useState, useContext } from 'react';
import './Viewcart.css';
import { Card, Container, Button, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { cartContext } from '../App';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BackHandIcon from '@mui/icons-material/BackHand';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';

export const Viewcart = () => {
  const { cart, setCart } = useContext(cartContext);
  const [total, setTotal] = useState(0);

 
  const removeCart = (productId) => {
    setCart(cart.filter((c) => c.id !== productId));
  };

  const [cartitems, setCartitems] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await axios.get('http://localhost:5066/api/OnlinePetShop/GetcartItems');
      setCartitems(response.data);
      console.log(response.data)
    };

    fetchServices();
  }, []);
  

  const handleDelete = (id) => {
    // Call the API to delete the accessory
    console.log(id)
    fetch(`http://localhost:5066/api/OnlinePetShop/DeleteOrder/${id}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (response.ok) {
                // If deletion is successful, update the product list by filtering out the deleted product
                setCartitems(cartitems.filter(item => item.id !== id));
               window.alert("Are are sure  you want to remove this product?"); 
                // toast.success("Record deleted successfully"); // Show success toast
            } else {
                // Handle error
                console.error('Error Remove the cart product');
                // toast.error("Error deleting record"); // Show error toast
            }
        });
};

  console.log('viewing cart', cart);
  return (
    <>
      <div>
        <Container fluid className="bg-dark fixed-top">
          <Row>
            <Col className="text-white my-4">PET ACCESSORIES</Col>
            <Col></Col>
            <Col>
              <ListGroup horizontal className="my-3 justify-content-end">
                <ListGroupItem className="nav-link bg-transparent">
                  <Link className="nav-link" to={"/home"}>
                    <BackHandIcon />
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="nav-link bg-transparent">
                  <Link className="nav-link" to={"/Cart"}>
                    <span className="cart-num" style={{ fontSize: '18px' }}>{cart.length}</span>
                    <span style={{ fontSize: '18px' }}>View <AddShoppingCartIcon /></span>
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>

      <div className='mt-5 pt-5'>
        <h3 className='mt-2'>Cart Products:</h3>
        <Container className='cart-container mt-4'>
          {cartitems.map((product) => (
            <Card style={{ width: '18rem' }} key={product.id}>
              <Card.Img className='card-img' variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.accessoryName}</Card.Title>
                <Card.Text>
                  Price: ₹{product.accessoryPrice}
                </Card.Text>
                <Card.Text>
                  Description:{product.accessoryDescription}
                </Card.Text>
                <Button style={{float:'right'}} className='btn btn-danger' onClick={()=>handleDelete(product.id)}>Remove<RemoveShoppingCartOutlinedIcon/></Button>
              </Card.Body>
            </Card>  
          ))}
        </Container>
        <div>
        {/* <h1>Total Amount: ₹{total.toFixed(2)}</h1> */}
        </div>
      </div>
    </>
  );
};



// import React, { useEffect, useState, useContext } from 'react';
// import './Viewcart.css';
// import { Card, Container, Button, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
// import { cartContext } from '../App';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import AddHomeIcon from '@mui/icons-material/AddHome';
// import BackHandIcon from '@mui/icons-material/BackHand';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';

// export const Viewcart = () => {
//   const { cart, setCart } = useContext(cartContext);
//   const [cartitems, setCartitems] = useState([]);
//   console.log(cartitems)

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const response = await axios.get('http://localhost:5066/api/OnlinePetShop/GetUserCartItems/1'); 
//         setCartitems(response.data);
        
//       } catch (error) {
//         console.error('Error fetching cart items:', error);
//       }
//     };

//     fetchCartItems();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5066/api/OnlinePetShop/DeleteOrder/${id}`);
//       setCartitems(cartitems.filter(item => item.id !== id));
//       window.alert("Are you sure you want to remove this product?");
//     } catch (error) {
//       console.error('Error removing cart item:', error);
//     }
//   };

//   return (
//     <>
//       <div>
//         <Container fluid className="bg-dark fixed-top">
//           <Row>
//             <Col className="text-white my-4">PET ACCESSORIES</Col>
//             <Col></Col>
//             <Col>
//               <ListGroup horizontal className="my-3 justify-content-end">
//                 <ListGroupItem className="nav-link bg-transparent">
//                   <Link className="nav-link" to={"/home"}>
//                     <BackHandIcon />
//                   </Link>
//                 </ListGroupItem>
//                 <ListGroupItem className="nav-link bg-transparent">
//                   <Link className="nav-link" to={"/Cart"}>
//                     <span className="cart-num" style={{ fontSize: '18px' }}>{cart.length}</span>
//                     <span style={{ fontSize: '18px' }}>View <AddShoppingCartIcon /></span>
//                   </Link>
//                 </ListGroupItem>
//               </ListGroup>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       <div className='mt-5 pt-5'>
//         <h3 className='mt-2'>Cart Products:</h3>
//         <Container className='cart-container mt-4'>
//           {cartitems.map((product) => (
//             <Card style={{ width: '18rem' }} key={product.id}>
//               <Card.Img className='card-img' variant="top" src={product.imageUrl} />
//               <Card.Body>
//                 <Card.Title>{product.accessoryName}</Card.Title>
//                 <Card.Text>
//                   Price: ₹{product.accessoryPrice}
//                 </Card.Text>
//                 <Card.Text>
//                   Description: {product.accessoryDescription}
//                 </Card.Text>
//                 <Button style={{float:'right'}} className='btn btn-danger' onClick={() => handleDelete(product.id)}>Remove<RemoveShoppingCartOutlinedIcon/></Button>
//               </Card.Body>
//             </Card>
//           ))}
//         </Container>
//       </div>
//     </>
//   );
// };
