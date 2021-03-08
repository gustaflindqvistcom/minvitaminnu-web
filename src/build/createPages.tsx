
export const createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const pageTemplate = path.resolve(`src/pages/page.js`)
    const result = await graphql(`
      query {
        allSanityPage {
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

    result.data.allSanityPage.edges.forEach(edge => {
        createPage({
            path: `${edge.node.slug.current}`,
            component: pageTemplate,
            context: {
                title: edge.node.title,
            },
        })
    })
}