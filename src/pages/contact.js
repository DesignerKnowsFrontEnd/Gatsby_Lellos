import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Subscribe from '../components/subscribe';

export const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/contact/" } }) {
      nodes {
        title
        uri
        content
        ContactUsFields {
          informationFields {
            firstTitle
            firstParagraph
            secondTitle
            secondParagraph
            thirdTitle
            thirdParagraph
            facebookLink
            instagramLink
            tripAdvisorLink
          }
          contactFormFields {
            aboveTitle
            title
          }
        }
      }
    }
  }
`;

const ContactPage = ({ data }) => {
  const content = data.allWpPage.nodes[0];

  return (
    <Layout>
      <section className='breadcrumbs bg-2'>
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
            <div className='col-text-expanded'>
              <div className='contact-text'>
                <h3>{content.ContactUsFields.informationFields.firstTitle}</h3>
                <p>
                  {content.ContactUsFields.informationFields.firstParagraph}
                </p>
              </div>
              <div className='contact-text expanded'>
                <h3>{content.ContactUsFields.informationFields.secondTitle}</h3>
                <p>
                  {content.ContactUsFields.informationFields.secondParagraph}
                </p>
              </div>
              <div className='contact-text'>
                <h3>{content.ContactUsFields.informationFields.thirdTitle}</h3>
                <p>
                  {content.ContactUsFields.informationFields.thirdParagraph}
                </p>
                <div className='social-media-icons-horz'>
                  <Link
                    to={content.ContactUsFields.informationFields.facebookLink}>
                    <i className='fab fa-facebook-f'></i>
                    <p className='mr-10'>Facebook</p>
                  </Link>
                  <Link
                    to={
                      content.ContactUsFields.informationFields.instagramLink
                    }>
                    <i className='fab fa-instagram'></i>
                    <p className='mr-10'>Instagram</p>
                  </Link>
                  <Link
                    to={
                      content.ContactUsFields.informationFields.tripAdvisorLink
                    }>
                    <i className='fab fa-tripadvisor'></i>
                    <p>Trip Advisor</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-form'>
              <form action='#' className='contact-form'>
                <h3 className='above-title-centered'>
                  {content.ContactUsFields.contactFormFields.aboveTitle}
                </h3>
                <h2 className='form-title mb-60'>
                  {content.ContactUsFields.contactFormFields.title}
                </h2>
                <div className='contact-form-group'>
                  <input
                    type='text'
                    placeholder='First Name'
                    id='first-name'
                    className='contact-form-input'
                  />
                  <input
                    type='text'
                    placeholder='Last Name'
                    id='last-name'
                    className='contact-form-input'
                  />
                </div>
                <input
                  type='email'
                  placeholder='Email'
                  id='email'
                  className='contact-form-input'
                />
                <input
                  type='tel'
                  placeholder='Phone'
                  id='phone'
                  className='contact-form-input'
                />
                <textarea
                  name='message'
                  id='message'
                  className='contact-form-input'
                  placeholder='Type your messgae here...'></textarea>
                <button className='btn primary-btn mt-60' type='submit'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Subscribe></Subscribe>
    </Layout>
  );
};

export default ContactPage;
