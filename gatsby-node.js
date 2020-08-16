const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      query {
        allContentfulBlogPost {
          edges {
            node {
              body {
                childMarkdownRemark {
                  html
                }
              }
              title
              updatedAt
              slug
            }
          }
        }
      }
    `).then((result) => {
      if (result.errors) {
        reject(() => {
          console.log("createPages Error!", result.errors);
        });
      }
      console.log("--- CreatePage Start --------------------");
      let counter = 0;
      result.data.allContentfulBlogPost.edges.forEach((item) => {
        const node = item.node;
        const md_body = node.body.childMarkdownRemark.html;
        const pathresolve = path.resolve("./src/templates/blogpost.js");
        console.log(`==== `, node.slug, ` ====`);
        const prev =
          typeof result.data.allContentfulBlogPost.edges[counter - 1] ===
          "undefined"
            ? 0
            : result.data.allContentfulBlogPost.edges[counter - 1].node.slug;

        const next =
          typeof result.data.allContentfulBlogPost.edges[counter + 1] ===
          "undefined"
            ? 0
            : result.data.allContentfulBlogPost.edges[counter + 1].node.slug;
        console.log(node.title, md_body, node.updatedAt, prev, prev);
        console.log(`slug`, `/blogpost/${node.slug}`);
        try {
          createPage({
            path: `/blogpost/${node.slug}`,
            component: pathresolve,
            context: {
              title: node.title,
              md_body: md_body,
              slug: node.slug,
              prev: prev,
              next: next,
            },
          });
        } catch (e) {
          console.log(e);
        }
        counter++;
      });
      console.log("--- CreatePage END --------------------");
      resolve();
    });
  });
};
