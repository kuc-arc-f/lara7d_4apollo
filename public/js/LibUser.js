
//
var LibUser =  {
  valid_form : function(){
    try{
      var ret = false
      var elem = document.getElementById('name');
      var email = document.getElementById('email');
      var password = document.getElementById('password');
      if(elem.value==''){
        alert("Error, name is required")
        return ret; 
      }
      if(email.value==''){
        alert("Error, email is required")
        return ret; 
      }
      if(password.value==''){
        alert("Error, password is required")
        return ret; 
      }
      ret = true
      return ret;  
    } catch (e) {
      console.log(e);
      throw new Error('Error , valid_form');
    } 
  },
  valid_reset_pass : function(){
    try{
      var ret = false
      var reset_pass = document.getElementById('reset_pass');
      var email = document.getElementById('email');
      var password = document.getElementById('password');
      if(email.value==''){
        alert("Error, email is required")
        return ret; 
      }
      if(password.value==''){
        alert("Error, password is required")
        return ret; 
      }
      if(reset_pass.value==''){
        alert("Error, reset password is required")
        return ret; 
      }
      if(reset_pass.value != password.value){
        alert("Error, password , reset password が異なります")
        return ret; 
      }
      ret = true
      return ret;  
    } catch (e) {
      console.log(e);
      throw new Error('Error , valid_form');
    } 
  },

}
