import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const About = () => {
  const data = useStaticQuery(graphql`
    fragment AboutSection on WpPage_Homepagesections {
      aboutSection {
        aboveTitle
        title
        paragraphtext
        button {
          target
          title
          url
        }
        image {
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
    <section className='about-us'>
      <div className='container'>
        <div className='about-us-grid'>
          <div className='about-us-content'>
            <div className='about-us-content-image'>
              <img
                src={content.aboutSection.image.sourceUrl}
                alt={content.aboutSection.image.altText}
              />
            </div>
            <div className='about-us-content-main-text'>
              <p className='above-title'>{content.aboutSection.aboveTitle}</p>
              <h2 className='about-us-title'>{content.aboutSection.title}</h2>
              <p className='lead-text'>{content.aboutSection.paragraphtext}</p>
              <Link
                to={content.aboutSection.button.url}
                className='btn btn-outlined'>
                {content.aboutSection.button.title}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
