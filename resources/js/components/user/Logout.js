import React  from 'react';
import axios  from 'axios';

function Page() {
  const proc_logout = async function(){
    try{
      const response = await axios.post(
        '/api/users/logout', {} 
      )
      const data = await response.data    
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
