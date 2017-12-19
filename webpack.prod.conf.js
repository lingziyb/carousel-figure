var path = require( 'path' )
var webpack = require( 'webpack' )

module.exports = {
  entry: './src/carousel/index.vue',
  output: {
    path: path.resolve( __dirname, './dist' ),
    publicPath: '/dist/',
    filename: 'carousel.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: [ '*', '.js', '.vue', '.json' ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  devtool: '#cheap-module-source-map'
}

module.exports.plugins = (module.exports.plugins || []).concat( [
  new webpack.optimize.UglifyJsPlugin( {
    compress: {
      warnings: false
    }
  } )
] );
