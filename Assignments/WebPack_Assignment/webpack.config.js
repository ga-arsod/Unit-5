const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(".", "build"), //folder generation
        filename: "bundle.js", // filename
    },
    mode: "production",
    module: {
        rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"]},
        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true, // webpack@1.x
                  disable: true, // webpack@2.x and newer
                },
              },
            ],
          }
        ],
      },
}