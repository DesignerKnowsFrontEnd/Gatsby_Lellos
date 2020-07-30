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
import Reviews from '../components/home/reviews';
import News from '../components/home/news';
import Menu from '../components/home/menu';
import Subscribe from '../components/subscribe';

export const query = graphql`
  {
    allWpPage(filter: { uri: { eq: "/" } }) {
      nodes {
        title
        uri
        id
        HomePageSections {
          ...HeroSection
          ...AboutSection
          ...ChefSection
          ...MenuSection
          ...ReviewsSection
          ...NewsSection
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
