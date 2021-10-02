import { gql} from '@apollo/client';
//
export default {
  get_query_todo : function(id){
    return gql`
    query {
      todo(id: ${id} ) {
        id
        title
        }
      }
   `   
  },
  get_gql_add : function(title){
    return gql`
      mutation {
        addTodo(title: "${title}" ) {
          id
          title
         }
       }      
   `   
  },  
  get_gql_update : function(id, title){
    return gql`
      mutation {
        updateTodo(id: ${id}, title: "${title}" ) {
          id
          title
        }
      }
   `   
  },
  get_gql_delete: function(id){
    return gql`
      mutation {
        deleteTodo(id: ${id} ) {
          id
        }
      }
   `   
  },

}
