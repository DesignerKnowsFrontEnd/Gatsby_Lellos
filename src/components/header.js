import { Link, useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import MainMenu from './Menus/mainMenu';

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderLogoQuery {
      allWpCptWebsiteSetting {
        nodes {
          websiteSettingsFields {
            siteLogo {
              altText
              title
              uri
              sourceUrl
            }
          }
        }
      }
    }
  `);
  const logo = data.allWpCptWebsiteSetting.nodes[0].websiteSettingsFields;
  return (
    <nav id='navigation' className='navigation'>
      <div className='container-xl'>
        <div className='navbar'>
          <Link className='navbar-logo' to='/'>
            <img src={logo.siteLogo.sourceUrl} alt={logo.siteLogo.altText} />
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
