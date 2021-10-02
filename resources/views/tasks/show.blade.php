@extends('layouts.app_layout')

@section('title', "" )

@section('content')
<div id="app"></div>
<!-- -->
<script type="text/babel">
var task_id= "{{$task_id}}";

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '', 
        content: '' ,
    }
    this.id = props.id
console.log(this.id)
  }
  componentDidMount(){
      this.get_item( this.id )        
  }
  async get_item(id){
    var task = {
        id: id,
    };         
    const res = await axios.get('/api/tasks/show?id=' + id)
    var dat = res.data
console.log( dat )
    this.setState({ 
      title: dat.title, content: dat.content,
    });
  }    
  render(){
    return (
    <div class="container">
      <h1>Show</h1>
      <hr />
      <h1>title : {this.state.title}</h1>
      <div>{this.state.content}</div>
    </div>
    )
  }
}
ReactDOM.render(<Show id={task_id}  />, document.getElementById('app'));
</script>

@endsection
