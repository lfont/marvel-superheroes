var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  // The standard entry point and output config
  entry: {
    index: "./src/index.tsx"
  },

  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    chunkFilename: "[id].js"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  module: {
    loaders: [
      // Extract css files
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          }})
      },
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },

  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // },

  // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
  plugins: [
    new ExtractTextPlugin("[name].css"),
    // Hide some information from the client.
    new webpack.NormalModuleReplacementPlugin(/\.\/url-data/, './url-data-client')
  ]
};
