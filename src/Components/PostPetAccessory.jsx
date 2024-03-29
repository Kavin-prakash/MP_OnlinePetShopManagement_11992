import React, { useState } from "react";
import { Button, Card, CardBody, Container, Form } from "react-bootstrap";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import PetsIcon from '@mui/icons-material/Pets';
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

const initialValues = {
  petAccesoryName: "",
  petAccessoryPrice: "",
  petAccessoryDescription: "", 
  accessoryImage: null,
};

function UploadPetAccessory() {
  const [values, setValues] = useState(initialValues);
  
  const Usenavigate = useNavigate();

  const handleInput = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setValues({
      ...values,
      accessoryImage: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await axios.post(
        "http://localhost:5066/api/OnlinePetShop/CreatePetAccessory",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Posted successfully"); // Show success toast
      console.log("Posted successfully:", response.data);
    } catch (error) {
      console.error("Post failure:", error);
      toast.error("Post failure"); // Show error toast
    }
  };

  return (
    <>
      <div className='container-nav-bar'>
        <nav className="navbar navbar-light bg-dark">
          <a className="navbar-brand" href="#" style={{ color: 'white' }}>Pet Details  <PetsIcon /></a>
        </nav>
      </div>
      <div className="petaccessory-form" style={{marginTop:'40px'}}>
        <Container>
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Accessory Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="petAccesoryName"
                    value={values.petAccesoryName}
                    onChange={handleInput}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Price:</Form.Label>
                  <Form.Control
                    type="number"
                    name="petAccessoryPrice"
                    value={values.petAccessoryPrice}
                    onChange={handleInput}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Description:</Form.Label>
                  <Form.Control
                    type="text"
                    name="petAccessoryDescription"
                    value={values.petAccessoryDescription}
                    onChange={handleInput}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Profile Image:</Form.Label>
                  <Form.Control
                    type="file"
                    name="accessoryImage"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </Form.Group>
                <Button className="btn btn-success" type="submit">Create <AddIcon/></Button>
              </Form>
            </CardBody>
          </Card>
        </Container>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />

    </>
  );
}
    
export default UploadPetAccessory;
