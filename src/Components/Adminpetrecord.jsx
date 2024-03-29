import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar, Nav, Form, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Petgetrecord.css';
import { toast, ToastContainer } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast
import { Link, useNavigate } from 'react-router-dom';



const Adminpetgetrecord = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5066/api/OnlinePetShop/GetAllPet');
                setPosts(response.data);
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

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5066/api/OnlinePetShop/DeletePetDetails/${id}`);
            if (response.status === 204) {
                onDeleteSuccess(id);
                window.alert("Are yor sure want to delete this record");
                toast.success("Pet record deleted successfully"); // Show success toast
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                alert('Pet accessory not found.');
            } else {
                alert('An error occurred while deleting the pet accessory.');
            }
        }
    };

    const onDeleteSuccess = (id) => {
        setPosts(posts.filter(post => post.id !== id));
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
            {/* Navbar */}
            <Navbar expand="lg" className='navigationbar'>
                <Navbar.Brand href="#home" style={{ color: 'black' }}>Online Pet Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" style={{ color: 'black' }}>Home</Nav.Link>
                        <Nav.Link href="#link" style={{ color: 'black' }}>Link</Nav.Link>
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

            {/* Dropdown and Search Form */}
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
                {/* Dropdown Items */}
            </DropdownButton>
            {/* Displaying Posts */}
            <div className="d-flex flex-wrap justify-content-evenly" style={{ columnGap: '160px' }}>
                {filteredPosts.map((post) => (
                    <div className="card m-2" style={{ width: '18rem' }} key={post.id}>
                        <img src={post.imageUrl} className="card-img-top" alt={post.petname} />
                        <div className="card-body">
                            <h5 className="card-title">Pet Name: {post.petname}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Pet Category: {post.category}</h6>
                            <p className="card-text">Description: {post.description}</p>
                            <div className="card-footer">
                                <small className="text-muted">Price: {post.price}</small>
                            </div>
                            {/* <Button onClick={()=>{Cookies.set("petname",post.id);navigate('/bookingdetails')}}>Book Appointment</Button> */}
                        </div>
                        <Button variant="danger" onClick={() => handleDelete(post.id)}>
                            Delete
                        </Button>
                    </div>
                ))}
            </div>
            {/* Toast Container */}
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
        </>
    );
};

export default Adminpetgetrecord;
