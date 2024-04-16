import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserForms from "./components/UserForms";
import UserList from "./components/UserList";
import{v4 as uuid} from 'uuid';


function App() {
  const [users, setUsers] = useState([
    {name: 'Davis', phoneNumber: "0208256745", location:"East-Legon", id: uuid() },
    {name: 'Jason', phoneNumber: "0556783457", location:"Ashongman", id: uuid()  },
    {name: 'Ian', phoneNumber: "0243678946", location:"Achimota", id: uuid()  },
    {name: 'Aaron', phoneNumber: "0567899734", location:"Spintex", id: uuid()  }
  ]);

  const addNewUser = (newUser) => {
   setUsers ([...users, newUser]);
  }

  const deleteUser = (userId) => {
    let filteredArr = users.filter((user) => {
      return user.id !== userId;
    });
  
    setUsers(filteredArr);
  };

  const editUser = (userId, newUserDetails) => {
    let arr = users.map((users) => {
      if (users.id === userId){
        return newUserDetails;
      } else{
        return users;
      }
    });

    setUsers(arr)
  }

  console.log(users);
  return (

    <Container>
      <Row>
      <Col md={6}>
      <UserForms addUser= {addNewUser} /> 
       </Col>  

    
                 
       <Col md={6}>
            <UserList users={users} deleteUser={deleteUser} editUser={editUser}/>
       </Col>  
        
      </Row>
    </Container>
 

   
  );
}

export default App;
