import React from 'react'
import { useStaticQuery,graphql, Link } from 'gatsby'

const MainMenu = () => {
    const data = useStaticQuery(graphql`
    {
      wordpress {
        generalSettings {
          url
        }
        menu(idType: NAME, id: "Main Menu") {
          menuItems {
            nodes {
              label
              url
            }
          }
        }
      }
    }
    `)

    

    const { url } = data.wordpress.generalSettings
    const items = data.wordpress.menu.menuItems.nodes.map(item => ({
        ...item,
        url: item.url.replace(url, '')
    }))
    
    return (
       <ul className="navbar-links">
          {items.map(item => (
            <li className="navbar-links-link">
              <Link to={item.url} key={item.id} >
                  {item.label}
              </Link> 
            </li>
          ))}
       </ul>
    )
}

export default MainMenu
