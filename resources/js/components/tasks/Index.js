import React  from 'react';
import { Link } from 'react-router-dom';
import { gql } from "@apollo/client";;
import client from '../../apollo-client'
import { GET_TODOS } from '../../graphql/todo';
import LibAuth from '../../lib/LibAuth'
import LibFlash from '../../lib/LibFlash';
import IndexRow from './IndexRow';
import FlashBox from '../element/FlashBox'

class TasksIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, items: [], flash:{}
    };
  }
  async componentDidMount(){
    var f = await LibFlash.get_flash()
    //console.log(f) 
    const data = await client.query({
      query: gql`
      query {
        tasks {
          id
          title
        }
      }
      ` 
      ,fetchPolicy: "network-only"
    }) 
console.log(data.data) 
    this.setState({
      items : data.data.tasks, flash: f
    })
  }  
  render() {
    return (
    <div className="container py-4">
      <FlashBox flash={this.state.flash}></FlashBox>
      <h3>Tasks - index</h3>
      <Link to={`/task_create`} >
          <button>Create</button>
      </Link>      
      <hr />
      { this.state.items.map((item ,index) => (
          <IndexRow obj={item} key={index} />
        ))        
      }
      
    </div>
    );
  }
}
export default TasksIndex;