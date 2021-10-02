import React  from 'react';
// import { useState ,useEffect  } from 'react';
//import { Link } from 'react-router-dom';
import axios  from 'axios';

function TodosCreate(props) {
  const clickHandler= async function(){
    try{
      var name = document.getElementById('name');
      var email = document.getElementById('email');
      var password = document.getElementById('password');
      var item = {
        name: name.value,
        email: email.value,
        password: password.value,
      }
      // /users/add
      const res = await axios.post(
        '/api/users/add' , item 
      )
console.log( res.data )            
  
    } catch (error) {
      alert("Error, save item")
      console.error(error);
    }
// console.log("clickHandler: " + title.value)
    //props.history.push("/todos");
  }
  return (
  <div className="container py-2">
    <h3>User - Create</h3>
    <hr />
    <div>
      <label>Name : 
        <input type="text" className="form-control" name="name" id="name" />
      </label>
    </div>
    <hr />
    <div>
      <label>email : 
        <input type="mail" className="form-control" name="email" id="email" />
      </label>
    </div>
    <hr /> 
    <div>
      <label>password : 
        <input type="password" className="form-control" name="password" id="password" />
      </label>
    </div>
    <button onClick={() => {clickHandler()}}>
      Save
    </button>      
    <hr />
  </div>
  );
}
export default TodosCreate;
