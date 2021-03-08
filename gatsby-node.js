const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Your Gatsby site has been built!`)
}

exports.createPages = async ({ graphql, actions }) => {
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

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const pageTemplate = path.resolve(`src/pages/vitamin.js`)
    const result = await graphql(`
      query {
        allSanityVitamin {
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

    result.data.allSanityVitamin.edges.forEach(edge => {
        createPage({
            path: `${edge.node.slug.current}`,
            component: pageTemplate,
            context: {
                title: edge.node.title,
            },
        })
    })
}
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const pageTemplate = path.resolve(`src/pages/symptom.js`)
    const result = await graphql(`
      query {
        allSanitySymptom {
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

    result.data.allSanitySymptom.edges.forEach(edge => {
        createPage({
            path: `${edge.node.slug.current}`,
            component: pageTemplate,
            context: {
                title: edge.node.title,
            },
        })
    })
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const pageTemplate = path.resolve(`src/pages/post.js`)
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

    result.data.allSanityPost.edges.forEach(edge => {
        createPage({
            path: `${edge.node.slug.current}`,
            component: pageTemplate,
            context: {
                title: edge.node.title,
            },
        })
    })
}