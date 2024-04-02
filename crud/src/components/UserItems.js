import React, {useState} from 'react'
import {Form, Button, Modal} from 'react-bootstrap';


export default function UserItems(user) {

    const [ShowModal, setShowModal] = useState(false);

    const[name, setName] = useState(user.user.name)
    const[phoneNumber, setPhoneNumber] = useState(user.user.phoneNumber)
    const[location, setLocation] = useState(user.user.location);



   const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber( e.target.value );
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };


    const handleModalState = () => {
        setShowModal(!ShowModal)
    };

    const handleEdit = () => {
        let edit = {
            name : name,
            phoneNumber : phoneNumber,
            location : location}
        
        let newDetails={...user.user.user, ...edit}
        console.log(user, "chale")
        console.log(edit, "edit")

            user.editUser(user.user.id, newDetails)

        handleModalState()

        }


  return (
    <div>
        <div>
        <h3>{user.user.name}</h3>
        <h3>{user.user.phoneNumber}</h3>
        <h3>{user.user.location}</h3>

        <Button onClick={handleModalState} variant='primary'>Edit</Button>
        <Button  onClick={() => user.deleteUser(user.user.id)} variant='danger'>Delete</Button>

        <Modal show={ShowModal} onHide={handleModalState} >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form >
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control value={name} onChange={handleNameChange} type="text" placeholder="Enter your name" />

            <Form.Label>Phone Number</Form.Label>
            <Form.Control value={phoneNumber} onChange={handlePhoneNumberChange} type="text" placeholder="Enter your Phone Number" />

            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control value={location} onChange={handleLocationChange} placeholder="Enter your Location" />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleModalState} variant="secondary" >
            Close
          </Button>
          <Button onClick={handleEdit}  variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        <br/>
      </div>
    </div>
  )
}
