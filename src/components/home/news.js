import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const News = ({ props }) => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(limit: 2) {
        nodes {
          id
          title
          uri
          date(formatString: "DD/MM/YYYY")
          excerpt
          categories {
            nodes {
              name
            }
          }
        }
      }
      allWpPage(filter: { uri: { eq: "/" } }) {
        nodes {
          title
          uri
          id
          HomePageSections {
            newsSection {
              aboveTitle
              title
              button {
                target
                title
                url
              }
            }
          }
        }
      }
    }
  `);
  const posts = data.allWpPost.nodes;
  const content = data.allWpPage.nodes[0].HomePageSections;
  return (
    <section className='our-news'>
      <div className='container'>
        <div className='our-news-main-text'>
          <p className='above-title-centered'>
            {content.newsSection.aboveTitle}
          </p>
          <h2 className='our-news-title'>{content.newsSection.title}</h2>
        </div>
        <div className='our-news-grid'>
          {posts.map((post) => (
            <Link key={post.id} to={`/our-news${post.uri}`}>
              <div className='our-news-card'>
                <div className='our-news-card-info'>
                  <p className='above-title'>{post.categories.nodes[0].name}</p>
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
        <div className='our-news-main-text'>
          <Link
            to={content.newsSection.button.url}
            className='btn btn-outlined'>
            {content.newsSection.button.title}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;
