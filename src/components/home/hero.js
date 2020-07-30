import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Hero = () => {
  const data = useStaticQuery(graphql`
    fragment HeroSection on WpPage_Homepagesections {
      heroSection {
        aboveTitle
        title
        paragraphText
        button {
          target
          title
          url
        }
        backgroundImage {
          altText
          localFile {
            childImageSharp {
              fluid {
                srcSet
              }
            }
          }
        }
        facebookLink
        instagramLink
        tripAdvisorLink
      }
    }
  `);
  const content = data.allWpPage.nodes.HomePageSections;
  return (
    <section
      className='hero'
      // style={{
      //   backgroundImage: `url(${content.heroSection.backgroundImage.sourceUrl})`
      // }}
    >
      <img
        srcSet={content.heroSection.backgroundImage.srcSet}
        className='bg-image'
        alt={content.heroSection.backgroundImage.altText}
      />
      <div className='container-xl'>
        <div className='hero-grid'>
          <div className='left-side'>
            <div className='line'></div>
            <div className='social-media-icons'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-tripadvisor'></i>
            </div>
          </div>

          <div className='main-text'>
            <p className='above-title'>{content.heroSection.aboveTitle}</p>
            <h1 className='hero-title'> {content.heroSection.title}</h1>
            <p className='lead-text'>{content.heroSection.paragraphText} </p>
            <Link
              to={content.heroSection.button.url}
              className='btn btn-outlined'>
              {content.heroSection.button.title}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
