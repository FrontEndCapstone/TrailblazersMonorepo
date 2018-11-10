const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    reviews: './Reviews/client/src/index.js',
    comparisons: './ProductComparisons/client/src/index.jsx',
    descriptions: './ProdcutDescription/client/src/index.jsx',
    details: './Product-Details/client/src/index.jsx',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-react', '@babel/preset-env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'bundles'),
    publicPath: 'bundles',
    filename: '[name].bundle.js',
  },
  plugins: [new BundleAnalyzerPlugin({ analyzerMode: 'static' })],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
