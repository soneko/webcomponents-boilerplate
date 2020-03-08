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
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};