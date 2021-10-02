
@extends('layouts.app_layout')
@section('title', 'Login')

@section('content')
<div id="app"></div>
<!-- -->
<script type="text/babel" src="/js/LibUser.js?a2" ></script>
<script type="text/babel">
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' , reset_pass: ''}
  }
  handleChangeMail(e){
    this.setState({email: e.target.value})
  }
  handleChangePassword(e){
    this.setState({password: e.target.value})
  }  
  handleChangeResetPassword(e){
    this.setState({reset_pass: e.target.value})
  }  
  handleClick(){
    console.log("#-handleClick")
    this.proc_save()
  }
  async proc_save(){
    try {
      if(LibUser.valid_reset_pass() == false){
        return false;
      }      
      var item = {
        email: this.state.email,
        password: this.state.password, 
        reset_pass : this.state.reset_pass,       
      }
console.log( item )
      const res = await axios.post(
        '/api/users/reset_pass' , item 
      )
console.log( res.data )
console.log( res.data.message )
      if(parseInt(res.data.ret) == 1){
        window.location.href="/login"
      }else{
        alert(res.data.message)
      }
    } catch (error) {
      alert("Error, save item")
      console.error(error);
    }
  }  
  render() {
    return (
    <div className="container">
      <h1 className="mt-0">Reset Password</h1>
      <p>・パスワードを再設定できます。登録メールアドレスを忘れた場合は利用できません
      </p>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Email:</label>
            <input type="text" className="form-control" name="email" id="email"
            onChange={this.handleChangeMail.bind(this)}/>
          </div>
        </div>
      </div>      
      <div className="row mb-2">
        <div className="col-md-6">
          <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" name="password" id="password"
              onChange={this.handleChangePassword.bind(this)}/>
          </div>
        </div>
      </div>   
      <div className="row mb-2">
        <div className="col-md-6">
          <div className="form-group">
            <label>password Confirm:</label>
            <input type="password" className="form-control" name="reset_pass" id="reset_pass"
              onChange={this.handleChangeResetPassword.bind(this)}/>
          </div>
        </div>
      </div>   
      <hr />   
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
