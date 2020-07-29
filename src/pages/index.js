import React from "react"
import '../../node_modules/slick-carousel/slick/slick';
import '../../node_modules/@fortawesome/fontawesome-free/js/fontawesome';
import '../../node_modules/@fortawesome/fontawesome-free/js/brands';
import '../../node_modules/@fortawesome/fontawesome-free/js/regular';
import '../../node_modules/@fortawesome/fontawesome-free/js/solid';
import '../../node_modules/@fortawesome/fontawesome-free/js/v4-shims';
import Layout from "../components/layout"
import Hero from "../components/home/hero"
import About from "../components/home/about";
import Chef from "../components/home/chef";
import Reviews from "../components/home/reviews";
import News from "../components/home/news";
import Menu from "../components/home/menu";
import Subscribe from "../components/subscribe";



export const query = graphql`
{
  wordpress {
    pageBy(uri: "/") {
      id
      uri
      title
      HomePageSections {
        heroSection {
          aboveTitle
          title
          paragraphText
          button {
            url
            title
            target
          }
          backgroundImage {
            sourceUrl
            altText
          }
          facebookLink
          instagramLink
          tripAdvisorLink
        }
        aboutSection {
          image {
            altText
            sourceUrl
          }
          aboveTitle
          title
          paragraphtext
          button {
            target
            title
            url
          }
        }
        chefSection {
          backgroundColor
          aboveTitle
          title
          paragraphText
          button {
            title
            url
            target
          }
          imageOnTheRight {
            altText
            sourceUrl
          }
        }
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
}`



const IndexPage = ({ data }) => {
  //const content = data.wordpress.pageBy.HomePageSections
    
  return (
    <Layout>
       
      <Hero></Hero>

      <About></About>

      <Chef></Chef>

      <Menu></Menu>

      <Reviews></Reviews>

      <News></News>
            
      <Subscribe></Subscribe>      
            
    </Layout>
    
  )
}
  

export default IndexPage
