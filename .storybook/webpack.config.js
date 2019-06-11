const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false'

module.exports = async ({ config }) => {
  // Filter out some rules from create-react-app's webpack configuration.
  const lintRule = config.module.rules.find(
    item => '.js'.match(item.test) && item.enforce === 'pre',
  )
  const sassRule = config.module.rules.find(item => '.sass'.match(item.test))
  const sassModuleRule = config.module.rules.find(
    item => '.module.sass'.match(item.test) && !item.exclude,
  )
  const babelRule = config.module.rules.find(
    item => item.loader && item.loader.includes('babel-loader'),
  )

  // Style files regexes
  const lessRegex = /\.less$/
  const lessModuleRegex = /\.module\.less$/

  // Common function to get less loader'use list by sassRule in CAR's webpack configuration.
  const getLessUse = sassRule =>
    sassRule.use
      .filter(item => {
        const loaderPath = typeof item === 'string' ? item : item.loader
        return !loaderPath.includes('sass-loader')
      })
      .concat({
        loader: require.resolve('less-loader'),
        options: {
          sourceMap: shouldUseSourceMap,
          javascriptEnabled: true,
        },
      })

  // 1. Exclude files in node_modules using eslint-loader.
  lintRule.exclude = [/node_modules/]

  // 2. Adds support for LESS (using .less extensions).
  config.module.rules.push({
    test: lessRegex,
    exclude: lessModuleRegex,
    use: getLessUse(sassRule),
    sideEffects: true,
  })

  // 3. Adds support for CSS Modules, but using LESS (using .module.less extensions).
  config.module.rules.push({
    test: lessModuleRegex,
    use: getLessUse(sassModuleRule),
  })

  // 4. Added bable plugin, such as babel-plugin-import.
  // https://github.com/ant-design/babel-plugin-import
  babelRule.options.plugins.push([
    require.resolve('babel-plugin-import'),
    { libraryName: 'antd', style: true },
  ])

  return config
}
