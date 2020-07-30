import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Chef = () => {
  const data = useStaticQuery(graphql`
    fragment ChefSection on WpPage_Homepagesections {
      chefSection {
        backgroundColor
        aboveTitle
        title
        paragraphText
        button {
          target
          title
          url
        }
        imageOnTheRight {
          altText
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
  `);
  const content = data.allWpPage.nodes.HomePageSections;
  return (
    <section
      className='chef'
      style={{
        backgroundColor: `${content.chefSection.backgroundColor}`,
      }}>
      <div className='chef-left-side'>
        <div className='chef-main-text'>
          <p className='above-title-secondary'>
            {content.chefSection.aboveTitle}
          </p>
          <h2 className='chef-title'>{content.chefSection.title}</h2>
          <p className='lead-text'>{content.chefSection.paragraphText}</p>
          <Link
            to={content.chefSection.button.url}
            className='btn btn-outlined-secondary'>
            {content.chefSection.button.title}
          </Link>
        </div>
      </div>
      <div className='chef-right-side'>
        <img
          className='chef-right-side-img'
          src={content.chefSection.imageOnTheRight.sourceUrl}
          alt={content.chefSection.imageOnTheRight.altText}
        />
      </div>
    </section>
  );
};

export default Chef;
