import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import '../../node_modules/slick-carousel/slick/slick';
import '../../node_modules/@fortawesome/fontawesome-free/js/fontawesome';
import '../../node_modules/@fortawesome/fontawesome-free/js/brands';
import '../../node_modules/@fortawesome/fontawesome-free/js/regular';
import '../../node_modules/@fortawesome/fontawesome-free/js/solid';
import '../../node_modules/@fortawesome/fontawesome-free/js/v4-shims';
import FooterMenu from './Menus/footerMenu';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      allWpCptWebsiteSetting {
        nodes {
          websiteSettingsFields {
            siteLogo {
              altText
              title
              uri
              sourceUrl
            }
            socialMediaLinksFooter {
              facebookLink
              instagramLink
              tripAdvisorLink
            }
            contactUsFooter {
              telephoneNumber
              address
              email
            }
            bookATableFooterWidget {
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
              link
              title
            }
            copyrightInformation
          }
        }
      }
      allWpPost(limit: 1) {
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
    }
  `);
  const logo = data.allWpCptWebsiteSetting.nodes[0].websiteSettingsFields;
  const post = data.allWpPost.nodes[0];
  console.log(
    logo.bookATableFooterWidget.backgroundImage.localFile.childImageSharp.fluid
      .srcSet
  );
  return (
    <>
      <footer className='footer'>
        <div className='container'>
          <div className='footer-grid'>
            <div className='col-1'>
              <div className='footer-logo'>
                <a href='index.html'>
                  <img
                    src={logo.siteLogo.sourceUrl}
                    alt={logo.siteLogo.altText}
                  />
                </a>
              </div>
              <div className='social-media-icons-horz'>
                <Link to={logo.socialMediaLinksFooter.facebookLink}>
                  <i className='fab fa-facebook-f'></i>
                </Link>
                <Link to={logo.socialMediaLinksFooter.instagramLink}>
                  <i className='fab fa-instagram'></i>
                </Link>
                <Link to={logo.socialMediaLinksFooter.tripAdvisorLink}>
                  <i className='fab fa-tripadvisor'></i>
                </Link>
              </div>
            </div>

            <div className='col-2'>
              <div className='contact-info'>
                <p>{logo.contactUsFooter.telephoneNumber}</p>
                <p>{logo.contactUsFooter.address}</p>
                <p>
                  <a href='mailto:info@lellos.co.uk'>
                    {logo.contactUsFooter.email}
                  </a>
                </p>
              </div>
            </div>
            <div className='col-3'>
              <FooterMenu></FooterMenu>
            </div>
            <div className='col-4'>
              <div className='our-news-card-footer'>
                <p className='above-title-footer'>
                  {post.categories.nodes[0].name}
                </p>
                <div className='our-news-card-text'>
                  <h6>{post.title}</h6>
                  <p>{post.excerpt}</p>
                </div>
              </div>
            </div>
            <div className='col-5'>
              <Link to={logo.bookATableFooterWidget.link}>
                <div className='menu-card-footer'>
                  <img
                    srcSet={
                      logo.bookATableFooterWidget.backgroundImage.localFile
                        .childImageSharp.fluid.srcSet
                    }
                    alt={logo.bookATableFooterWidget.backgroundImage.altText}
                  />
                  <div className='half-circle-footer'>
                    <h5 className='half-circle-footer-title'>
                      {logo.bookATableFooterWidget.title}
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <div className='copyright'>
        <div className='container'>
          <div className='copyright-flex'>
            <p className='contact-info'>
              Lello’s © {new Date().getFullYear()} All Rights Reserved ~{' '}
              <a href='/privacy-policy/'>Privacy Policy</a>
            </p>
            <a href='#' className='btn btn-bttop'>
              <i className='fas fa-chevron-up'></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
