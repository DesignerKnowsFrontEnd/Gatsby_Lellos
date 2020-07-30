import { Link, useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import MainMenu from './Menus/mainMenu';
import Img from 'gatsby-image';

const Header = () => {
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
    <nav id='navigation' className='navigation'>
      <div className='container-xl'>
        <div className='navbar'>
          <Link className='navbar-logo' to='/'>
            <Img
              fixed={data.placeholderImage.childImageSharp.fixed}
              alt='Lellos Logo'
            />
          </Link>
          <MainMenu />
          <div className='toggle'>
            <span className='bars'></span>
          </div>
          <a href='#' className='btn primary-btn'>
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};
Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
