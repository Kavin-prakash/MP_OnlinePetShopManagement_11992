// import React from 'react'

// const Deletepetaccess = () => {
//     return (
//         <>
//         <div>

//         </div>
//         </>
//     )
// }

// export default Deletepetaccess


import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const Deletepetaccess = ({ id, onDeleteSuccess }) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/api/petaccessory/${id}`);
      if (response.status === 204) {
        // Successfully deleted
        onDeleteSuccess(id); // This will update the parent component's state
        alert('Pet accessory deleted successfully!');
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert('Pet accessory not found.');
      } else {
        alert('An error occurred while deleting the pet accessory.');
      }
    }
  };

  return (
    <Button variant="danger" onClick={handleDelete}>
      Delete
    </Button>
  );
};

export default Deletepetaccess;
