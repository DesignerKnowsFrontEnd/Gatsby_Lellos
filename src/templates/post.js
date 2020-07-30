import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const query = graphql`
  query post {
    wpPost(id: {}) {
      id
      title
    }
  }
`;

const PostTemplate = ({ data }) => {
  const post = data.wordpress.post;
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
