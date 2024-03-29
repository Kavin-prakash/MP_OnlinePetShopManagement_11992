import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Adminpetdetails.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Row, Col, Card, CardBody, Button, CardHeader } from 'react-bootstrap';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const Adminaccessory = () => {

    const [appointment, setAppointment] = useState([]);


    useEffect(() => {
        const fetchServices = async () => {
            const response = await axios.get('http://localhost:5066/api/OnlinePetShop/GetAllPetAccessoryy');
            setAppointment(response.data);
            console.log(response.data);
        };

        fetchServices();
    }, []);


    return (
        <div>
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

                                    <Nav.Link className='nav-sidetext' style={{ color: 'black' }} ></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link ><span className='nav-sidetext' style={{ color: 'black' }}></span></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link><span className='nav-sidetext' style={{ color: 'black' }}>Admin Panel</span></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link><span className='nav-sidetext' style={{ color: 'black' }}>PetAccessoryPage</span></Nav.Link>
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
                            <Link to='/postaccessory'><Button className='btn btn-warning' variant='text'>Create <AddBoxIcon/></Button></Link>

                        </CardBody>
                    </Card></Col>
                <Col>
                    <Card className='cardheader shadow p-3 mb-5  rounded align-items-center justify-content-center mt-4 border-warning'>
                        <CardBody >
                        <Link variant="text" to='/deleteaccessory'><Button  className='btn btn-danger'  variant='text'>Delete<DeleteIcon/></Button></Link>

                            
                        </CardBody>
                    </Card></Col>
                <Col>
                    <Card className='cardheader shadow p-3 mb-5  rounded align-items-center justify-content-center mt-4 border-warning'>
                        <CardBody >
                            <Link to='/putaccessorydetail'><Button  className='btn btn-warning'  variant='text'>Update<EditIcon/></Button></Link>

                        </CardBody>
                    </Card>
                </Col>
            </Row >
             <Card className='border-warning'> 
            <div className='User-booking-details'>

                <b> <h3>Details of the Pets Accessory</h3></b>
                <div className='container-fluid'>
                    <table class="table table-striped" >

                        <thead>
                            <tr>
                                <th scope="col">AccessoryId</th>
                                <th scope="col">AccessoryName</th>
                                <th scope="col">AccessoryPrice</th>
                                <th scope="col">AccessoryDescription</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointment.map(e => (
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.petaccessoryname}</td>
                                    <td>{e.petaccessoryprice}</td>
                                    <td>{e.petaccessorydescription}</td>
                           <td> <Link to={`/putaccessorydetail/${e.id}`}><Button  className='btn btn-warning'  variant='text'>Update<EditIcon/></Button></Link></td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
            </Card>

        </div>
    )
}

export default Adminaccessory;
