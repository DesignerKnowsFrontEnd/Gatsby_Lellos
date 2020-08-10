import React from 'react';
import '../../node_modules/slick-carousel/slick/slick';
import '../../node_modules/@fortawesome/fontawesome-free/js/fontawesome';
import '../../node_modules/@fortawesome/fontawesome-free/js/brands';
import '../../node_modules/@fortawesome/fontawesome-free/js/regular';
import '../../node_modules/@fortawesome/fontawesome-free/js/solid';
import '../../node_modules/@fortawesome/fontawesome-free/js/v4-shims';
import Layout from '../components/layout';
import Hero from '../components/home/hero';
import About from '../components/home/about';
import Chef from '../components/home/chef';
import Menu from '../components/home/menu';
import Reviews from '../components/home/reviews';
import News from '../components/home/news';
import Subscribe from '../components/subscribe';

export const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/" } }) {
      nodes {
        title
        uri
        id
        HomePageSections {
          heroSection {
            aboveTitle
            title
            paragraphText
            button {
              target
              title
              url
            }
            backgroundImage {
              altText
              localFile {
                childImageSharp {
                  fluid {
                    srcSet
                  }
                }
              }
            }
            facebookLink
            instagramLink
            tripAdvisorLink
          }
          aboutSection {
            aboveTitle
            title
            paragraphtext
            button {
              target
              title
              url
            }
            image {
              altText
              localFile {
                childImageSharp {
                  fluid {
                    srcSet
                  }
                }
              }
            }
          }
          chefSection {
            backgroundColor
            aboveTitle
            title
            paragraphText
            button {
              target
              title
              url
            }
            imageOnTheRight {
              altText
              localFile {
                childImageSharp {
                  fluid {
                    srcSet
                  }
                }
              }
            }
          }
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
          reviewSection {
            backgroundColor
            aboveTitle
            title
          }
          newsSection {
            aboveTitle
            title
            button {
              target
              title
              url
            }
          }
        }
      }
    }
  }
`;

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
  );
};

export default IndexPage;
