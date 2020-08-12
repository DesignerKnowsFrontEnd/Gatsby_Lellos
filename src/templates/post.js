import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const query = graphql`
query post($id: String!) {
  wpPost(id: { eq: $id }) {
    uri
    title
    date
    id
    excerpt
  }
}


`;

const PostTemplate = ({ data }) => {
  const post = data.wpPost;
  console.log(data);
  return (
    <>
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Layout>
    </>
  );
};

export default PostTemplate;
