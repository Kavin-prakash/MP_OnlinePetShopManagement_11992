import React from 'react'
import './Adminlogin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import { NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const schema = yup.object().shape(
  {
    email: yup.string().email("**Invalid Email address").required("**Email is required"),
    password: yup.string().required("**Password is Required").min(6, "**Minmun 6 chars is Required").max(14, "**Enter upto 14 chars is ")
  }
)

const Adminlogin = ()=> {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const Usenavigate = useNavigate();

  const onSubmit = data => {
    // setIsLoading(true);

    axios.post('http://localhost:5066/api/OnlinePetShop/CheckAdmin', data)
      .then(response => {
        // Handle success
        // window.alert("Login successfull");

        console.log(response.data);
        Usenavigate('/adminpage')
      })
      .catch(error => {
        // Handle error
        // console.error('Login failed', error);

        // failerlogin();
        window.alert("User not found");

      })
      //.finally(() => setIsLoading(false)); //set loading false after completing all process of from submition
  };
  return (
    <>
      <div className='login-app'>
        <div>
        <Navbar className='navbar' bg='dark' variant='dark' fixed="top">
                        <Container>
                            <Navbar.Brand>
                                <h4><span className='nav-text'>Pet Shop Mangement <PetsOutlinedIcon /></span></h4>
                            </Navbar.Brand>
                            <Nav className="justify-content-end">
                                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                                <Navbar.Collapse id='basic-navbar-nav'>
                                     <NavItem>
                                        <NavLink className='nav-text'></NavLink>
                                     </NavItem>
                                </Navbar.Collapse>
                            </Nav>

                        </Container>
                    </Navbar>
        </div>
        <div className='login-container'>
          <div className="loginform-container">
            <div className="login-header">
              <h2 data-testid="loginheader">Login</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <a href='#' style={{ color: 'black' }} data-testid="nameicon">{<PersonIcon />}</a>
                <input data-testid="emailfield" {...register('email')} type='email' placeholder='Enter you email....'></input>
              </div>
              <p>{errors.email?.message}</p>
              <div>
                <a href='#' style={{ color: 'black' }} data-testid="passwordicon">{<KeyIcon />}</a>
                <input data-testid="passwordfield" {...register('password')} type='password' placeholder='Enter your password...'></input>
              </div>
              <p>{errors.password?.message}</p>
              <div className='button-login'>
                <button data-testid="loginbutton" className='btn btn-primary' >Login</button>
              </div>
            </form>
          </div>

        </div>

      </div>


    </>
  )
}

export default Adminlogin
