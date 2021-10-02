
//
var LibBook =  {
  get_category_items: function(){
    var arr = [
      {id: 1 , name: 'news'} ,
      {id: 2 , name: 'food'} ,
      {id: 3 , name: 'Other'} ,
    ]
    return arr
  },
  /*
  valid_radio : function(id , items){
    try{
      var ret = false
      items.forEach(function (item){
        if( id === item.id ){
          ret.push(tag)
        }
      });
      return ret;  
    } catch (e) {
      console.log(e);
      throw new Error('Error , valid_radio');
    } 
  },   
  */
  get_radio_items: function(){
    var arr = [
      {id: 1 , name: 'radio_1'} ,
      {id: 2 , name: 'radio_2'} ,
      {id: 3 , name: 'radio_3'} ,
    ]
    return arr
  },
  get_check_items: function(){
    var arr = [
      {id: 1 , name: 'checkbox_1'} ,
      {id: 2 , name: 'checkbox_2'} ,
      {id: 3 , name: 'checkbox_3'} ,
    ]
    return arr
  },
  get_category_item : function(id , categories){
    try{
      var ret = {id:0, name:""}
      categories.forEach(function (category){
        if( id === category.id ){
          ret = category
        }
      });
      return ret;  
    } catch (e) {
      console.log(e);
      throw new Error('Error , get_category_item');
    } 
  }, 
  valid_check : function(id , check_items ){
    try{
      var ret = false
      check_items.forEach(function (item){
//console.log("item.id=", item)
        if( id === item ){
          ret = true
        }
      });
      return ret;  
    } catch (e) {
      console.log(e);
      throw new Error('Error , valid_check');
    } 
  },     
  get_tags : function(ids , tags){
    try{
      var ret = []
      ids.forEach(function (item){
        tags.forEach(function (tag){
          if( item === tag.id ){
//            ret = category
            ret.push(tag)
          }
        });
//        item.category = { name: ""}
//console.log(item)
      });
      return ret;  
    } catch (e) {
      console.log(e);
      throw new Error('Error , get_tags');
    } 
  }    
}
