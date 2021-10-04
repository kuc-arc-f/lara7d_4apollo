import React  from 'react';
import { Link } from 'react-router-dom';
import { gql } from "@apollo/client";
import client from '../../apollo-client'
import LibFlash from '../../lib/LibFlash';
import LibCookie from '../../lib/LibCookie'
import LibConfig from '../../lib/LibConfig'
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
    const key = LibConfig.getConfig().COOKIE_KEY_UID;
    if(LibCookie.get_cookie(key) === null){
      this.props.history.push("/login");
    }    
    const f = await LibFlash.get_flash()
    //console.log(f) 
    const data = await client.query({
      query: gql`
      query {
        notes {
          id
          title
          content
          noteTag{
            id
            name
          }
        }
      }      
      ` 
      ,fetchPolicy: "network-only"
    }) 
console.log(data.data) 
    this.setState({
      items : data.data.notes, flash: f
    })
  }  
  render() {
    return (
    <div className="container py-4">
      <FlashBox flash={this.state.flash}></FlashBox>
      <h3>Notes - index</h3>
      <Link to={`/note_create`} >
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
