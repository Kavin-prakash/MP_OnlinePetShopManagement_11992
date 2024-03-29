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


const Adminpetdetails = () => {

    const [appointment, setAppointment] = useState([]);


    useEffect(() => {
        const fetchServices = async () => {
            const response = await axios.get('http://localhost:5066/api/OnlinePetShop/GetAllPet');
            setAppointment(response.data);
            console.log(response.data);

        };

        fetchServices();
    }, []);
    return (
        <div>
            {/* <div className='container-nav-bar'>
                <nav class="navbar navbar-light bg-dark">
                    <a class="navbar-brand" href="#" style={{ color: 'white' }}>Pet Details  <PetsIcon /></a>
                </nav>
            </div> */}
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
                                    <Nav.Link to="/adminpage"><span className='nav-sidetext' style={{ color: 'black' }}>Admin</span></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link><span className='nav-sidetext' style={{ color: 'black' }}>PetDetailsPage</span></Nav.Link>
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
                            <Link to='/postpets'><Button className='btn btn-warning' variant='text'>Create <AddBoxIcon/></Button></Link>
                            
                        </CardBody>
                    </Card></Col>
                <Col>
                    <Card className='cardheader shadow p-3 mb-5  rounded align-items-center justify-content-center mt-4 border-warning'>
                        <CardBody >
                            <Link to='/adminpetrecords'><Button className='btn btn-danger' variant='text'>Delete<DeleteIcon/></Button></Link>
                            
                        </CardBody>
                    </Card></Col>
                <Col>
                    {/* <Card className='cardheader shadow p-3 mb-5  rounded align-items-center justify-content-center mt-4 border-warning'>
                        <CardBody >
                        <Link to='/putpetdetail'><Button className='btn btn-warning' variant='text'>Update <EditIcon/></Button></Link>
                    
                        </CardBody>
                    </Card> */}
                </Col>
            </Row >

            <Card className='border-warning'>
                <Row className='border-warning'>
                    <CardHeader className='text-center'>
                        <h2>PET DETAILS</h2>
                    </CardHeader>
                    <table class="table table-striped" >

                        <thead>
                            <tr>
                                <th scope="col">PetID</th>
                                <th scope="col">PetName</th>
                                <th scope="col">PetCategory</th>
                                <th scope='col'>PetBreed</th>
                                <th scope="col">Price</th>
                                <th scope="col">Description</th>
                                <th scope='col'>Stock</th>

                            </tr>
                        </thead>
                        <tbody>
                            {appointment.map(e => (
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.petname}</td>
                                    <td>{e.category}</td>
                                    <td>{e.breed}</td>
                                    <td>{e.price}</td>
                                    <td>{e.description}</td>
                                    <td>{e.stock}</td>
                           <td> <Link to={`/putpetdetail/${e.id}`}><Button  className='btn btn-warning'  variant='text'>Update<EditIcon/></Button></Link></td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Row>
            </Card>
            <div className='User-booking-details'>
                <div className='container-fluid'>

                </div>

            </div>

        </div>
    )
}

export default Adminpetdetails

{/* <div className='crud-operations'>
               
               <Link to='/postpets'><button className='btn btn-primary'>Create</button></Link>
               <Link to='/putpetdetail'><button className='btn btn-warning'>Update</button></Link>
               <Link to='/adminpetrecords'> <button className='btn btn-danger'>Delete</button></Link>
            </div>
             */}