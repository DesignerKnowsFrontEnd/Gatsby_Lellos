import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Reviews = () => {
  const data = useStaticQuery(graphql`
    {
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
    }
    fragment ReviewsSection on WpPage_Homepagesections {
      reviewSection {
        backgroundColor
        aboveTitle
        title
      }
    }
  `);
  const content = data.allWpPage.nodes.HomePageSections;
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
          {data.wordpress.cpt_review_field.nodes.map((node) => (
            <div className='reviews-cards'>
              <div className='reviews-card'>
                <img
                  className='reviews-card-thumbnail'
                  src={node.ReviewItems.reviewItems.reviewerAvatar.sourceUrl}
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
