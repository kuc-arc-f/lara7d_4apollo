import axios  from 'axios';
//
export default {
  valid_auth:async function(props){
    const response = await axios.get("/api/users/get_session")
    const data = await response.data    
//console.log( data.user )
    if(data.user  == null){
      props.history.push("/");
      return;
    }    
  },
  valid_redirect :async function(props, user){
    let ret = false
//console.log( data.user )
    if(user  == null){
      props.history.push("/");
      return ret;
    }    
    return true;
  },    

}
