const path = require('path');

module.exports = {  
  entry: "./src/index.ts",
  mode: "development",
  module: {
    rules: [
      {
        test: /¥.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [],
  devServer: {
    static: {
      directory: path.resolve(__dirname),
    },
    open: false,
    port: 8080,
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};