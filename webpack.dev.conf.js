var path = require( 'path' )
var webpack = require( 'webpack' )

module.exports = {
  entry: './src/main.js',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.resolve( __dirname, './dist' ),
    publicPath: '/dist/',
    filename: 'build.js'
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
    hot: true,
    open: true,
  },
  devtool: '#cheap-module-eval-source-map',
}
console.log( 'dev', process.env.NODE_ENV );
