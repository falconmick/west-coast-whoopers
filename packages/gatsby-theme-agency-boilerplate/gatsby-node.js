// const Debug = require(`debug`)
// const fs = require(`fs`)
// const path = require(`path`)
// const mkdirp = require(`mkdirp`)
//
// const debug = Debug(`gatsby-theme-agency-boilerplate`)
//
// // These templates are simply data-fetching wrappers that import components
// const DebugDump = require.resolve(`./src/templates/DebugDump`)
//
// // These are customizable theme options we only need to check once
// let basePath
// let contentPath
//
// // Ensure that content directories exist at site-level
// exports.onPreBootstrap = ({ store }, themeOptions) => {
//     debug(`Step onPreBootstrap`)
//     const { program } = store.getState()
//
//     basePath = themeOptions.basePath || `/`
//     contentPath = themeOptions.contentPath || `src/pages`
//
//     const dirs = [
//         path.join(program.directory, contentPath),
//     ]
//
//     dirs.forEach(dir => {
//         debug(`Initializing ${dir} directory`)
//         if (!fs.existsSync(dir)) {
//             mkdirp.sync(dir)
//         }
//     })
//     debug(`Step onPreBootstrap end`)
// }
//
// exports.createPages = async ({ graphql, actions, reporter }) => {
//     debug(`Step createPages`)
//     const { createPage } = actions
//
//     const result = await graphql(`
//     {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//       allPagesYaml {
//         edges {
//           node {
//             slug
//             character
//           }
//         }
//       }
//     }
//   `)
//
//     if (result.errors) {
//         reporter.panic(result.errors)
//     }
//
//     // Create Posts and Post pages.
//     const {
//         allPagesYaml,
//         site: { siteMetadata },
//     } = result.data
//
//     const yamlPages = allPagesYaml.edges
//     const { title: siteTitle } = siteMetadata
//
//     // Create a page for each Post
//     yamlPages.forEach(({node: yamlPage}) => {
//         const { slug } = yamlPage
//         createPage({
//             path: slug,
//             component: DebugDump,
//             context: {
//                 page: yamlPage,
//                 siteTitle,
//             },
//         })
//     })
//
//
//     debug(`Step createPages end`)
// }