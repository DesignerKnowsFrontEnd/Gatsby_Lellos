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
  const page = data.wpPage;
  return (
    <>
      <Layout>
        <section className='breadcrumbs bg-3'>
          <div className='container'>
            <div className='breadcrumbs-flex'>
              <div className='breadcrumbs-info'>
                <h3 className='above-title'>{page.title}</h3>
              </div>
            </div>
          </div>
        </section>

        <article className='page-template'>
          <div className='container'>
            <div className='page-title'>
              <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
            </div>
            <div className='page-text'>
              <div dangerouslySetInnerHTML={{ __html: page.content }} />
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default PageTemplate;
