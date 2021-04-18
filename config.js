/**
 * 处理 sass
 * @param {import('ssr-types/src/third-party/webpack-chain').Config.Module} configModule
 */
function handleSass(configModule) {
  configModule
    .rule('sass')
    .test(/\.s[ac]ss$/i)
    .use('hmr')
    .loader('css-hot-loader')
    .end()
    .use('mini-css')
    .loader(require('mini-css-extract-plugin').loader)
    .end()
    .use('css-loader')
    .loader('css-loader')
    .options({
      importLoaders: 2,
      modules: false,
    })
    .end()
    .use('postcss-loader')
    .loader('postcss-loader')
    .options({
      options: {
        ident: 'postcss',
      },
    })
    .end()
    .use('sass-loader')
    .loader('sass-loader')
    .end()
}

/**
 * @type {import('ssr').IConfig}
 */
module.exports = {
  chainBaseConfig: config => {
    handleSass(config.module)

    // console.log(config.toString())
  },
}
