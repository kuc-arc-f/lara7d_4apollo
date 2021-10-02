import axios  from 'axios';
//
export default {
  set_flash:async function(obj){
    try {
    //const response = await axios.post("/api/session/flash_write")
      const res = await axios.post(
        '/api/session/flash_write' , obj 
      )    
      var data = await res.data    
console.log( data)
    } catch (err) {
      throw new Error('Error , set_flash');
    }    
  },
  get_flash:async function(){
    try {
      var ret = {success: '', error:''}
      const res = await axios.get('/api/session/flash_get')    
      var data = await res.data  
      if(data.flash == null){return ret}  
//console.log( data.flash)
      return data.flash
    } catch (err) {
      throw new Error('Error , get_flash');
    }    
  },  

}
