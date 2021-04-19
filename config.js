/**
 * 处理 sass
 * @param {import('ssr-types/src/third-party/webpack-chain').Config} configModule
 */
function handleSass(config) {
  config.module
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
 * 解析环境变量
 * @returns {{[key:string]:string}}
 */
function resolveEnv() {
  const res = require('dotenv').config({ path: '.env.development' })
  if (res.error) {
    throw res.error
  }
  const envs = res.parsed
  const envRes = {}
  Object.keys(envs).forEach(key => {
    return (envRes[`process.env.${key}`] = JSON.stringify(envs[key]))
  })
  return envRes
}

/**
 * 给客户端注入环境变量
 * @param {import('ssr-types/src/third-party/webpack-chain').Config} configPlugin
 */
const injectEnv = config => {
  const webpack = require('webpack')
  config.plugin('define-plugin').use(webpack.DefinePlugin, [resolveEnv()])
}

/**
 * @type {import('ssr').IConfig}
 */
module.exports = {
  chainBaseConfig: config => {
    handleSass(config)
    injectEnv(config)
    console.log(config.toString())
  },
}
