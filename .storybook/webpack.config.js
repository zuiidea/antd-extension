const path = require('path')
const publicPath = require('react-scripts/config/paths').servedPath
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false'

module.exports = async ({ config }) => {
  const lintRules = config.module.rules.find(item => item.enforce === 'pre')
  const lessRegex = /\.less$/
  const lessModuleRegex = /\.module\.less$/
  const localIdentName = '[path][name]__[local]--[hash:base64:5]'

  lintRules.exclude = [/node_modules/]

  const sassRules = config.module.rules.find(item => '.sass'.match(item.test))

  const styleLoaders = sassRules.use.filter(item => {
    const loaderPath = typeof item === 'string' ? item : item.loader
    return loaderPath.indexOf('sass-loader') < 0
  })

  config.module.rules.push({
    test: lessRegex,
    exclude: lessModuleRegex,
    use: styleLoaders.concat({
      loader: require.resolve('less-loader'),
      options: {
        importLoaders: 2,
        sourceMap: shouldUseSourceMap,
        javascriptEnabled: true,
      },
    }),
    sideEffects: true,
  })

  config.module.rules.push({
    test: lessModuleRegex,
    use: styleLoaders.concat({
      loader: require.resolve('less-loader'),
      options: {
        importLoaders: 2,
        sourceMap: shouldUseSourceMap,
        modules: true,
        localIdentName,
        sourceMap: shouldUseSourceMap,
        javascriptEnabled: true,
      },
    }),
  })

  return config
}
