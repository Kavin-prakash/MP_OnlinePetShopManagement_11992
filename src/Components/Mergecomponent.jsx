import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Outlet } from "react-router-dom";
import { useState } from 'react';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import './Mergecomponent.css'
import book from "../Images/pexels-photo-1108099.jpeg"
import petaccessory from "../Images/pettoys.jpg"
import { Link } from 'react-router-dom';
import { CardHeader, Row, Card, Col, CardBody, Button } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Mergecomponent = () => {

    const [theme, setTheme] = useState('light');

    function handleTogggledarkTheme() {
        setTheme(theme === 'light' ? 'dark' : 'dark')
    }

    function handleToggglelightTheme() {
        setTheme(theme === 'light' ? 'light' : 'light')
    }

    return (
        <>
            <div className='dashboard' data-theme={theme}>
                <div className="navbarcontainer" >
                    <Row>

                        <Navbar className='navbar nav-head ' fixed="top" style={{ position: 'fixed' }}>
                            <Container className='adminnav align-items-center mb-4'>
                                <Navbar.Brand>
                                    <h4><span className='nav-text' style={{ color: 'black' }} >Pet Shop Mangement <PetsOutlinedIcon /></span></h4>
                                </Navbar.Brand>
                                <Nav className="justify-content-end me-3">
                                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                                    <Navbar.Collapse id='basic-navbar-nav'>
                                        <Nav.Item>

                                            <Nav.Link className='nav-sidetext' style={{ color: 'black' }} onClick={handleTogggledarkTheme}><NightsStayOutlinedIcon /></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link ><span className='nav-sidetext' style={{ color: 'black' }} onClick={handleToggglelightTheme} ><LightModeOutlinedIcon /></span></Nav.Link>
                                        </Nav.Item>
                                    </Navbar.Collapse>
                                </Nav>

                            </Container>
                        </Navbar>
                    </Row>

                </div>
                <div className='container-fluid  dashboard-card-container merge-component '>
                    <div class="card" style={{ width: '18rem' }}>
                        <img class="card-img-top " src={book} alt="Card image cap" />
                        <div class="card-body">
                            <p class="card-text">View and Book a your Favorite Pet.Click the below button </p>
                            <Link to="/userpetdetails"> <button className='btn btn-warning'>Pet Details</button></Link>
                        </div>
                    </div>

                    <div class="card" style={{ width: '18rem' }}>
                        <img class="card-img-top" src={petaccessory} alt="Card image cap" />
                        <div class="card-body">
                            <p class="card-text">View and Buy  Pet Accessories</p>
                            <Link to="/home"><button className='btn btn-warning'>Pet Accessory Details</button></Link>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Mergecomponent
