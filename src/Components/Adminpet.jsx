import React from 'react'
import './Adminpet.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useEffect } from 'react';
import axios from 'axios';
import { CardHeader,Row,Card,Col, CardBody, Button } from 'react-bootstrap';
import PetsIcon from '@mui/icons-material/Pets';
import Inventory2Icon from '@mui/icons-material/Inventory2';


const Petmain = () => {
    const [theme, setTheme] = useState('light');

    function handleTogggledarkTheme() {
        setTheme(theme === 'light' ? 'dark' : 'dark')
    }

    function handleToggglelightTheme() {
        setTheme(theme === 'light' ? 'light' : 'light')
    }


    const [appointment, setAppointment] = useState([]);


    useEffect(() => {
        const fetchServices = async () => {
            const response = await axios.get('http://localhost:5066/api/OnlinePetShop/Get');
            setAppointment(response.data);
            console.log(response.data);

        };

        fetchServices();
    }, []);
    return (
        <>
            
                <div className='dashboards' data-theme={theme}>
                    <Row>
                   
                        <Navbar className='navbar nav-head ' fixed="top" style={{ position: 'fixed' }}>
                            <Container  className='adminnav align-items-center mb-4'>
                                <Navbar.Brand>
                                    <h4><span className='nav-text' style={{ color: 'black' }} >Pet Shop Mangement <PetsOutlinedIcon /></span></h4>
                                </Navbar.Brand>
                                <Nav className="justify-content-end me-3">
                                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                                    <Navbar.Collapse id='basic-navbar-nav'>
                                        <Nav.Item>
                                            <Nav.Link to='/' className='nav-sidetext' style={{ color: 'black' }} ><span>Petdetails</span></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className='nav-sidetext' style={{ color: 'black' }}>PetAccessoryDetails</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>

                                            <Nav.Link className='nav-sidetext' style={{ color: 'black' }} onClick={handleTogggledarkTheme}><NightsStayOutlinedIcon /></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link ><span className='nav-sidetext' style={{ color: 'black' }} onClick={handleToggglelightTheme} ><LightModeOutlinedIcon /></span></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link><span className='nav-sidetext'  style={{ color: 'black' }}>Admin Panel</span></Nav.Link>
                                        </Nav.Item>
                                    </Navbar.Collapse>
                                </Nav>

                            </Container>
                        </Navbar>
                        </Row>

                    
                    <Row className='adminbody' >
                        <Col>
                        <Card className='cardheader shadow p-3 mb-5  rounded align-items-center justify-content-center mt-4 border-warning'>
                            <CardBody >
                                <Link  to="/adminpetdetails"><Button className='btn btn-warning' variant='text'>Pet Details <PetsIcon/></Button></Link>
                                
                            </CardBody>
                        </Card></Col>
                        <Col>
                        <Card className='cardheader shadow p-3 mb-5  rounded align-items-center justify-content-center mt-4 border-warning'>
                            <CardBody >
                            <Button variant='text'>Booking Details of the User</Button>
                            </CardBody>
                        </Card></Col>
                        <Col>
                        <Card className='cardheader shadow p-3 mb-5  rounded align-items-center justify-content-center mt-4 border-warning'>
                            <CardBody >
                                <Link to='/adminpetaccessorydetails'><Button  className='btn btn-warning' variant='text'>Pet Accessories <Inventory2Icon/></Button></Link>
                            </CardBody>
                        </Card>
                        </Col>
                        
                    </Row>
                    
                    <Row className='mt-5'></Row>
                    <Card className='border-warning'>
                    <div className='User-booking-details align-items-center justify-content-center '>
                        <CardHeader className='text-center'>
                        <h2>Booking Details of the Users</h2>
                        </CardHeader>
                        <div className='container-fluid mt-3'>
                            <table class="table" >

                                <thead>
                                    <tr>
                                        <th scope="col">UserName</th>
                                        <th scope="col">UserPhone</th>
                                        <th scope="col">PetName</th>
                                        <th scope="col">PetCategory</th>
                                        <th scope='col'>BookingDate</th>
                                        <th scope='col'>BookingTime</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {appointment.map(e => (
                                        <tr key={e.appointmentId}>
                                            <td>{e.users.firstName}</td>
                                            <td>{e.users.phoneNumber}</td>
                                            <td>{e.petDetails.petName}</td>
                                            <td>{e.petDetails.petCategory}</td>
                                            <td>{e.date}</td>
                                            <td>{e.time}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                    </Card>

                </div>

            

        </>
    )
}

export default Petmain
