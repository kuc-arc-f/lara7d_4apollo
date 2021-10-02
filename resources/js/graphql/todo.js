
import { gql} from '@apollo/client';

export const GET_TODOS = gql`
  query {
    todos {
      id
      title
    }
  }
`;
export const GET_TODO = gql`
  query GetTodo($id: Int!) {
    todo(id: $id) {
      id
      title
    }
  }
`;
export const ADD_TODO = gql`
  mutation AddTodo($title: String!) {
    addTodo(title: $title) {
      id
      title
    }
  }
`;
export const UPDATE_TODO = gql`
  mutation UpdateTodo($id: Int!, $title : String!) {
    updateTodo(id: $id, title: $title) {
      id
      title
    }
  }
`;
export const DELETE_TODO = gql`
  mutation RemoveTodo ($id: Int!) {
    deleteTodo(id: $id) {
      id
    }
  }
`;