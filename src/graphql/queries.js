
import { request, gql } from "graphql-request";


const graphcmc = 'https://api-eu-west-2.hygraph.com/v2/clhi0oyl21st401uo5sgx1lpq/master';

export const getAuthors = async () => {
  const query = gql`
  query MyQuery {
    authors {
      id
      name
      birthday
      picture {
        url
      }
      sex
      major
      biography
    }
  }
  
  `;

  const result = await request(graphcmc, query);
  const awnser = await result.authors;
  return awnser;
};

export const getPosts = async () => {
  const query = gql`
  query MyQuery {
    posts {
      title
      slug
      id
      date
      author {
        name
      }
      coverImage {
        url
      }
      excerpt
    }
  }
  `;

  const result = await request(graphcmc, query);
  const awnser = await result.posts;
  return awnser;
};

export const getOnePost = async (slug) => {
  const query = gql`
    query GetOnePost($slug: String!) {
      post(where: {slug: $slug}) {
        content {
          html
        }
        title
        slug
        id
        date

        coverImage {
          url
        }
        excerpt
        author {
          name
          picture {
            url
          }
        }
      }
  }
  `;

  const result = await request(graphcmc, query, { slug });

  return result.post;
};