import React from 'react';
import './Mainpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Outlet, Link } from "react-router-dom";
// import DarkModeIcon from '@mui/icons-material/DarkMode';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import dog from '../Images/bg-9.jpg'
import { Home } from '@mui/icons-material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const Mainpage = () => {

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
                
                <div className="navbarcontainers" >
                    <Row>
                    <Navbar className='navbar' fixed="top">
                        <Container>
                            <Navbar.Brand>
                                <h4><span className='nav-text'>Pet Shop Mangement <PetsOutlinedIcon /></span></h4>
                            </Navbar.Brand>
                            <Nav className="justify-content-end">
                                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                                <Navbar.Collapse id='basic-navbar-nav'>
                                    <Nav.Item>
                                        <Nav.Link href="/adminlogin"><span className='nav-text' style={{ color: 'black' }}><AdminPanelSettingsOutlinedIcon />Admin</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="register"><span className='nav-text' style={{ color: 'black' }}><PeopleOutlinedIcon />SignUp</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="login"><span className='nav-text' style={{ color: 'black' }}><PeopleOutlinedIcon />SignIn</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className='nav-text' style={{ color: 'black' }} onClick={handleTogggledarkTheme}><NightsStayOutlinedIcon /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link ><span className='nav-text' style={{ color: 'black' }} onClick={handleToggglelightTheme} ><LightModeOutlinedIcon /></span></Nav.Link>
                                    </Nav.Item>
                                </Navbar.Collapse>
                            </Nav>

                        </Container>
                    </Navbar>
                    </Row>

                </div>
                <div className='body-containers'>
                    <Container>
                        <Row className='HomeBackground'>
                            {/* <Col xs={12} md={4} className='bgImg'>

                            </Col> */}
                            <Col xs={12} md={4} className='bgHeading'>
                                <h3>Paws and Claws, Smiles and More</h3>
                                {/* <img style={{ height: 350, width: 350 }} src={dog}></img> */}
                            </Col>
                        </Row>
                        <Row>
                            {/* <marquee behavior="scroll" direction="right" scrollamount="5">Welcom to Online Pet shop <PetsOutlinedIcon/> </marquee> */}
                            {/* <marquee behavior="scroll" direction="right" scrollamount="10">Pick you Favorite Pet<FavoriteBorderIcon/></marquee> */}
                        </Row>
                        <Row>
                        <marquee  behavior="scroll" direction="right" scrollamount="8">Hurry up!! Exculsive offer are waiting for you<LocalOfferIcon/> </marquee>

                        </Row>
    

                    </Container>
                    

                </div>
                
            </div>

            
        </>
    )
}

export default Mainpage


