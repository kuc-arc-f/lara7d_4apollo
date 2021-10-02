import axios  from 'axios';
//
export default {
  valid_auth:async function(props){
    const response = await axios.get("/api/users/get_session")
    var data = await response.data    
//console.log( data.user )
    if(data.user  == null){
      props.history.push("/");
      return;
    }    
  },
  get_user:async function(props){
//    var ret = {}
    const response = await axios.get("/api/users/get_session")
    var data = await response.data    
//console.log( data.user )
    return data.user
  },
  valid_redirect :async function(props, user){
    var ret = false
//console.log( data.user )
    if(user  == null){
      props.history.push("/");
      return ret;
    }    
    return true;
  },    

}
