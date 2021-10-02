import React  from 'react';
// import { useState ,useEffect  } from 'react';
import { Link } from 'react-router-dom';
import axios  from 'axios';

function Page(props) {

  const proc_logout = async function(){
    try{
//      const response = await axios.get("/api/users/logout")
      const response = await axios.post(
        '/api/users/logout', {} 
      )
      var data = await response.data    
  console.log(data )      
    } catch (error) {
      alert("Error, save item")
      console.error(error);
    }
//    props.history.push("/");
  }
  proc_logout();
  return (
  <div className="container py-2">
    <h3>Logout</h3>
  </div>
  );
}
export default Page;
