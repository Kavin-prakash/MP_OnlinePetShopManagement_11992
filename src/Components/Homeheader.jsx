import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./Homeheader.css";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddHomeIcon from '@mui/icons-material/AddHome';


export const Header = ({cart}) => {
  return (
    <>
      <Container fluid className="bg-dark fixed-top">
        <Row>
          <Col className="text-white my-4">PET ACCESSORIES</Col>
          <Col></Col>
          <Col>
            <ListGroup horizontal className="my-3 justify-content-end">
              <ListGroupItem className=" nav-link bg-transparent">
                <Link className="nav-link" to={"/dashboard"}>
                  <AddHomeIcon/>
                </Link>
              </ListGroupItem>
              <ListGroupItem className="nav-link bg-transparent">
                <Link className="nav-link" to={"/Cart"}>
                <span className="cart-num" style={{fontSize:'18px'}}>{cart.length}</span> 
                  <span style={{fontSize:'18px'}}>View <AddShoppingCartIcon/></span>
                </Link>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};
