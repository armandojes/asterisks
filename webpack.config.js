const path = require('path')
const webpack = require('webpack')
const ExtracCssPlugin = require('mini-css-extract-plugin')

const config = {
  entry: ['regenerator-runtime/runtime', path.resolve(__dirname, 'source/index.jsx')],
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: '/(node_modules)/',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: '> 0.25%, not dead'
              }
            ],
            '@babel/preset-react'
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: ExtracCssPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      hooks: path.resolve(__dirname, './source/app/hooks'),
      helpers: path.resolve(__dirname, './source/app/helpers'),
      components: path.resolve(__dirname, './source/app/components'),
      ducks: path.resolve(__dirname, './source/app/ducks')
    }
  },
  plugins: [
    new ExtracCssPlugin({
      filename: 'styles.css'
    }),
    new webpack.DefinePlugin({
      isProduction: process.env.NODE_ENV === 'production'
    })
  ],
  target: 'web'
}

module.exports = config
