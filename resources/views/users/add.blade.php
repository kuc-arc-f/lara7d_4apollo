
@extends('layouts.app_layout')
@section('title', 'register')

@section('content')
<div id="app"></div>
<!-- -->
<script type="text/babel" src="/js/LibUser.js?a1" ></script>
<script type="text/babel">
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', email: '', password: ''}
  }
  handleChangeName(e){
    this.setState({name: e.target.value})
  }
  handleChangeMail(e){
    this.setState({email: e.target.value})
  }
  handleChangePassword(e){
    this.setState({password: e.target.value})
  }
  handleClick(){
    console.log("#-handleClick")
    this.add_item()
  }
  async add_item(){
    try {
      if(LibUser.valid_form() == false){
        return false;
      }
      var item = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }
console.log( item )
      const res = await axios.post(
        '/api/users/add', item 
      )
console.log( res.data )
      if( parseInt(res.data.ret) == 1){
        window.location.href="/home"
      }else{
        alert("Error, save item")
      }
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
      <h1 className="mt-2">Register - User</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Name:</label>
            <input type="text" className="form-control" name="name" id="name"
            onChange={this.handleChangeName.bind(this)}/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Email:</label>
            <input type="text" className="form-control" name="email" id="email"
            onChange={this.handleChangeMail.bind(this)}/>
          </div>
        </div>
      </div>      
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" name="password" id="password"
              onChange={this.handleChangePassword.bind(this)}/>
          </div>
        </div>
      </div><br />
      <div className="form-group">
        <button className="btn btn-primary"
         onClick={this.handleClick.bind(this)}>Save
        </button>
      </div>
    
    </div>
    )
  }  

}
ReactDOM.render(<Page />, document.getElementById('app'));
</script>
@endsection
