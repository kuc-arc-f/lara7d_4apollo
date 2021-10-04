import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

//import { Link } from 'react-router-dom';
import { gql } from "@apollo/client";
import client from '../../apollo-client'
import LibFlash from '../../lib/LibFlash';
import LibCookie from '../../lib/LibCookie'
import LibConfig from '../../lib/LibConfig'
import IndexRow from './IndexRow';
import FlashBox from '../element/FlashBox'

export class CommentList extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };  
  render() {
    let commentNodes = this.props.data.map(function (comment, index) {
      return <div key={index}>{comment.comment}</div>;
    });
    return (
      <div id="project-comments" className="commentList">
        <ul>{commentNodes}</ul>
      </div>
    );
  }
}
//
class TasksIndex extends React.Component {
  constructor(props) {
    super(props);
    this.limit = 10;
    this.state = {
      count: 0, items: [], flash:{}, data:[], pageCount: 1
    };
  }
  async componentDidMount(){
    const key = LibConfig.getConfig().COOKIE_KEY_UID;
    if(LibCookie.get_cookie(key) === null){
      this.props.history.push("/login");
    }    
    const f = await LibFlash.get_flash()
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
//console.log(data.data.tasks.length) 
    const len = data.data.tasks.length;
    this.setState({
      items : data.data.tasks, flash: f, data: data.data.tasks,
      pageCount: Math.ceil(len / this.limit),
    })
    this.getPageItems(0);
  }
  /* nページのデータ取得 */
  getPageItems(selected){
    let ret = [];
    let start = selected * this.limit;
    let offset = start + this.limit;
//console.log(selected, start,  offset); 
    const d = this.state.items.slice(start, offset);
    this.setState({data : d});
    return ret;
  }
  handlePageClick = (data) => {
//console.log(data); 
    this.getPageItems(data.selected);
  };
  render() {
    return (
    <div className="container py-4">
      <FlashBox flash={this.state.flash}></FlashBox>
      <h3>TaskPages - index</h3>
      <hr />
      { this.state.data.map((item ,index) => (
          <IndexRow obj={item} key={index} />
        ))
      }
      <div className="commentBox text-center">
      <CommentList data={this.state.data} />
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          previousClassName='page-item btn btn-outline-primary'
          nextClassName='page-item btn btn-outline-primary'
          containerClassName={'react-pagination'}
          pageClassName='page-item btn btn-outline-primary'
          activeClassName={'active'}
        />
      </div> 
    </div>
    );
  }
}
export default TasksIndex;
