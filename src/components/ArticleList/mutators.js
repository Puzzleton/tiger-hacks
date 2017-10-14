import { gql } from 'react-apollo';

export const createArticle = gql`
  mutation CreateArticle($category: Category!) {
    createArticle(category: $category){
      header
      content
      image
    }
  }
`;
