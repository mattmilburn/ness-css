const path = require( 'path' );
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: path.resolve( process.cwd(), 'index.js' ),
  output: {
    path: path.resolve( process.cwd(), 'dist' ),
    filename: 'ness.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: __dirname + '/.config/postcss.config.js'
              }
            }
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin( {
      filename: 'ness.bundle.css',
    } ),
  ],
};
