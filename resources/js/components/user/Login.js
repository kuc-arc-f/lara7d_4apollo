import React  from 'react';
// import { useState ,useEffect  } from 'react';
import { Link } from 'react-router-dom';
import axios  from 'axios';

function TodosCreate(props) {
  const clickHandler= async function(){
    try{
      var email = document.getElementById('email');
      var password = document.getElementById('password');
      var item = {
        email: email.value,
        password: password.value,
      }
      const res = await axios.post(
        '/api/users/login' , item 
      )
// console.log( res.data )            
      if(parseInt(res.data.ret) == 1){
        props.history.push("/");
      }else{
        alert("Error, Login")
      }
  
    } catch (error) {
      alert("Error, save item")
      console.error(error);
    }
// console.log("clickHandler: " + title.value)
    //props.history.push("/todos");
  }
  return (
  <div className="container py-2">
    <h3>User - Login</h3>
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
      Login
    </button>      
    <hr />
    <Link to="/user_create" 
    className="btn btn-outline-primary ml-2">Register</Link>
  </div>
  );
}
export default TodosCreate;
