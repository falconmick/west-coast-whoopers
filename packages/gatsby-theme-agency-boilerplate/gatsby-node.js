const Debug = require(`debug`)
const fs = require(`fs`)
const path = require(`path`)
const mkdirp = require(`mkdirp`)

const debug = Debug(`gatsby-theme-mdx-atom`)

// These are customizable theme options we only need to check once
let basePath
let contentPath

// Ensure that content directories exist at site-level
exports.onPreBootstrap = ({ store }, themeOptions) => {
    debug(`Step onPreBootstrap`)
    const { program } = store.getState()

    basePath = themeOptions.basePath || `/`
    contentPath = themeOptions.contentPath || `src/pages`

    const dirs = [
        path.join(program.directory, contentPath),
    ]

    dirs.forEach(dir => {
        debug(`Initializing ${dir} directory`)
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir)
        }
    })
    debug(`Step onPreBootstrap end`)
}