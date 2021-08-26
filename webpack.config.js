var webpack = require('webpack');
var path = require('path');
var package = require('./package.json');

// variables
var isProduction = process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';
var sourcePath = path.join(__dirname, './src');
var outPath = path.join(__dirname, './build');

module.exports = {
  // context: sourcePath,
  // devServer: {
  //   contentBase: path.resolve(__dirname, "./public"),
  //   historApiFallback: true
  // },
  // entry: {
  //   app: './src/index.tsx'
  // },
  // output: {
  //   path: outPath,
  //   filename: isProduction ? '[contenthash].tsx' : '[hash].tsx',
  //   chunkFilename: isProduction ? '[name].[contenthash].ts' : '[name].[hash].ts'
  // },
  // target: 'web',
  // resolve: {
  //   extensions: ['.js', '.ts', '.tsx'],
  //   // Fix webpack's default behavior to not load packages with jsnext:main module
  //   // (jsnext:main directs not usually distributable es6 format, but es6 sources)
  //   mainFields: ['module', 'browser', 'main'],
  //   alias: {
  //     app: path.resolve(__dirname, '/./src/')
  //   }
  // },
  // module: {
  //   rules: [
  //     // .ts, .tsx
  //     {
  //       test: /\.jpg|\.jpeg|\.png|\.css|\.scss|\.tsx?$/,
  //       use: [
  //         !isProduction && {
  //           loader: 'babel-loader'
  //         },
  //         'ts-loader'
  //       ].filter(Boolean)
  //     }
  //   ]
  // }
  devServer: {
    contentBase: path.resolve(__dirname, "./public"),
    historyApiFallback: true
  },
  entry: path.resolve(__dirname, "./src/store/store.ts"),
  
  output: outPath,
  module: {
    rules: [
      {
        // test: /\.js$/,
        test: /\.jpg|\.jpeg|\.png|\.css|\.scss|\.tsx?$/,
        use: "babel-loader"
      }
    ]
  },
  output: {
    filename: "bundle.js"
  }
};