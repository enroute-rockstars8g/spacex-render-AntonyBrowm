const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "main-[fullhash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "../public"),
    },
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(m?js)|(ts)|(tsx)|(jsx)|(css)$/,
        exclude: /(node_modules|bower_components|public)/,
        use:
        {
          loader: "babel-loader", 
        },
      },
      {
        test: /\.css$/,
        // the order of `use` is important!
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".jsx", ".tsx"],
  },
};
