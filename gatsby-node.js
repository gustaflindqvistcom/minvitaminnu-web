const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

async function createPages(pathPrefix = "/", graphql, actions, reporter) {
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

  const pageEdges = (result.data.allSanityPage || {}).edges || [];
  pageEdges
    // .filter((edge) => !isFuture(edge.node.publishedAt))
    .forEach((edge) => {
      const { id, slug = {} } = edge.node;
      const path = `${pathPrefix}/${slug.current}/`;
      reporter.info(`Creating pages: ${path}`);
      createPage({
        path,
        component: pageTemplate,
        context: { id },
      });
    });

}

async function createVitamins(pathPrefix = "/vitaminer", graphql, actions, reporter) {
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
  const vitaminEdges = (result.data.allSanityVitamin || {}).edges || [];
  vitaminEdges
    // .filter((edge) => !isFuture(edge.node.publishedAt))
    .forEach((edge) => {
      const { id, slug = {} } = edge.node;
      const path = `${pathPrefix}/${slug.current}/`;
      reporter.info(`Creating vitaminer: ${path}`);
      createPage({
        path,
        component: pageTemplate,
        context: { id },
      });
    });
}

async function createSymptoms(pathPrefix = "/symptom", graphql, actions, reporter) {
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

  const symptomEdges = (result.data.allSanitySymptom || {}).edges || [];
  symptomEdges
    // .filter((edge) => !isFuture(edge.node.publishedAt))
    .forEach((edge) => {
      const { id, slug = {} } = edge.node;
      const path = `${pathPrefix}/${slug.current}/`;
      reporter.info(`Creating symptom: ${path}`);
      createPage({
        path,
        component: pageTemplate,
        context: { id },
      });
    });
}

async function createBlogPostPages(pathPrefix = "/blogg", graphql, actions, reporter) {
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

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createPages("/", graphql, actions, reporter);
  await createVitamins("/vitaminer", graphql, actions, reporter);
  await createSymptoms("/symptom", graphql, actions, reporter);
  await createBlogPostPages("/blogg", graphql, actions, reporter);
};