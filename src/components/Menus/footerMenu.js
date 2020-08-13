import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const FooterMenu = () => {
  const data = useStaticQuery(graphql`
    {
      wpMenu(name: { eq: "Main Menu" }) {
        menuItems {
          nodes {
            url
            label
          }
        }
      }
      wp {
        generalSettings {
          url
        }
      }
    }
  `);

  const { url } = data.wp.generalSettings;
  const items = data.wpMenu.menuItems.nodes.map((item) => ({
    ...item,
    url: item.url.replace(url, ''),
  }));

  return (
    <ul className='footer-links'>
      {items.map((item) => (
        <li className='footer-link'>
          <Link to={item.url} key={item.id}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterMenu;
