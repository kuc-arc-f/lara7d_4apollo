import React  from 'react';
import { useState ,useEffect  } from 'react';
import client from "../apollo-client";
import { gql } from "@apollo/client";

function Page() {
  const [count, setCount] = useState(0);
  const getItems =async function(){
    const data = await client.query({
      query: gql`
      query {
        tasks {
          id
          title
        }
      }
      `,
      fetchPolicy: "network-only"
    });
console.log(data);
  }
  getItems();
  const func1 =async function(){
    var name1 = document.getElementById('name1');
    console.log("func1: " + name1.value)
    var item = {
      name: "name1",
    }
console.log( item )
  }
  return (
    <div className="container">
      <h3>Test2</h3>
      <hr />
      <p>You clicked {count} times</p>
      <button onClick={() => {setCount(count + 1)}}>
        Click me
      </button>
      <hr />
      <input type="text" name="name1" id="name1" />
      <button onClick={() => {func1()}}>
        Test2
      </button>
      <hr />
      <a href="/test/test">[  Test-link ]</a>
      <hr />
      <a href="/#/todos">[  Test-2 ]</a>
            
    </div>
  );
}
export default Page;
