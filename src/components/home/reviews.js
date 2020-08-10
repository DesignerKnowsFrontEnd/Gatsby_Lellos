import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Reviews = () => {
  const data = useStaticQuery(graphql`
    query reviewsSectionAndReviewItems {
      allWpCptReviewsFields {
        nodes {
          ReviewItems {
            reviewItems {
              reviewerAvatar {
                altText
                localFile {
                  childImageSharp {
                    fluid {
                      srcSet
                    }
                  }
                }
              }
              reviewTitle
              reviewDescription
              reviewerName
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
            reviewSection {
              backgroundColor
              aboveTitle
              title
            }
          }
        }
      }
    }
  `);
  const content = data.allWpPage.nodes[0].HomePageSections;
  return (
    <section
      className='reviews'
      style={{
        backgroundColor: `${content.reviewSection.backgroundColor}`,
      }}>
      <div className='container'>
        <div className='reviews-main-text'>
          <p className='above-title-centered'>
            {content.reviewSection.aboveTitle}
          </p>
          <h2 className='reviews-title'>{content.reviewSection.title}</h2>
        </div>
        <div className='reviews-carousel'>
          {data.allWpCptReviewsFields.nodes.map((node) => (
            <div className='reviews-cards'>
              <div className='reviews-card'>
                <img
                  className='reviews-card-thumbnail'
                  srcSet={
                    node.ReviewItems.reviewItems.reviewerAvatar.localFile
                      .childImageSharp.fluid.srcSet
                  }
                  alt={node.ReviewItems.reviewItems.reviewerAvatar.altText}
                />
                <h5>{node.ReviewItems.reviewItems.reviewTitle}</h5>
                <p>
                  {node.ReviewItems.reviewItems.reviewDescription}...
                  <a href='#' className='text-btn'>
                    {' '}
                    Read More{' '}
                  </a>
                </p>
                <div className='reviewer'>
                  {node.ReviewItems.reviewItems.reviewerName}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
