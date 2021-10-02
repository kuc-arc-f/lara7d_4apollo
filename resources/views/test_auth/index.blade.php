@extends('layouts.app_layout')
@section('title', '')

@section('content')

<div class="container" >
  <div class="row" style="margin-top: 16px;">
    <div class="col-sm-6"><h3>Test -auth</h3>
    </div>
    <div class="col-sm-6" style="text-align: right;">
    </div>
  </div>
  <div id="app"></div>    
</div>
<!-- -->
<script type="text/babel" src="/js/component/Tasks/IndexRow.js?a1" ></script>
<script type="text/babel">
 var PAGE= 1;

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '', item_count:0, paginate_disp:0 
    }
  }
  componentDidMount(){
//      this.get_items(PAGE);
  }
  get_items(page){
    axios.get("/api/apitasks/get_tasks?page="+ page ).then(res =>  {
      var data = res.data
      var arr =[];
console.log(data );
//console.log(paginate_disp );
      this.setState({
        data: data, paginate_disp: 0
      })
    })
  }    
  tabRow(){
    if(this.state.data instanceof Array){
      return this.state.data.map(function(object, index){
//console.log(object );
        return <IndexRow obj={object} key={index} />
      })
    }
  }
  render(){
    return (
    <div>
      <hr />
      <p>Icon :</p>
      <div class="icon_wrap">
        <i class="bi bi-alarm ml-2 mr-2"></i>
        <i class="bi bi-book ml-2 mr-2"></i>
        <i class="bi bi-calendar ml-2 mr-2"></i>
        <i class="bi bi-folder ml-2 mr-2"></i>
        <i class="bi bi-forward ml-2 mr-2"></i>
        <i class="bi bi-house-fill ml-2 mr-2"></i>
      </div>
      <hr />
    </div>
    )
  }
}
ReactDOM.render(<List />, document.getElementById('app'));
</script>
<style>
.icon_wrap{ font-size: 2rem;  }
/*
.icon_wrap i { margin: 10px 10px; }
*/
.p_tbl_task_name{ font-size: 1.2rem; }
.task-table td{ padding : 8px;}
.task-table  td i {font-size : 1.2rem; }
</style>

@endsection

