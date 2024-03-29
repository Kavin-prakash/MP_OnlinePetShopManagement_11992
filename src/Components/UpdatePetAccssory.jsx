import React, { useState } from "react";
import { Button, Card, CardBody, Container, Form } from "react-bootstrap";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import PetsIcon from '@mui/icons-material/Pets';
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast
import { ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";



const initialValues = {
  id: "",
  petaccessoryname: "",
  petaccessoryprice: "",
  petaccessorydescription: "",
  accessoryImage: null,
};

function UpdatePetAccessory() {
  const [values, setValues] = useState(initialValues);
  
  const usenavigate = useNavigate();

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

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5066/api/OnlinePetShop/GetPetAccessoryById/" + id);
        setValues(response.data)
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (key !== "id") {
        formData.append(key, value);
      }
    });

    try {
      const response = await axios.put(
        `http://localhost:5066/api/OnlinePetShop/UpdatePetAccessory/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Updated successfully"); // Show success toast
      window.alert("Updated Successfully!");
      window.location.reload();

      // usenavigate('/adminpetaccessorydetails')
      console.log("Updated successfully:", response.data);
    } catch (error) {
      console.error("Update failure:", error);
      toast.error("Update failure"); // Show error toast
    }
  };







  return (
    <>
      <div className='container-nav-bar'>
        <nav className="navbar navbar-light bg-dark">
          <a className="navbar-brand" href="#" style={{ color: 'white' }}>Pet Details  <PetsIcon /></a>
        </nav>
      </div>
      <Container>
        <Card>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>ID:</Form.Label>
                <Form.Control
                  type="text"
                  name="id"
                  value={values.id}

                  onChange={handleInput}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Accessory Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="petaccessoryname"
                  value={values.petaccessoryname}
                  onChange={handleInput}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Price:</Form.Label>
                <Form.Control
                  type="number"
                  name="petaccessoryprice"
                  value={values.petaccessoryprice}
                  onChange={handleInput}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  type="text"
                  name="petaccessorydescription"
                  value={values.petaccessorydescription}
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
              <Button type="submit">Update</Button>
            </Form>
          </CardBody>
        </Card>
      </Container>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />

    </>
  );
}

export default UpdatePetAccessory;


