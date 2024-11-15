const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/scripts.js', // The entry file for your project
  output: {
    filename: 'bundle.js', // Output the bundle directly to the root
    path: path.resolve(__dirname, './'), // Root of the project (not inside dist)
    publicPath: '/', // Ensure assets are served from the root
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Use your own HTML template
      filename: 'index.html', // Output the HTML directly to the root
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // Look for JavaScript files
        exclude: /node_modules/, // Exclude the node_modules folder
        use: {
          loader: 'babel-loader', // Use Babel to transpile the code
          options: {
            presets: ['@babel/preset-env'], // Use the preset for ES6+ compatibility
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],  // Add these to handle CSS
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, './'), // Serve static files directly from the root
    open: true, // Automatically open the browser when starting the dev server
    hot: true, // Enable Hot Module Replacement
    port: 8080, // Custom port
    historyApiFallback: true, // For handling routing
  },
};
