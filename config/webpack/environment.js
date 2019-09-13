const webpack = require('webpack')
const { resolve } = require('path')
const { environment, config } = require('@rails/webpacker')

environment.plugins.append('ContextReplacement',
  new webpack.ContextReplacementPlugin(
    /angular(\\|\/)core(\\|\/)(@angular|esm5)/,
    resolve(config.source_path)
  )
)