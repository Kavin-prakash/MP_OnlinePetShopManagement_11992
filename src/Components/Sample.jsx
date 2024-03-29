// import React from 'react';
// import './Sample.css';
// import {
//     CDBSidebar,
//     CDBSidebarContent,
//     CDBSidebarFooter,
//     CDBSidebarHeader,
//     CDBSidebarMenu,
//     CDBSidebarMenuItem,
// } from 'cdbreact';
// import { NavLink } from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
// import { Button, NavItem, Row, Col, Card,Table } from 'react-bootstrap';
// import { Link } from 'react-router-dom';


// import { useState,useEffect } from 'react';
// import axios from 'axios';



// const Sample = () => {
//     const [appointment, setAppointment] = useState([]);


//     useEffect(() => {
//         const fetchServices = async () => {
//             const response = await axios.get('http://localhost:5066/api/OnlinePetShop/Get');
//             setAppointment(response.data);
//             console.log(response.data);

//         };

//         fetchServices();
//     }, []);
//     return (
//         <>
//             <Row>
//                 <Col md={4} xs={4}>
//                     <div
//                         style={{
//                             display: "flex",
//                             height: "100vh",
//                             overflow: "scroll initial",
//                         }}
//                         className="side-nav"
//                     >
//                         <CDBSidebar textColor="#000000" backgroundColor="#b3c7f7">
//                             <CDBSidebarHeader
//                                 prefix={<i className="fa fa-bars fa-large"></i>}
//                                 className="text"
//                             >
//                                 <Link
//                                     to=''
//                                     className="text-decoration-none"
//                                 >
//                                     <span>Home</span>
//                                 </Link>
//                                 <a
//                                     href="/"
//                                     className="text-decoration-none"
//                                     style={{ color: "inherit" }}
//                                 ></a>
//                             </CDBSidebarHeader>
//                             <CDBSidebarContent className="sidebar-content">
//                                 <CDBSidebarMenu>
//                                     <NavLink
//                                         exact
//                                         to=''
//                                         activeClassName="activeClicked"
//                                     >
//                                         <CDBSidebarMenuItem icon="dog">
//                                             Apply for Leave
//                                         </CDBSidebarMenuItem>
//                                     </NavLink>
//                                     <NavLink exact to="/" activeClassName="activeClicked">
//                                         <CDBSidebarMenuItem icon="cat">
//                                             Apply for Permission
//                                         </CDBSidebarMenuItem>
//                                     </NavLink>
//                                     <NavLink exact to="/" activeClassName="activeClicked">
//                                         <CDBSidebarMenuItem icon="user">
//                                             Apply for OnDuty
//                                         </CDBSidebarMenuItem>
//                                     </NavLink>
//                                     <NavLink exact to="/" activeClassName="activeClicked">
//                                         <CDBSidebarMenuItem icon="chart-line">
//                                             View Status
//                                         </CDBSidebarMenuItem>
//                                     </NavLink>
//                                 </CDBSidebarMenu>
//                             </CDBSidebarContent>
//                         </CDBSidebar>
//                     </div>
//                 </Col>
//                 <Col md={8} xs={8}>


//                     <Container className="leave-container">
//                         <Card>
//                             <Card.Header>
//                                 <h1>User Booking Details</h1>
//                             </Card.Header>
//                             <Card.Body>
//                             <Table striped bordered hover variant="dark">
//       <thead>
//         <tr>
//           <th>UserName</th>
//           <th>PhoneNumber</th>
//           <th>UserEmail</th>
//           <th>PetName</th>
//           <th>PetCategpry</th>
//           <th>BookingDate</th>
//           <th>BookingTime</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td>@mdo</td>
//         </tr>
        
//       </tbody>
//     </Table>

//                                 <Table striped hover >

//                                     <thead>
//                                         <tr>
                                            
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {appointment.map(e => (
//                                             <tr key={e.appointmentId}>
//                                                 <td>{e.users.firstName}</td>
//                                                 <td>{e.users.phoneNumber}</td>
//                                                 <td>{e.petDetails.petName}</td>
//                                                 <td>{e.petDetails.petCategory}</td>
//                                                 <td>{e.date}</td>
//                                                 <td>{e.time}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </Table>
//                             </Card.Body>




//                         </Card>
//                     </Container>
//                 </Col>
//             </Row>
//         </>
//     );
// };

// export default Sample;