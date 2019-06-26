module.exports = function(api) {
  const env = api.cache(() => process.env.TARGET_ENV)
  return {
    presets: [
      [
        '@babel/env',
        {
          modules: env === 'esm' ? false : 'auto',
        },
      ],

      ['react-app', { flow: false, typescript: true, absoluteRuntime: false }],
    ],

    plugins: [['babel-plugin-import', { libraryName: 'antd', style: true }]],

    ignore: ['src/__tests__/', 'src/__stories__/'],
  }
}
