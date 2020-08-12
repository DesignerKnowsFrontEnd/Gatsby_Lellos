import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const query = graphql`
query page($id: String!) {
  wpPage(id: { eq: $id }) {
    uri
    title
    id
    content
  }
}
`;

const PageTemplate = ({ data }) => {
  const page = data.wpPage
  return (
    <>
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </Layout>
    </>
  );
};

export default PageTemplate;
