import React from 'react'
import UserItems from './UserItems'

export default function UserList(users) {
    console.log(users)
    
  return (
    

    <div key={users.id}>
        
       {  users.users.map((user)=>{
        
       return (
        <div>
              <UserItems user={user} deleteUser={users.deleteUser} editUser={users.editUser}/>
        </div>
        
      
      
       )
       })}
    </div>
)}
