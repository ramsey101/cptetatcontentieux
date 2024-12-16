import CleanWebpackPlugin from "clean-webpack-plugin";

const fontRegex = /\.(eot|woff|woff2|ttf|svg)$/;

export default {
  entry: "./src",
  output: {
    path: "./dist",
    filename: "roboto-base64.js",
    libraryTarget: "umd"
  },
  module: {
    loaders: [{
      test: fontRegex,
      loader: "base64-loader"
    }]
  },
  externals: (context, request, done) => {
    if (!request.startsWith("./") && !fontRegex.test(request)) return done(null, request);
    done();
  },
  plugins: [
    new CleanWebpackPlugin(["dist"])
  ]
};
