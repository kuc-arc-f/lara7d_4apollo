import { gql} from '@apollo/client';
//
export default {
  get_query_articles : function(page){
    return gql`
    query {
      articles(page: ${page}) {
        id
        title
        author {
          id
          name
        }    
      }
   }
   `   
  },


}
