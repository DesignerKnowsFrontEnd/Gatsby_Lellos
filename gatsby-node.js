const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
    {
      allWpPost {
        nodes {
          id
          uri
        }
      }
      allWpPage {
        nodes {
          id
          uri
        }
      }
    }
  `);

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors);
  }

  // Access query results via object destructuring
  const pages = result.data.allWpPage.nodes;

  const pageTemplate = path.resolve(`./src/templates/page.js`);
  // We want to create a detailed page for each post node.
  // The path field stems from the original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Post ID is prefixed with 'POST_'
  pages.forEach((page) => {
    actions.createPage({
      path: `${page.uri}`,
      component: require.resolve(pageTemplate),
      context: {
        id: page.id,
      },
    });
  });

  // Access query results via object destructuring
  const posts = result.data.allWpPost.nodes;

  const postTemplate = path.resolve(`./src/templates/post.js`);
  // We want to create a detailed page for each post node.
  // The path field stems from the original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Post ID is prefixed with 'POST_'
  posts.forEach((post) => {
    actions.createPage({
      path: `our-news${post.uri}`,
      component: require.resolve(postTemplate),
      context: {
        id: post.id,
      },
    });
  });
};
