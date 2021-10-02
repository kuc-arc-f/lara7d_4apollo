@extends('layouts.app_layout')

@section('title', "")

@section('content')
<div id="app"></div>
<!-- -->
<script type="text/babel">
var ID = {{$task_id}};

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', content: ''}
  }
  componentDidMount(){
    this.get_item(ID);
  }
  handleChangeTitle(e){
    this.setState({title: e.target.value})
  }
  handleChangeContent(e){
    this.setState({content: e.target.value})
  }
  handleClick(){
    console.log("#-handleClick")
    this.update_item(ID)
  }
  handleClickDelete(){
    console.log("#-handleClick")
    this.delete_item(ID)
  }
  async delete_item(id){
    try {
      var item = {
        id: id,
      }
      const res = await axios.post(
        '/api/tasks/delete', item 
      )
console.log( res.data )
      window.location.href="/tasks"
    } catch (error) {
      alert("Error, save item")
      console.error(error);
    }
  }   
  async update_item(id){
    try {
      var item = {
        id: id,
        title: this.state.title,
        content: this.state.content,
      }
      const res = await axios.post(
        '/api/tasks/update', item 
      )
console.log( res.data )
      window.location.href="/tasks"
    } catch (error) {
      alert("Error, save item")
      console.error(error);
    }
  }   
  async get_item(id){
    try {
      const res = await axios.get('/api/tasks/show?id=' + id)
console.log( res.data )
      var data = res.data;
      this.setState({ 
        title: data.title, 
        content: data.content
      });       
    } catch (error) {
      alert("Error, save item")
      console.error(error);
    }
  }  
  render() {
    return (
    <div className="container">
      <a href="/tasks" className="btn btn-outline-primary mt-2">Back</a>
      <hr className="mt-2 mb-2" />
      <h1 className="mt-2">編集 - Task</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Title:</label>
            <input type="text" className="form-control"
            value={this.state.title}
            onChange={this.handleChangeTitle.bind(this)}/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Content:</label>
            <input type="text" className="form-control"
            value={this.state.content}
              onChange={this.handleChangeContent.bind(this)}/>
          </div>
        </div>
      </div><br />
      <div className="form-group">
        <button className="btn btn-primary"
          onClick={this.handleClick.bind(this)}>Save
        </button>
      </div>
      <hr />
      <div className="form-group ">
        <button className="btn btn-danger"
          onClick={this.handleClickDelete.bind(this)}>Delete
        </button>
      </div>
      <hr />
    
    </div>
    )
  }  

}
ReactDOM.render(<Page />, document.getElementById('app'));
</script>

@endsection
