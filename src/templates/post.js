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
      content
      customNewsPost {
        multiColumns {
          title
          description
          iconimage {
            localFile {
              childImageSharp {
                fluid {
                  srcSet
                }
              }
            }
          }
        }
      }
    }
    allWpPage(filter: { uri: { eq: "/our-news/" } }) {
      nodes {
        title
        uri
      }
    }
  }
`;

const PostTemplate = ({ data }) => {
  const page = data.allWpPage.nodes[0];
  const post = data.wpPost;
  console.log(page);
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

        <article className='article'>
          <div className='container'>
            <div className='article-title'>
              <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
            </div>
            <div className='article-text'>
              <p dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <div className='article-body-grid'>
              <div className='article-card'>
                <div className='article-card-img'>
                  <img src='images/icons/1.svg' alt='' />
                </div>
                <h5 className='article-card-title'>Temperature and wellness</h5>
                <p className='article-card-text'>
                  checks are carried out daily on our staff members. Anyone
                  displaying symptoms of Covid-19 will be told to stay at home.
                </p>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default PostTemplate;
