import React from 'react'
import { useStaticQuery,graphql, Link } from 'gatsby'

const FoodMenu = () => {
    const data = useStaticQuery(graphql`
    {
        wordpress {
          cpt_food_menu_items(where: {orderby: {field: MENU_ORDER, order: ASC}}) {
            nodes {
              uri
              title
              slug
              id
            }
          }
        }
      }
      
`)

    

   // const { url } = data.wordpress.generalSettings
    const items = data.wordpress.cpt_food_menu_items.nodes
    
    return (
      
       <ul id="sub-nav" className="tabs-list tabs-scroll">
          {items.map(item => (
            <li className="tabs-li">
              <Link 
                className="tabs-btn" 
                to={`#${item.slug}`} 
                key={item.id} 
              >
                  {item.title}
              </Link> 
            </li>
          ))}
       </ul>
    )
}

export default FoodMenu
