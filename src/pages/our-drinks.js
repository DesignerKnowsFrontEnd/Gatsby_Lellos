import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import DrinksMenu from '../components/Menus/drinksMenu';
import Subscribe from '../components/subscribe';

export const query = graphql`
  {
    wordpress {
      cpt_drinks_menu(where: { orderby: { field: MENU_ORDER, order: ASC } }) {
        nodes {
          uri
          title
          slug
          drinks_items_fields {
            drinksCategory {
              drinksItemDescription
              drinksItemTitle
              drinksWineClass
              oneHundredTwentyFiveMlDrinksItemPrice
              oneSeventyFiveMlDrinksItemPrice
              twoFiftyMlDrinksItemPrice
            }
          }
        }
      }
      pageBy(uri: "/our-drinks") {
        content
        title
        uri
      }
    }
  }
`;

const OurDrinks = ({ data }) => {
  const content = data.wordpress.pageBy;
  //console.log(data.wordpress.cpt_food_menu_items.nodes)
  return (
    <Layout>
      <section className='breadcrumbs bg-4'>
        <div className='container'>
          <div className='breadcrumbs-flex'>
            <div className='breadcrumbs-info'>
              <h3 className='above-title'>{content.title}</h3>
            </div>
          </div>
        </div>
      </section>

      <div className='tabs'>
        <DrinksMenu></DrinksMenu>
        <div className='container'>
          {data.wordpress.cpt_drinks_menu.nodes.map((node) => (
            <div className='tabs-content'>
              <div className='tabs-title'>
                <h2>{node.title}</h2>
              </div>
              <div className='tabs-food-cards'>
                {node.drinks_items_fields.drinksCategory.map((drink) => (
                  <div className='tabs-wine-card'>
                    <div className='tabs-wine-title'>
                      <h5>{drink.drinksItemTitle}</h5>
                    </div>
                    <div className='tabs-wine-description'>
                      <p>{drink.drinksItemDescription}</p>
                      <div className='wine-icon {drink.drinksWineClass}-wine'>
                        White
                      </div>
                    </div>
                    <div className='tabs-wine-prices'>
                      <p className='tabs-wine-volume'>250ml</p>
                      <p className='tabs-wine-price'>
                        £{drink.twoFiftyMlDrinksItemPrice}
                      </p>
                    </div>
                    <div className='tabs-wine-prices'>
                      <p className='tabs-wine-volume'>175ml</p>
                      <p className='tabs-wine-price'>
                        £{drink.oneSeventyFiveMlDrinksItemPrice}
                      </p>
                    </div>
                    <div className='tabs-wine-prices'>
                      <p className='tabs-wine-volume'>125ml</p>
                      <p className='tabs-wine-price'>
                        £{drink.oneHundredTwentyFiveMlDrinksItemPrice}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Subscribe></Subscribe>
    </Layout>
  );
};

export default OurDrinks;
