const jsYaml = require(`js-yaml`)
const _ = require(`lodash`)
const path = require(`path`)
const GraphQLJSON = require('graphql-type-json')

async function onCreateNode(
    { node, actions, loadNodeContent, createNodeId, createContentDigest },
    pluginOptions
) {
    const { createNode, createParentChildLink } = actions

    function toPostPath(node) {
        const { dir } = path.parse(node.relativePath)
        return path.join(dir, node.name)
            .replace(/[\\\/]+/g, '/') // replaces \\ with /
            .replace(/\/index$/g, '') // replace /index to allow folder based blog posts
    }

    function transformObject(obj, id, type) {
        const yamlNode = {
            pageJson: JSON.stringify(obj),
            path: toPostPath(node),
            id,
            children: [],
            parent: node.id,
            internal: {
                contentDigest: createContentDigest(obj),
                type,
            },
        }
        createNode(yamlNode)
        createParentChildLink({ parent: node, child: yamlNode })
    }

    if (node.internal.mediaType !== `text/yaml`) {
        return
    }

    const content = await loadNodeContent(node)
    const parsedContent = jsYaml.load(content)

    transformObject(
        parsedContent,
        createNodeId(`${node.id} >>> YAML-PAGE`),
        _.upperFirst(_.camelCase(`Yaml Page`))
    )
}

exports.onCreateNode = onCreateNode

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
    scalar JSON
  `
    createTypes(typeDefs)
}

exports.createResolvers = ({ createResolvers }) => {
    const resolvers = {
        JSON: GraphQLJSON,
    }
    createResolvers(resolvers)
}