/**
 *  修改图片静态资源打包规则，去除对字体文件的筛选, 主要修复组件库中图标字体文件打包不正确的问题
 * @param {import('ssr-types/src/third-party/webpack-chain').Config} configModule
 */
function fixImageConfig(config) {
  config.module.rule('images').test(/\.(jpe?g|png|gif)(\?[a-z0-9=.]+)?$/)
}

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
    .options({
      additionalData: `
        @import "web/styles/tools/_index.scss";
        @import "web/styles/settings/_index.scss";
      `,
    })
    .end()
}

/**
 * 解析环境变量并注入服务端
 * @returns {{[key:string]:string}}
 */
function resolveEnv() {
  const envList = {
    production: '.env.production',
    development: '.env.development',
  }
  const res = require('dotenv').config({ path: `${envList[process.env.NODE_ENV]}` })
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
    fixImageConfig(config)
    handleSass(config)
    injectEnv(config)
    // console.log(config.toString())
  },
  // 用于插入外部 js
  customeHeadScript: [
    {
      describe: {
        src: '//at.alicdn.com/t/font_2507709_sheicyllsc.js',
      },
      content: '',
    },
  ],
}
