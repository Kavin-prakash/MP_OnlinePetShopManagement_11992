// import React from 'react'
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import { Row, Col, Card, CardBody, Button, CardHeader } from 'react-bootstrap';
// import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Deleteaccessory.css'

// const Deleteaccessory = () => {



//     const [product, setProduct] = useState([]);

//     useEffect(() => {

//         const fetchData = async () => {

//             try {
//                 const response = await axios.get("http://localhost:5066/api/OnlinePetShop/GetAllPetAccessoryy");
//                 setProduct(response.data);
//                 console.log(response.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };


//         fetchData();
//     }, []);
//     return (
//         <div>
//             <Row>
//                 <Navbar className='navbar nav-head ' fixed="top" style={{ position: 'fixed' }}>
//                     <Container className='adminnav align-items-center mb-4'>
//                         <Navbar.Brand>
//                             <h4><span className='nav-text' style={{ color: 'black' }} >Pet Shop Mangement <PetsOutlinedIcon /></span></h4>
//                         </Navbar.Brand>
//                         <Nav className="justify-content-end me-3">
//                             <Navbar.Toggle aria-controls='basic-navbar-nav' />
//                             <Navbar.Collapse id='basic-navbar-nav'>
//                                 <Nav.Item>

//                                     <Nav.Link className='nav-sidetext' style={{ color: 'black' }} ></Nav.Link>
//                                 </Nav.Item>
//                                 <Nav.Item>
//                                     <Nav.Link ><span className='nav-sidetext' style={{ color: 'black' }}></span></Nav.Link>
//                                 </Nav.Item>
//                                 <Nav.Item>
//                                     <Nav.Link><span className='nav-sidetext' style={{ color: 'black' }}>Admin Panel</span></Nav.Link>
//                                 </Nav.Item>
//                                 <Nav.Item>
//                                     <Nav.Link><span className='nav-sidetext' style={{ color: 'black' }}>DeletePannel</span></Nav.Link>
//                                 </Nav.Item>
//                             </Navbar.Collapse>
//                         </Nav>

//                     </Container>
//                 </Navbar>
//             </Row>
//             <div className='deleteaccessory'>
//                 {product.map((product) => (
//                     <div class="card" key={product.id} style={{ width: '18rem' }}>
//                         <img src={product.imageUrl} class="card-img-top" alt="..." />
//                         <div class="card-body">
//                             <h5 class="card-title">Accessory:{product.petaccessoryname}</h5>
//                             <p class="card-text">Price:{product.petaccessoryprice}</p>
//                             <p className='card-text'>Description:{product.petaccessorydescription}</p>
//                         </div>
//                     </div>
//                 ))}

//             </div>

//         </div>
//     )
// }

// export default Deleteaccessory


// import React, { useState, useEffect } from 'react';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import { Row, Card, Button, Modal } from 'react-bootstrap';
// import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
// import axios from 'axios';
// import './Deleteaccessory.css';

// const Deleteaccessory = () => {
//     const [product, setProduct] = useState([]);
//     const [showConfirmation, setShowConfirmation] = useState(false);
//     const [deleteId, setDeleteId] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get("http://localhost:5066/api/OnlinePetShop/GetAllPetAccessoryy");
//                 setProduct(response.data);
//                 console.log(response.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         fetchData();
//     }, []);

//     const handleDelete = (id) => {
//         setDeleteId(id);
//         setShowConfirmation(true);
//     };

//     const confirmDelete = () => {
//         // Call the API to delete the accessory
//         fetch(`api/accessories/${deleteId}`, {
//             method: 'DELETE',
//         })
//         .then(response => {
//             if (response.ok) {
//                 // If deletion is successful, update the product list by filtering out the deleted product
//                 setProduct(product.filter(item => item.id !== deleteId));
//                 setShowConfirmation(false);
//             } else {
//                 // Handle error
//                 console.error('Error deleting accessory');
//             }
//         });
//     };

//     return (
//         <div>
//             <Row>
//                 <Navbar className='navbar nav-head ' fixed="top" style={{ position: 'fixed' }}>
//                     <Container className='adminnav align-items-center mb-4'>
//                         <Navbar.Brand>
//                             <h4><span className='nav-text' style={{ color: 'black' }} >Pet Shop Management <PetsOutlinedIcon /></span></h4>
//                         </Navbar.Brand>
//                         <Nav className="justify-content-end me-3">
//                             <Navbar.Toggle aria-controls='basic-navbar-nav' />
//                             <Navbar.Collapse id='basic-navbar-nav'>
//                                 <Nav.Item>
//                                     <Nav.Link className='nav-sidetext' style={{ color: 'black' }} ></Nav.Link>
//                                 </Nav.Item>
//                                 <Nav.Item>
//                                     <Nav.Link ><span className='nav-sidetext' style={{ color: 'black' }}></span></Nav.Link>
//                                 </Nav.Item>
//                                 <Nav.Item>
//                                     <Nav.Link><span className='nav-sidetext' style={{ color: 'black' }}>Admin Panel</span></Nav.Link>
//                                 </Nav.Item>
//                                 <Nav.Item>
//                                     <Nav.Link><span className='nav-sidetext' style={{ color: 'black' }}>Delete Panel</span></Nav.Link>
//                                 </Nav.Item>
//                             </Navbar.Collapse>
//                         </Nav>
//                     </Container>
//                 </Navbar>
//             </Row>
//             <div className='deleteaccessory'>
//                 {product.map((product) => (
//                     <Card key={product.id} style={{ width: '18rem' }}>
//                         <Card.Img variant="top" src={product.imageUrl} />
//                         <Card.Body>
//                             <Card.Title>Accessory: {product.petaccessoryname}</Card.Title>
//                             <Card.Text>Price: {product.petaccessoryprice}</Card.Text>
//                             <Card.Text>Description: {product.petaccessorydescription}</Card.Text>
//                             <Button variant="danger" onClick={() => handleDelete(product.id)}>Delete</Button>
//                         </Card.Body>
//                     </Card>
//                 ))}
//             </div>
//             <Modal show={showConfirmation} onHide={() => setShowConfirmation(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Confirmation</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>Are you sure you want to delete this record?</Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowConfirmation(false)}>
//                         Cancel
//                     </Button>
//                     <Button variant="danger" onClick={confirmDelete}>
//                         Delete
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     )
// }

// export default Deleteaccessory;

import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Row, Card, Button } from 'react-bootstrap';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast
import './Deleteaccessory.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Deleteaccessory = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5066/api/OnlinePetShop/GetAllPetAccessoryy");
                setProduct(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleDelete = (id) => {
        // Call the API to delete the accessory
        fetch(`http://localhost:5066/api/OnlinePetShop/DeletePetAccessory/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    // If deletion is successful, update the product list by filtering out the deleted product
                    setProduct(product.filter(item => item.id !== id));
                   window.alert("Are are sure  you want to remove this product?"); 
                    toast.success("Record deleted successfully"); // Show success toast
                } else {
                    // Handle error
                    console.error('Error deleting accessory');
                    toast.error("Error deleting record"); // Show error toast
                }
            });
    };

    return (
        <div className='container'>
            <Row>
                <Navbar className='navbar nav-head ' fixed="top" style={{ position: 'fixed' }}>
                    <Container className='adminnav align-items-center mb-4'>
                        <Navbar.Brand>
                            <h4><span className='nav-text' style={{ color: 'black' }} >Pet Shop Management <PetsOutlinedIcon /></span></h4>
                        </Navbar.Brand>
                        <Nav className="justify-content-end me-3">
                            <Navbar.Toggle aria-controls='basic-navbar-nav' />
                            <Navbar.Collapse id='basic-navbar-nav'>
                                <Nav.Item>
                                    <Nav.Link className='nav-sidetext' style={{ color: 'black' }} ></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link ><span className='nav-sidetext' style={{ color: 'black' }}></span></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link><span className='nav-sidetext' style={{ color: 'black' }}>Admin Panel</span></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link><span className='nav-sidetext' style={{ color: 'black' }}>Delete Panel</span></Nav.Link>
                                </Nav.Item>
                            </Navbar.Collapse>
                        </Nav>
                    </Container>
                </Navbar>
            </Row>
            <div className='deleteaccessory container'>
                {product.map((product) => (
                    <Card key={product.id} style={{ width: '18rem' }} className='putcard'>
                        <Card.Img variant="top" src={product.imageUrl} />
                        <Card.Body>
                            <Card.Title>Accessory: {product.petaccessoryname}</Card.Title>
                            <Card.Text>Price: {product.petaccessoryprice}</Card.Text>
                            <Card.Text>Description: {product.petaccessorydescription}</Card.Text>
                            <Button variant="danger" onClick={() => handleDelete(product.id)}>Delete <DeleteForeverIcon/></Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            <ToastContainer /> {/* ToastContainer component for displaying toasts */}
        </div>
    )
}

export default Deleteaccessory;
