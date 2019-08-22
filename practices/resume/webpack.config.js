const path = require("path");
const styleLintPlugins = require("stylelint-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      filename: "index.html",
      title: "resume",
      template: "./src/index.html",
      inject: true,
      hash: true
    }),
    new styleLintPlugins({
      context: "src",
      configFile: path.resolve(__dirname, "./stylelint.config.js"),
      files: "sass/**/*.scss",
      failOnError: false,
      quiet: true,
      syntax: "scss"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "resolve-url-loader"
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sourceMapContents: false
            }
          }
        ]
      },
      {
        test: require.resolve("jquery"),
        use: [
          {
            loader: "expose-loader",
            options: "jquery"
          },
          {
            loader: "expose-loader",
            options: "$"
          }
        ]
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        },
        // 排除node_modules
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: "eslint-loader",
        enforce: "pre",
        include: [path.resolve(__dirname, "src")],
        options: {
          formatter: require("eslint-friendly-formatter")
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 50,
              outputPath: "images"
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: ["html-withimg-loader"]
      }
    ]
  },
  devServer: {
    contentBase: "./src",
    host: "localhost",
    port: 5200,
    watchContentBase: true
  }
};
