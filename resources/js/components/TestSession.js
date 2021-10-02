import React  from 'react';
import { useState ,useEffect  } from 'react';
import axios  from 'axios';
//import { useQuery } from "@apollo/client";
//import { GET_TODOS } from '../graphql/todo';

function Page() {
  const [count, setCount] = useState(0);

  const write_session =async function(){
    var elem = document.getElementById('param1');
    console.log("func1: " + elem.value)
    var item = {
      param1: param1.value,
    }
// console.log( item )
    const response = await axios.post(
      '/api/test_session/write', item 
    )
    var data = await response.data    
console.log(data)
  }
  const read_session=async function(){
    const response = await axios.get("/api/test_session/read")
    var data = await response.data    
console.log(data)
  }
  read_session()  
  return (
    <div className="container">
      <h3>TestSession</h3>
      <hr />
      <input type="text" name="param1" id="param1" />
      <button onClick={() => {write_session()}}>
        WriteSession
      </button> 
      <hr />     
      <button onClick={() => {read_session()}}>
        ReadSession
      </button>      

    </div>
  );
}
export default Page;
