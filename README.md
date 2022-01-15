# Learn-WebGl-With-Rust
From [learnopengl.com](https://learnopengl.com/) translated to webgl with rust. 

## How to run code ! 

in the ***webpack.config.js*** file, change the CrateDirectory's path to desired chapter.

```js
new WasmPackPlugin({
    crateDirectory: path.resolve(__dirname, "./src/chapter-1 Getting Started"), 
    outDir : "../../pkg"
})
```
and run 

```bash 
npm run refresh
```