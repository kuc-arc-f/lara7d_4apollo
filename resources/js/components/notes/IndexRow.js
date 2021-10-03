import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//
class IndexRow extends Component {
  constructor(props) {
    super(props);
  }  
  render() {
//    const obj = this.props.obj;
    return (
    <div>
      <Link to={`/note_show/${this.props.obj.id}`} >
          <h3>{this.props.obj.title}</h3>
      </Link>      
      <Link to={`/note_edit/${this.props.obj.id}`}
        className="btn btn-sm btn-outline-primary mr-2">Edit
      </Link>                  
      ID : {this.props.obj.id}
      <hr />
    </div>
    )
  }
}

export default IndexRow;