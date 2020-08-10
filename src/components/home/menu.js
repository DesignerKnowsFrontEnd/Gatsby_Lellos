import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Menu = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { uri: { eq: "/" } }) {
        nodes {
          title
          uri
          id
          HomePageSections {
            menuSection {
              ourFoodMenuItems {
                menuItemBackgroundImage {
                  localFile {
                    childImageSharp {
                      fluid {
                        srcSet
                      }
                    }
                  }
                }
                menuItemLink {
                  target
                  title
                  url
                }
                menuItemTitle
              }
              ourFoodAboveTitle
              ourFoodTitle
              ourFoodParagraphText
              ourFoodButton {
                target
                title
                url
              }
              ourDrinksMenuItems {
                menuItemBackgroundImage {
                  localFile {
                    childImageSharp {
                      fluid {
                        srcSet
                      }
                    }
                  }
                }
                menuItemLink {
                  target
                  title
                  url
                }
                menuItemTitle
              }
              ourDrinksAboveTitle
              ourDrinksTitle
              ourDrinksParagraphText
              ourDrinksButton {
                target
                title
                url
              }
            }
          }
        }
      }
    }
  `);
  const content = data.allWpPage.nodes[0].HomePageSections;
  return (
    <section className='menu'>
      <div className='container-xl'>
        <div className='menu-grid'>
          <div className='menu-cards'>
            {content.menuSection.ourFoodMenuItems.map((ourFoodMenuItem) => (
              <Link to={ourFoodMenuItem.menuItemLink.url}>
                <div className='menu-card '>
                  <img
                    srcSet={
                      ourFoodMenuItem.menuItemBackgroundImage.localFile
                        .childImageSharp.fluid.srcSet
                    }
                    alt={ourFoodMenuItem.menuItemBackgroundImage.altText}
                  />
                  <div className='half-circle'>
                    <h4 className='half-circle-title'>
                      {ourFoodMenuItem.menuItemLink.title}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className='menu-main-text'>
            <p className='above-title'>
              {content.menuSection.ourFoodAboveTitle}
            </p>
            <h2 className='menu-title'>{content.menuSection.ourFoodTitle}</h2>
            <p className='lead-text'>
              {content.menuSection.ourFoodParagraphText}
            </p>
            <Link
              to={content.menuSection.ourFoodButton.url}
              className='btn btn-outlined'>
              {content.menuSection.ourFoodButton.title}
            </Link>
          </div>

          <div className='menu-cards-reversed'>
            {content.menuSection.ourDrinksMenuItems.map((ourDrinksMenuItem) => (
              <Link to={ourDrinksMenuItem.menuItemLink.url}>
                <div className='menu-card'>
                  <img
                    srcSet={
                      ourDrinksMenuItem.menuItemBackgroundImage.localFile
                        .childImageSharp.fluid.srcSet
                    }
                    alt={ourDrinksMenuItem.menuItemBackgroundImage.altText}
                  />
                  <div className='half-circle'>
                    <h4 className='half-circle-title'>
                      {ourDrinksMenuItem.menuItemLink.title}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className='menu-main-text-reversed'>
            <p className='above-title'>
              {content.menuSection.ourDrinksAboveTitle}
            </p>
            <h2 className='menu-title'>{content.menuSection.ourDrinksTitle}</h2>
            <p className='lead-text'>
              {content.menuSection.ourDrinksParagraphText}
            </p>
            <Link
              to={content.menuSection.ourDrinksButton.url}
              className='btn btn-outlined'>
              {content.menuSection.ourDrinksButton.title}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
