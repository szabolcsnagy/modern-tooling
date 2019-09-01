const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/, // apply to these files
        loader: 'babel-loader', // use this loader which will drive it through babel
        exclude: /node_modules/ // BUT NOT these js files
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/AppTemplate.html'
    })
  ],
  resolve: {
    alias: { 'react-dom': '@hot-loader/react-dom' }
  }
}
