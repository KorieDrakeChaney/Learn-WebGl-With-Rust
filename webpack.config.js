const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
  entry: 
  {
    main : "./web/main.js",
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  mode: "development",
  plugins: [
    new CopyPlugin({
        patterns: [
          { from: './public/index.html'},
        ],
    }), 
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, "./src/chapter-1"), 
      outDir : "../../pkg"
    })
  ],
    experiments : {
        asyncWebAssembly : true
    }

};
