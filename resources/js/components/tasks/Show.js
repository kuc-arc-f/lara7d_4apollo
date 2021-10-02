import React  from 'react';
import client from "../../apollo-client";
import Task from '../../graphql/task'

export default class TaskShow extends React.Component {
  constructor(props){
    super(props)
    this.id = Number(props.match.params.id)
    this.state = { id: 0, title: ""};
  }
  async componentDidMount(){
//console.log(this.id);
    const data = await client.query({
      query: Task.get_query_task(this.id),
      fetchPolicy: "network-only"
    });
//console.log(data.data.task);
    const item = data.data.task;    
    this.setState({id: item.id, title: item.title }) 
  }
  render(){
    return (
    <div className="container py-2">
      <h3>Tasks- Show</h3>
      <hr />
      ID : {this.state.id}
      <hr />
      Title : {this.state.title}
    </div>
    );
  }
  }
  //export default ArticleShow;
