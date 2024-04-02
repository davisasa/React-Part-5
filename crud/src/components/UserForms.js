// // import React, { Component } from 'react'
// import React, {useState} from 'react';
// import {Container, Form, Button} from 'react-bootstrap';


// class UserForms extends Component {
//   constructor() {
//     super()

//     this.state = {name: "", email: ""}
//   }

//   handleNameChange = (e) => {
//     this.setState({name : e.target.value})
//   }

//   handleEmailChange = (e) => {
//     this.setState({email : e.target.value})
//   }

//   handleSumbmit = (e) => {
//     e.preventDefault();
//   }

//   render() {
//     return (
//           <Container>
//             <h1> User Form</h1>
//                 <Form onSubmit={this.handleSumbit}>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control value={this.state.name} onChange={this.handleNameChange} type="Name" placeholder="Enter your name" />
//                 <Form.Text className="text-muted">
//                     We'll never share your email with anyone else.
//                 </Form.Text>
//                 </Form.Group>
        
//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control value={this.state.email} onChange={this.handleEmailChange} type="email" placeholder="Enter your Email" />
//                 </Form.Group>
                
//                 <Button variant="primary" type="submit">
//                 Submit
//                 </Button>
//             </Form>

//             <h1> User Form</h1>
//                  <Form onSubmit={handleSubmit}>
//                  <Form.Group className="mb-3" >
//                  <Form.Label>Name</Form.Label>
//                  <Form.Control value={name} onChange={handleNameChange} type="Name" placeholder="Enter your name" />

//                  <Form.Label>Phone Number</Form.Label>
//                  <Form.Control value={phonenumber} onChange={handlePhoneNumberChange } type="Name" placeholder="Enter your Phone Number" />

//                  <Form.Text className="text-muted">
//                      We'll never share your email with anyone else.
//                  </Form.Text>
//                  </Form.Group>
        
//                  <Form.Label>Location</Form.Label>
//                  <Form.Control value={location} onChange={handleLocationChange}  placeholder="Enter your Location" />
                 
                
//                  <Button variant="primary" type="submit">
//                  Submit
//                  </Button>
//              </Form>
//           </Container>
//     )
//   }
// }

// function UserForms(props) {
//     const [name, setName] = useState("");
//     const [phonenumber, setPhonenumber] = useState("");
//     const [location, setLocation] = useState("");


//     const handleNameChange = (e) =>{
//         setName(e.target.value)
//     }

//     const handlePhoneNumberChange = (e) =>{
//         setPhonenumber(e.target.value)
//     }

//     const handleLocationChange = (e) =>{
//         setLocation(e.target.value)
//     }

//     const handleSubmit = (e) =>{
//         e.preventDefault();
          

//         let newUser = {
//             name: name,
//             phonenumber: phonenumber,
//             location: location,
//             id: 12,
//         };

//         props.addUser(newUser);
//     };


//   return (
    

//     <Container>
//              <h1> User Form</h1>
//                  <Form onSubmit={handleSubmit}>
//                  <Form.Group className="mb-3" >
//                  <Form.Label>Name</Form.Label>
//                  <Form.Control value={name} onChange={handleNameChange} type="Name" placeholder="Enter your name" />

//                  <Form.Label>Phone Number</Form.Label>
//                  <Form.Control value={phonenumber} onChange={handlePhoneNumberChange } type="Name" placeholder="Enter your Phone Number" />

//                  <Form.Text className="text-muted">
//                      We'll never share your email with anyone else.
//                  </Form.Text>
//                  </Form.Group>
        
//                  <Form.Label>Location</Form.Label>
//                  <Form.Control value={location} onChange={handleLocationChange}  placeholder="Enter your Location" />
                 
                
//                  <Button variant="primary" type="submit">
//                  Submit
//                  </Button>
//              </Form>
//            </Container>
           
//   )
// }




// export default UserForms;


import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import {v4 as uuid} from "uuid";

class UserForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phoneNumber: '',
      location: ''
    };
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handlePhoneNumberChange = (e) => {
    this.setState({ phoneNumber: e.target.value });
  };

  handleLocationChange = (e) => {
    this.setState({ location: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, phoneNumber, location } = this.state;

    let newUser = {
      name: name,
      phoneNumber: phoneNumber,
      location: location,
      id: uuid() ,
    };

    this.props.addUser(newUser);

    //  Reset form fields after submission
    this.setState({ name: '', phoneNumber: '', location: '' });
  };

  render() {
    const { name, phoneNumber, location } = this.state;
    return (
      <Container>
        <h1>User Form</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control value={name} onChange={this.handleNameChange} type="text" placeholder="Enter your name" />

            <Form.Label>Phone Number</Form.Label>
            <Form.Control value={phoneNumber} onChange={this.handlePhoneNumberChange} type="text" placeholder="Enter your Phone Number" />

            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control value={location} onChange={this.handleLocationChange} placeholder="Enter your Location" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default UserForms;
