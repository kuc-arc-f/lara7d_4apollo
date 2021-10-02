
@extends('layouts.app_layout')
@section('title', '新規作成')

@section('content')
<div id="app"></div>
<!-- -->
<script type="text/babel">
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', content: ''}
  }
  handleChangeTitle(e){
    this.setState({title: e.target.value})
  }
  handleChangeContent(e){
    this.setState({content: e.target.value})
  }
  handleClick(){
    console.log("#-handleClick")
    this.add_item()
  }
  async add_item(){
    try {
      var item = {
        title: this.state.title,
        content: this.state.content,
      }
      const res = await axios.post(
        '/api/tasks/new', item 
      )
//console.log( res.data )
      window.location.href="/tasks"
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
      <h1 className="mt-2">Create - Task</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Title:</label>
            <input type="text" className="form-control"
            onChange={this.handleChangeTitle.bind(this)}/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Content:</label>
            <input type="text" className="form-control"
              onChange={this.handleChangeContent.bind(this)}/>
          </div>
        </div>
      </div><br />
      <div className="form-group">
        <button className="btn btn-primary"
         onClick={this.handleClick.bind(this)}>Create
        </button>
      </div>
    
    </div>
    )
  }  

}
ReactDOM.render(<Page />, document.getElementById('app'));
</script>
@endsection
