import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const Menu = () => {
  const data = useStaticQuery(graphql`
    {
      wordpress {
        pageBy(uri: "/") {
          id
          uri
          title
          HomePageSections {
            menuSection {
              ourFoodMenuItems {
                menuItemLink {
                  title
                  target
                  url
                }
                menuItemTitle
                menuItemBackgroundImage {
                  sourceUrl
                }
              }
              ourFoodAboveTitle
              ourFoodTitle
              ourFoodParagraphText
              ourFoodButton {
                title
                url
                target
              }
              ourDrinksAboveTitle
              ourDrinksTitle
              ourDrinksParagraphText
              ourDrinksButton {
                target
                title
                url
              }
              ourDrinksMenuItems {
                menuItemLink {
                  target
                  title
                  url
                }
                menuItemBackgroundImage {
                  altText
                  sourceUrl
                }
                menuItemTitle
              }
            }
          }
        }
      }
    }
  `);
  const content = data.wordpress.pageBy.HomePageSections;
  return (
    <section className="menu">
      <div className="container-xl">
        <div className="menu-grid">
          <div className="menu-cards">
            {content.menuSection.ourFoodMenuItems.map((ourFoodMenuItem) => (
              <Link to={ourFoodMenuItem.menuItemLink.url}>
                <div className="menu-card ">
                  <img
                    src={ourFoodMenuItem.menuItemBackgroundImage.sourceUrl}
                    alt={ourFoodMenuItem.menuItemBackgroundImage.altText}
                  />
                  <div className="half-circle">
                    <h4 className="half-circle-title">
                      {ourFoodMenuItem.menuItemLink.title}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="menu-main-text">
            <p className="above-title">
              {content.menuSection.ourFoodAboveTitle}
            </p>
            <h2 className="menu-title">{content.menuSection.ourFoodTitle}</h2>
            <p className="lead-text">
              {content.menuSection.ourFoodParagraphText}
            </p>
            <Link
              to={content.menuSection.ourFoodButton.url}
              className="btn btn-outlined"
            >
              {content.menuSection.ourFoodButton.title}
            </Link>
          </div>

          <div className="menu-cards-reversed">
            {content.menuSection.ourDrinksMenuItems.map((ourDrinksMenuItem) => (
              <Link to={ourDrinksMenuItem.menuItemLink.url}>
                <div className="menu-card">
                  <img
                    src={ourDrinksMenuItem.menuItemBackgroundImage.sourceUrl}
                    alt={ourDrinksMenuItem.menuItemBackgroundImage.altText}
                  />
                  <div className="half-circle">
                    <h4 className="half-circle-title">
                      {ourDrinksMenuItem.menuItemLink.title}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="menu-main-text-reversed">
            <p className="above-title">
              {content.menuSection.ourDrinksAboveTitle}
            </p>
            <h2 className="menu-title">{content.menuSection.ourDrinksTitle}</h2>
            <p className="lead-text">
              {content.menuSection.ourDrinksParagraphText}
            </p>
            <Link
              to={content.menuSection.ourDrinksButton.url}
              className="btn btn-outlined"
            >
              {content.menuSection.ourDrinksButton.title}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
