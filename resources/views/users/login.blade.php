
@extends('layouts.app_layout')
@section('title', 'Login')

@section('content')
<div id="app"></div>
<!-- -->
<script type="text/babel">
class Page extends React.Component {
  constructor(props) {
    super(props);
//    this.state = {name: '', email: '', password: ''}
    this.state = { email: '', password: ''}
  }
  handleChangeMail(e){
    this.setState({email: e.target.value})
  }
  handleChangePassword(e){
    this.setState({password: e.target.value})
  }  
  handleClick(){
    console.log("#-handleClick")
    this.proc_login()
  }
  async proc_login(){
    try {
      var item = {
        email: this.state.email,
        password: this.state.password,        
      }
console.log( item )
      const res = await axios.post(
        '/api/users/login' , item 
      )
console.log( res.data )
      if(parseInt(res.data.ret) == 1){
        window.location.href="/home"
      }else{
        alert("Error, Login")
      }
    } catch (error) {
      alert("Error, save item")
      console.error(error);
    }
  }  
  render() {
    return (
    <div className="container">
      <h1 className="mt-2">Login</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Email:</label>
            <input type="text" className="form-control"
            onChange={this.handleChangeMail.bind(this)}/>
          </div>
        </div>
      </div>      
      <div className="row mb-2">
        <div className="col-md-6">
          <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control"
              onChange={this.handleChangePassword.bind(this)}/>
          </div>
        </div>
      </div>   
      <hr />   
      <div className="form-group">
        <button className="btn btn-primary"
         onClick={this.handleClick.bind(this)}>Login
        </button>
      </div>
      <hr />
      <a href="/reset_pass" className="btn btn-outline-primary">
        forget password</a>

    </div>
    )
  }  

}
ReactDOM.render(<Page />, document.getElementById('app'));
</script>
@endsection
