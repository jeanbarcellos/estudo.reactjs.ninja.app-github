'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = validate({
  entry: path.join(__dirname, 'src', 'index'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js'
  },

  plugins: [
    new ExtractTextPlugin('[name]-[hash].css'),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),

    // Não deixa duplicar arquivos chamados novamente
    new webpack.optimize.DedupePlugin(),

    // Ordena para carregar os mais leves primeiro
    new webpack.optimize.OccurrenceOrderPlugin(),

    new HtmlPlugin({
      title: 'GitHub app',
      inject: false,
      template: path.join(__dirname, 'src', 'html', 'template.html')
    })
  ],

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'standard'
      }
    ],

    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: /src/,
        loader: ExtractTextPlugin.extract('style', 'css')
      }
    ]
  }
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
