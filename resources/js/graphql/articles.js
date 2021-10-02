
import { gql} from '@apollo/client';

export const GET_ARTICLES = gql`
query GetArticles($page : Int!){
  articles(page: $page) {
    id
    title
    author {
      id
      name
    }    
  }
}
`;
export const GET_ARTICLE = gql`
  query GetArticle($id: Int!) {
    article(id: $id){
      id
      title
      author {
        id
        name
      }     
    }    
  }
`;
export const ADD_ARTICLES = gql`
mutation AddArticle($title: String!, $author_id: Int!) {
  addAticle(
    title: $title, author_id: $author_id ) {
    id
    title
  }
}

`;
