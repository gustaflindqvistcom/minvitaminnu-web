export async function createBlogPostPages(pathPrefix = "/blogg", graphql, actions, reporter) {
  exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const pageTemplate = path.resolve(`../pages/post.tsx`)
    const result = await graphql(`
      query {
        allSanityPost{
          edges {
            node {
              slug { current },
              title
            }
          }
        }
      }
    `);

    if (result.errors) {
      throw result.errors;
    }

    const postEdges = (result.data.allSanityPost || {}).edges || [];
    postEdges
      // .filter((edge) => !isFuture(edge.node.publishedAt))
      .forEach((edge) => {
        const { id, slug = {} } = edge.node;
        const path = `${pathPrefix}/${slug.current}/`;
        reporter.info(`Creating bloggposter: ${path}`);
        createPage({
          path,
          component: pageTemplate,
          context: { id },
        });
      });
  }
}