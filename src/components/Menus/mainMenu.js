import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const MainMenu = () => {
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
    <ul className='navbar-links'>
      {items.map((item) => (
        <li className='navbar-links-link'>
          <Link to={item.url} key={item.id}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
