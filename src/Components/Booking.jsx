import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Row, Col, Card, CardBody, Button, CardHeader } from 'react-bootstrap';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import './Booking.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast
import { ToastContainer } from "react-toastify";


function BookingForm() {
  const [appointment, setAppointment] = useState({
    userid: Cookies.get('userid'),
    petid: Cookies.get('petname'),
    getDate: '',
    getTime: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const usenavigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!appointment.getDate || !appointment.getTime) {
      toast.error("Please select both date and time.");
      return;
    }

    setSubmitting(true);
    try {
      console.log(appointment);
      const response = await axios.post('http://localhost:5066/api/OnlinePetShop/PostAppointment', appointment);
      if (response.status === 200) {
        console.log('Booking successful');

        window.alert("Booked  Successfully!");
        // usenavigate('/dashboard')
        // toast.success("Booking successfully"); // Show success toast
        
        usenavigate('/userpetdetails')

        // Handle success case
      } else {
        console.error('Booking failed');
        // Handle error case
      }
    } catch (error) {
      console.error('Error submitting form', error);
      // toast.error("Booking failure"); // Show error toast

    } finally{
      setSubmitting(false);
    }
  };

  return (
    <>
      <Row>
        <Navbar className='navbar nav-head ' fixed="top" style={{ position: 'fixed' }}>
          <Container className='adminnav align-items-center mb-4'>
            <Navbar.Brand>
              <h4><span data-testid="navheader" className='nav-text' style={{ color: 'black' }} >Pet Shop Mangement <PetsOutlinedIcon /></span></h4>
            </Navbar.Brand>
            <Nav className="justify-content-end me-3">
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav.Item>

                  <Nav.Link className='nav-sidetext' style={{ color: 'black' }} ></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link to="/adminpage"><span className='nav-sidetext' style={{ color: 'black' }}></span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link><span className='nav-sidetext' style={{ color: 'black' }}></span></Nav.Link>
                </Nav.Item>

              </Navbar.Collapse>
            </Nav>

          </Container>
        </Navbar>
      </Row>
      
      <Container className='bookingcontainer'>
        <Row>
          <h4 data-testid='bookinghead'>Book Date <CalendarMonthIcon /> and Time<AccessTimeIcon />:</h4>
        </Row>
        <form onSubmit={handleSubmit} className="container mt-5 " >
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="getDate"
              value={appointment.getDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]} // Set minimum date to today
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              className="form-control"
              id="time"
              name="getTime"
              value={appointment.getTime}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Book Appointment</button>
        </form>

      </Container>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />


    </>
  );
}

export default BookingForm;
