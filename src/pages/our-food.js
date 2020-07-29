import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import FoodMenu from "../components/Menus/foodMenu";
import Subscribe from "../components/subscribe"

export const query = graphql`
{
    wordpress {
      cpt_food_menu_items(where: {orderby: {field: MENU_ORDER, order: ASC}}) {
        nodes {
          uri
          title
          slug
          food_items_fields {
            foodCategory {
              foodItemDescription
              foodItemPrice
              foodItemTitle
            }
          }
        }
      }
      pageBy(uri: "/our-food") {
        content
        title
        uri
      }
    }
  }
`;

const OurFood = ({ data }) => {
    const content = data.wordpress.pageBy
    //console.log(data.wordpress.cpt_food_menu_items.nodes)
  return (
    <Layout>
      <section className="breadcrumbs bg-4">
        <div className="container">
          <div className="breadcrumbs-flex">
            <div className="breadcrumbs-info">
              <h3 className="above-title">{ content.title }</h3>
            </div>
          </div>
        </div>
      </section>
      
      

      <div className="tabs">
        <FoodMenu></FoodMenu>
        <div className="container">
            {data.wordpress.cpt_food_menu_items.nodes.map(node => (
                <div className="tabs-content">
                 <div className="tabs-title">
                   <h2>{ node.title }</h2>
                 </div>
                 <div className="tabs-food-cards">
                     {node.food_items_fields.foodCategory.map(food => (
                     
                    <div className="tabs-food-card">
                        <div className="tabs-food-title">
                           <h5>{ food.foodItemTitle }</h5>
                           <p>£{ food.foodItemPrice }</p>
                         </div>
                         <div className="tabs-food-description">
                           <p>
                            { food.foodItemDescription }
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

export default OurFood;
