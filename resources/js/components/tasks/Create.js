import React  from 'react';
//import { useMutation } from '@apollo/client';
import client from '../../apollo-client'
import Task from '../../graphql/task'
import LibAuth from '../../lib/LibAuth';

export default class TaskCreate extends React.Component {
  async clickHandler(){
    try{
      console.log("clickHandler");
      const title = document.getElementById('title');
      const result = await client.mutate({
        mutation: Task.get_gql_add(title.value)
      })
    } catch (e) {
      console.error(e);
      alert("Error, save item")
    }    
  }
  render(){
    return (
      <div className="container py-2">
        <h3>Tasks - Create</h3>
        <hr />
        <input type="text" name="title" id="title" />
        <button onClick={() => {this.clickHandler()}}>
          Add
        </button>      
        <hr />
      </div>
      );
  }
}
