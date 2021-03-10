// import { CreatePagesArgs } from "gatsby";
// import { resolve } from "path";

// export const createPostPages = async ({
//   pathPrefix,
//   graphql,
//   actions
// }: CreatePagesArgs) => {
//   const pageTemplate = resolve(`../templates/post.js`)
//   const result = await graphql(`
//             query {
//               allSanityPost{
//                 edges {
//                   node {
//                     slug { current },
//                     title
//                   }
//                 }
//               }
//             }
//           `);

//   if (result.errors) {
//     throw result.errors;
//   }

//   const nodes = result.data?.allSanityPost?.nodes || [];

//   for (const node of nodes) {
//     const path = `${pathPrefix}/${slug.current}/`;

//     createPage({
//       path,
//       component: pageTemplate,
//       context: { id },
//     });
//   }
// };

// async function createPostPages(pathPrefix = "/blogg", graphql, actions, reporter) {
//   const { createPage } = actions
//   const pageTemplate = path.resolve(`../templates/post.js`)
//   const result = await graphql(`
//       query {
//         allSanityPost{
//           edges {
//             node {
//               slug { current },
//               title
//             }
//           }
//         }
//       }
//     `);

//   if (result.errors) {
//     throw result.errors;
//   }

//   const postEdges = (result.data.allSanityPost || {}).edges || [];
//   postEdges
//     // .filter((edge) => !isFuture(edge.node.publishedAt))
//     .forEach((edge) => {
//       const { id, slug = {} } = edge.node;
//       const path = `${pathPrefix}/${slug.current}/`;
//       reporter.info(`Creating bloggposter: ${path}`);
//       createPage({
//         path,
//         component: pageTemplate,
//         context: { id },
//       });
//     });
// }

// export default createPostPages;