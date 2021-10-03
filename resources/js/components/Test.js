import React  from 'react';
import client from "../apollo-client";
//import Task from '../../graphql/task'
import { gql } from "@apollo/client";

function Page() {
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
    const name1 = document.getElementById('name1');
    console.log("func1: " + name1.value)
    const item = {
      name: "name1",
    }
console.log( item )
  }
  return (
    <div className="container">
      <h3>Test2</h3>
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
