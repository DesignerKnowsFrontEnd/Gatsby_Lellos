import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const FoodMenu = () => {
  const data = useStaticQuery(graphql`
    query foodMenuItems($menuOrder: IntQueryOperatorInput = {}) {
      allWpCptFoodMenu(
        sort: { fields: menuOrder }
        filter: { menuOrder: $menuOrder }
      ) {
        nodes {
          title
          uri
          menuOrder
          slug
        }
      }
    }
  `);

  // const { url } = data.wordpress.generalSettings
  const items = data.allWpCptFoodMenu.nodes;

  return (
    <ul id='sub-nav' className='tabs-list tabs-scroll'>
      {items.map((item) => (
        <li className='tabs-li'>
          <Link className='tabs-btn' to={`#${item.slug}`} key={item.id}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FoodMenu;
