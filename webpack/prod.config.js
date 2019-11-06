'use strict'

const webpack = require('webpack')
const validate = require('webpack-validator')

const common = require('./common')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = validate({
  entry: common.entry,

  output: common.output,

  plugins: [
    new ExtractTextPlugin('[name]-[hash].css'),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),

    // Não deixa duplicar arquivos chamados novamente
    new webpack.optimize.DedupePlugin(),

    // Ordena para carregar os mais leves primeiro
    new webpack.optimize.OccurrenceOrderPlugin(),

    new HtmlPlugin(common.htmlPluginConfig('template-prod.html'))
  ],

  module: {
    preLoaders: [common.standardPreLoader],

    loaders: [
      common.jsLoader,
      Object.assign({}, common.cssLoader, {
        loaders: undefined,
        loader: ExtractTextPlugin.extract.apply(null, common.cssLoader.loaders)
      })
    ]
  },

  resolve: common.resolve
})

/*
entry
    Ponto de entrada que indica qual módulo o webpack deve usar para iniciar a construção do gráfico interno de dependência.
    Ao definir um ponto de entrada, o webpack irá encontrar todas a dependências e fazer a importação.
    Por padrão o ponto de entrada é definido no arquivo ./src/index.js, mas é possível definir um arquivo diferente ou até
    mesmo múltiplos pontos de entrada no arquivo de configuração webpack.config.js.

Output
    A propriedade Output define o nome e local do pacote gerado pelo webpack.
    O diretório padrão é o ./dist e o arquivo ./dist/main.js.
    Para configurar, devemos definir um objeto output com as propriedades path e filename no arquivo de configuração do webpack:

*/
