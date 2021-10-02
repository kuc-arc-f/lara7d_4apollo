@extends('layouts.app_layout')
@section('title', '')
@section('content')
<div class="container" style="margin-top: 16px;">
  <div class="row">
    <div class="col-sm-6"><h3>Tasks - test</h3>
    </div>
    <div class="col-sm-6" style="text-align: right;">
    </div>
  </div>
  <div id="app"></div>    
</div>
<!-- -->
<script type="text/babel">
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '', content: '', count: 1,
    }
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
console.log( "count=", this.state.count )  
      var item = {
        title: "test-post-" + String(this.state.count ),
        content: "content-" + String(this.state.count ),
        type: 1,
        radio_1: 1,
        check_1: "[]",
        date_1: '',        
      }
      // '/api/tasks/new'   
      //         '/api/books/create', item 
      this.setState({count: this.state.count + 1 }) 
      const res = await axios.post(
        '/api/tasks/new', item 
      )
      /*
      */
console.log( item )
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
