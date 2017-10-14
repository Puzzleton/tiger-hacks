import { gql } from "react-apollo";

export const getArticles = gql`
  query GetArticles($category: Category) {
    articles(category: $category) {
      id
      header
      content
      image
    }
  }
`;
