import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Subscribe from '../components/subscribe';

export const query = graphql`
  query NewsPage {
    allWpPage(filter: { uri: { eq: "/our-news/" } }) {
      nodes {
        title
        uri
      }
    }
    allWpPost {
      nodes {
        id
        uri
        title
        excerpt
        date(formatString: "DD/MM/YYYY")
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`;

const OurNews = ({ data }) => {
  const content = data.allWpPage.nodes[0];
  const posts = data.allWpPost.nodes;
  console.log(content);

  // let dateToBeFormatted = new Date(post.date);
  // dateToBeFormatted = dateToBeFormatted.toLocaleString('en-GB')
  return (
    <Layout>
      <section className='breadcrumbs bg-3'>
        <div className='container'>
          <div className='breadcrumbs-flex'>
            <div className='breadcrumbs-info'>
              <h3 className='above-title'>{content.title}</h3>
            </div>
          </div>
        </div>
      </section>

      <main>
        <div className='container'>
          <div className='our-news-grid'>
            {posts.map((post) => (
              <Link key={post.id} to={`/our-news${post.uri}`}>
                <div className='our-news-card'>
                  <div className='our-news-card-info'>
                    <p className='above-title'>
                      {post.categories.nodes[0].name}
                    </p>
                    <p className='date'>{post.date}</p>
                  </div>
                  <div className='our-news-card-text'>
                    <h3 dangerouslySetInnerHTML={{ __html: post.title }}></h3>
                    <p dangerouslySetInnerHTML={{ __html: post.excerpt }}></p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Subscribe></Subscribe>
    </Layout>
  );
};

export default OurNews;
