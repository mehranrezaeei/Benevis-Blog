import { gql } from "@apollo/client";

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      avatar {
        url
      }
      field
      id
      name
      slug
    }
  }
`;
const GET_POSTS_INFO = gql`
  query {
    posts {
      slug
      title
      id
      content {
        html
      }
      author {
        ... on Author {
          id
          name
          avatar {
            url
          }
          field
        }
      }
      photoCover {
        url
      }
    }
  }
`;

const GET_POST_INFO = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        ... on Author {
          id
          name
          field
          slug
          avatar {
            url
          }
        }
      }
      content {
        html
      }
      comments {
        name
        id
        email
        text
      }
      id
      slug
      title
      datePublished
      photoCover {
        url
      }
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query getAuthor($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      description {
        html
      }
      field
      id
      name
      slug
      posts {
        content {
          html
        }
        id
        slug
        title
        photoCover {
          url
        }
      }
    }
  }
`;
export { GET_AUTHORS_INFO, GET_POSTS_INFO, GET_POST_INFO, GET_AUTHOR_INFO };
