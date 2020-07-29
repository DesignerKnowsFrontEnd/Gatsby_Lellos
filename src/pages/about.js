import React from 'react';
import Layout from '../components/layout';
import Subscribe from '../components/subscribe';

export const query = graphql`
  {
    wordpress {
      pageBy(uri: "/about") {
        title
        uri
        AboutUsFields {
          firstTitle
          firstParagraph
          firstImage {
            altText
            sourceUrl
            srcSet
          }
          secondTitle
          secondParagraph
          secondImage {
            altText
            sourceUrl
            srcSet
          }
          thirdTitle
          thirdParagraph
          thirdImage {
            altText
            sourceUrl
            srcSet
          }
        }
      }
    }
  }
`;

const AboutPage = ({ data }) => {
  const content = data.wordpress.pageBy;

  return (
    <Layout>
      <section className='breadcrumbs bg-1'>
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
          <div className='two-columns'>
            <div className='col-text'>
              <h2>{content.AboutUsFields.firstTitle}</h2>
              <p className='lead-text'>
                {content.AboutUsFields.firstParagraph}
              </p>
            </div>
            <div className='col-image'>
              <img
                className='object-fit-cover'
                srcSet={content.AboutUsFields.firstImage.srcSet}
                alt={content.AboutUsFields.firstImage.altText}
              />
            </div>
            <div className='col-text col-text-alt'>
              <h2>{content.AboutUsFields.secondTitle} </h2>
              <p className='lead-text'>
                {content.AboutUsFields.secondParagraph}
              </p>
            </div>
            <div className='col-image col-image-alt'>
              <img
                className='object-fit-cover'
                srcSet={content.AboutUsFields.secondImage.srcSet}
                alt={content.AboutUsFields.secondImage.altText}
              />
            </div>
          </div>
        </div>
      </main>

      <section className='chef-bio'>
        <div className='container'>
          <div className='two-columns'>
            <div className='col-text nmt-130'>
              <h2>{content.AboutUsFields.thirdTitle} </h2>
              <p className='lead-text'>
                {content.AboutUsFields.thirdParagraph}
              </p>
            </div>
            <div className='col-standout-image'>
              <img
                className='object-fit-cover'
                srcSet={content.AboutUsFields.thirdImage.srcSet}
                alt={content.AboutUsFields.thirdImage.altText}
              />
            </div>
          </div>
        </div>
      </section>

      <Subscribe></Subscribe>
    </Layout>
  );
};

export default AboutPage;
