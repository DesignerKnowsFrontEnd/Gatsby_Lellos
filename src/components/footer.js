import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 65, height: 65) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <>
      <footer className='footer'>
        <div className='container'>
          <div className='footer-grid'>
            <div className='col-1'>
              <div className='footer-logo'>
                <a href='index.html'>
                  <Img
                    fixed={data.placeholderImage.childImageSharp.fixed}
                    alt='Lellos Logo'
                  />
                </a>
              </div>
              <div className='social-media-icons-horz'>
                <a href='#'>
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a href='#'>
                  <i className='fab fa-instagram'></i>
                </a>
                <a href='#'>
                  <i className='fab fa-tripadvisor'></i>
                </a>
              </div>
            </div>

            <div className='col-2'>
              <div className='contact-info'>
                <p>01483 822 225</p>
                <p>
                  18 STATION APPROACH <br />
                  WEST BYFLEET <br />
                  KT146NF
                </p>
                <p>
                  <a href='mailto:info@lellos.co.uk'>info@lellos.co.uk</a>
                </p>
              </div>
            </div>
            <div className='col-3'>
              <ul className='footer-links'>
                <li className='footer-link'>
                  <a href='index.html'>Home</a>
                </li>
                <li className='footer-link'>
                  <a href='about.html'>About Us</a>
                </li>
                <li className='footer-link'>
                  <a href='food.html'>Our Food</a>
                </li>
                <li className='footer-link'>
                  <a href='drinks.html'>Our Drinks</a>
                </li>
                <li className='footer-link'>
                  <a href='news.html'>Our News</a>
                </li>
                <li className='footer-link'>
                  <a href='contact.html'>Contact Us</a>
                </li>
              </ul>
            </div>
            <div className='col-4'>
              <div className='our-news-card-footer'>
                <p className='above-title-footer'>News</p>
                <div className='our-news-card-text'>
                  <h6>
                    Covid -19 <br />
                    Dining Operations Policy
                  </h6>
                  <p>
                    At Lello’s we understand that the health, safety and
                    well-being of all of our staff and customers are of the
                    utmost importance in this new world...
                  </p>
                </div>
              </div>
            </div>
            <div className='col-5'>
              <a href='#'>
                <div className='menu-card-footer'>
                  <img src='images/book-a-table.png' alt='' />
                  <div className='half-circle-footer'>
                    <h5 className='half-circle-footer-title'>Book a Table</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className='copyright'>
        <div className='container'>
          <div className='copyright-flex'>
            <p className='contact-info'>
              Lello’s © {new Date().getFullYear()} All Rights Reserved ~{' '}
              <a href='#'>Privacy Policy</a>~ <a href='#'>Cookies Policy</a>{' '}
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
