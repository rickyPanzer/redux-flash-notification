module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "es5/index.js",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      { test: /\.css$/, loader: "style!css" },
      {
        use: ['css-loader', 'sass-loader'],
        test: /\.scss/
      },
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
    ]
  }
};
