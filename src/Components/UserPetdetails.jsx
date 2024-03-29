// import React from 'react'
// import axios from 'axios';
// import { Navbar, Nav, Form, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { useState,useEffect } from 'react';
// import Cookies from 'js-cookie';
// const UserPetdetails = () => {
//     const [posts, setPosts] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [selectedCategory, setSelectedCategory] = useState('');
//     const navigate = useNavigate();
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5066/api/OnlinePetShop/GetAllPet');
//                 setPosts(response.data);
//                 // Cookies.set('petname', response.data[0].id); // Set cookie with user email
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     const handleSearchChange = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     const handleCategoryChange = (eventKey, event) => {
//         setSelectedCategory(eventKey);
//     };


//     const filteredPosts = posts.filter(post => {
//         return (
//             (selectedCategory ? post.category === selectedCategory : true) &&
//             (post.petname.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                 post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                 post.description.toLowerCase().includes(searchTerm.toLowerCase()))
//         );
//     });
//     return (
//         <>
//             <div>


//                 <Navbar expand="lg" className='navigationbar'>
//                     <Navbar.Brand href="#home" style={{ color: 'black' }}>Online Pet Shop</Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <Nav className="mr-auto">
//                             <Nav.Link href="#home" style={{ color: 'black' }}>Home</Nav.Link>
//                             <Nav.Link href="#link" style={{ color: 'black' }}>Link</Nav.Link>
//                         </Nav>
//                         <Form inline>
//                             <FormControl
//                                 type="text"
//                                 placeholder="Search for pets......"
//                                 value={searchTerm}
//                                 onChange={handleSearchChange}
//                                 className="mr-sm-2"
//                             />
//                         </Form>
//                     </Navbar.Collapse>
//                 </Navbar>
//                 <div className="App">
//                     <DropdownButton
//                         alinRight
//                         title="Filter by Category"
//                         id="dropdown-menu-align-right"
//                         onSelect={handleCategoryChange}
//                     >
//                         <Dropdown.Item eventKey="">All Categories</Dropdown.Item>
//                         {/* Assuming you have a list of categories */}
//                         {['Cat', 'Dog', 'Bird'].map((category) => (
//                             <Dropdown.Item key={category} eventKey={category}>{category}</Dropdown.Item>
//                         ))}
//                     </DropdownButton>
//                     <div className="App">
//                         <div className="d-flex flex-wrap justify-content-evenly" style={{ columnGap: '160px' }}>
//                             {filteredPosts.map((post) => (
//                                 <div className="card m-2" style={{ width: '18rem' }} key={post.id}>
//                                     <img src={post.imageUrl} className="card-img-top" alt={post.petname} />
//                                     <div className="card-body">
//                                         <h5 className="card-title">Pet Name: {post.petname}</h5>
//                                         <h6 className="card-subtitle mb-2 text-muted">Pet Category: {post.category}</h6>
//                                         <p className="card-text">Description: {post.description}</p>
//                                         <div className="card-footer">
//                                             <small className="text-muted">Price: {post.price}</small>
//                                         </div>
//                                         <Button onClick={() => { Cookies.set("petname", post.id); navigate('/bookingdetails') }}>Book Appointment</Button>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>


//             </div>
//         </>
//     )
// }

// export default UserPetdetails

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar, Nav, Form, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Userpetdetails.css'
const UserPetdetails = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5066/api/OnlinePetShop/GetAllPet');
                setPosts(response.data);
                Cookies.set('ss', response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (eventKey, event) => {
        setSelectedCategory(eventKey);
    };

    const addToCart = (item) => {
        const updatedCart = [...cart, item];
        setCart(updatedCart);
    };

    const filteredPosts = posts.filter(post => {
        return (
            (selectedCategory ? post.category === selectedCategory : true) &&
            (post.petname.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.description.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    return (
        <>
            <Navbar expand="lg" className='navigationbar' >
                <Navbar.Brand href="#home" style={{ color: 'black' }}>Online Pet Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" style={{ color: 'black' }}>Home</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="Search for pets......"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="mr-sm-2"
                        />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <div className="App-container">
                <DropdownButton
                    alinRight
                    title="Filter by Category"
                    id="dropdown-menu-align-right"
                    onSelect={handleCategoryChange}
                >
                    <Dropdown.Item eventKey="">All Categories</Dropdown.Item>
                    {/* Assuming you have a list of categories */}
                    {['Cat', 'Dog', 'Bird'].map((category) => (
                        <Dropdown.Item key={category} eventKey={category}>{category}</Dropdown.Item>
                    ))}
                </DropdownButton>
                <div className="App">
                    <div className="d-flex flex-wrap justify-content-evenly  container " style={{ columnGap: '120px', rowGap: '80px' }}>
                        {filteredPosts.map((post) => (
                            <div className="card m-2 cardclass " style={{ width: '18rem' }} key={post.id}>
                                <img src={post.imageUrl} className="card-img-top imageradius " alt={post.petname} />
                                <div className="card-body">
                                    <h5 className="card-title">Pet Name: {post.petname}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Pet Category: {post.category}</h6>
                                    <p className="card-text">Description: {post.description}</p>
                                    <div className="card-footer">
                                        <small className="text-muted">Price: {post.price}</small>
                                    </div>
                                    <Button onClick={() => {
                                        addToCart(post);
                                        Cookies.set("petname", post.id);
                                        navigate('/bookingdetails')
                                    }}>Book Appointment</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default UserPetdetails;

