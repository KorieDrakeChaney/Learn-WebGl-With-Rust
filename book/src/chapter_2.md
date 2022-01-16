<br>
<h1 style = "text-align: center;"> Chapter 1 : Hello Canvas </h1>

--- 

<div style = "background-color : rgba(0, 0, 0, 0.05); text-align: center; ">
<span style="font-size : 30px;"><b>Before We Start</b></span>
</div>

<div style = "padding:2%;background-color : rgba(0, 0, 0, 0.05);">
Before we get into creating stunning visuals, and starting to make things. We need to have a canvas to draw onto. This section will be the introduction to a new technology along side wasm_bindgen. We're introducing <a target="_blank" href="https://rustwasm.github.io/wasm-bindgen/web-sys/index.html"><b>web-sys</b></a>, a crate that allows us to add more features on top of wasm-bindgen. From the web-sys guide, this crates allows us to use: 
<ul>
  <li><b style="color : rgba(71, 155, 205, 1)">window.fetch</b></li>
  <li><b style="color : rgba(71, 155, 205, 1)">Node.prototype.appendChild</b></li>
  <li><b><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API">WebGL</a></b></li>
  <li><b style="color : rgba(71, 155, 205, 1)">WebAudio</b></li>
</ul>

Now for the readers who have spotted this, you may already know why we're using this. WebGL, is the Rendering API that allows us to create 3D/2D graphics. Without WebGL, we have nothing ;-;.
<div style = "padding:5%;background-color : rgba(0, 0, 0, 0.075);">
    <i style="color:grey">Yes there's another technology called WebGPU, but as of writing this, is <a target= "_blank" href="https://caniuse.com/webgpu">not supported by any browsers</a>, some browsers do allow to enable it, but it's far too unfunctional</i>  
</div>

So for this chapter, we will be adding <b>web-sys</b> in our <b style="color:orange">Cargo.toml</b> file:

</div>

``` toml
[package]
name = "~~~"
version = "~~~"
authors = "~~~"
edition = "~~~"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "*"

[depencies.web-sys]
version = "*"
```
<div style = "padding:2%;background-color : rgba(0, 0, 0, 0.05);">


But that's not all, we do have to add some features from the crate manually. For this chapter, all we need access to:

<ul>
  <li><b style="color : rgba(71, 155, 205, 1)">the Document</b> to add reference elements</li>
  <li><b style="color : rgba(71, 155, 205, 1)">the Canvas</b> to write on</li>
  <li><b style="color : rgba(71, 155, 205, 1)">Window</b> to write on</li>
  <li><b style="color : rgba(71, 155, 205, 1)">WebGL's API</b> to render</li>
</ul>

So our crate should look like this:

</div>

``` toml
[dependencies.web-sys]
version = "*"
features = [
    'Document', 
    'HtmlCanvasElement', 
    'Window', 
    'WebGl2RenderingContext'
]
```
<div style = "padding:2%;background-color : rgba(0, 0, 0, 0.05);">


and in chapters to come, we will keep adding to this. 
</div>

---

<div style = "background-color : rgba(0, 0, 0, 0.05); text-align: center; ">
<span style="font-size : 30px;"><b>Setting up our html file</b></span>
</div>

<div style = "padding:2%;background-color : rgba(0, 0, 0, 0.05);">
Our document does need a canvas element for us to reference later. So to start, in your <b style="color:rgba(50, 150, 150, 1);">public</b> directory, go into your <b style="color:orange">index.html</b> file and write the following line in your body:

</div> 

```html
<body>
    <canvas id="canvas"></canvas>
</body>
```
<div style = "padding:2%;background-color : rgba(0, 0, 0, 0.05);">
 
To add finishing touches, we can style the canvas element in our html file, so that is takes up the whole screen:

</div>

```html
<style>
    #canvas { 
    width : 100%;
    height : 90vh;
    }
</style>
```

<div style = "padding:2%;background-color : rgba(0, 0, 0, 0.05);">

You can even for fun change the < title > in the < head > section to whatever you want, have fun with this tutorial :).

</div>

```html
<head>
    <title>~~~</title>
</head>
```
---


<div style = "background-color : rgba(0, 0, 0, 0.05); text-align: center; ">
<span style="font-size : 30px;"><b>Understanding Wasm-Bindgen</b></span>
<br>
<span style="color:grey">From this point onwards, everything will be in rust</span>
</div>

<div style = "padding:2%;background-color : rgba(0, 0, 0, 0.05);">

In our <b style="color:rgba(50, 150, 150, 1);">src</b> directory, go into your <b style="color:orange">lib.rs</b>

we should see this : 
</div>

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str); // imports alert function from javascript
}

#[wasm_bindgen(start)] // at the start 
pub fn main() {
    alert("Hello World!"); 
}
```

<div style = "padding:2%;background-color : rgba(0, 0, 0, 0.05);">
To dissect this code:
</div>

```rust
use wasm_bindgen::prelude::*; // imports wasm_bindgen crate
```

<div style = "padding:2%;background-color : rgba(0, 0, 0, 0.05);">
the  <b style="color:rgba(232, 50, 37, 1)">#[wasm_bindgen]</b> <a target="_blank" href="https://rustwasm.github.io/wasm-bindgen/reference/attributes/index.html">macro helps for controlling precisely how exports are exported and how imports are imported</a>

anything after a <b>#[wasm_bindgen]</b> macro with a <b>extern "C" brackets will be javascript imports</b> :  

</div>

```rust
#[wasm_bindgen]
extern "C" {
    fn alert(s: &str); // imports alert function from javascript
}
```
<div style = "padding:2%;background-color : rgba(0, 0, 0, 0.05);">
anything after a <b>#[wasm_bindgen]</b> macro that is <b>public</b> will be exported :
</div>

```rust
#[wasm_bindgen(start)] // (start) means this function will be called at the start
pub fn main() {
    alert("Hello World!"); 
}
```

<div style = "padding:2%;background-color : rgba(0, 0, 0, 0.05);">
We can get rid of the import and use of alert in our main function and just leave our code like this: 
</div>

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen(start)]
pub fn main() {
}
```
<div style = "background-color : rgba(0, 0, 0, 0.05); text-align: center; ">
<span style="font-size : 30px;"><b>Using Web-Sys</b></span>
</div>

<div style = "padding:2%;background-color : rgba(0, 0, 0, 0.05);">
let's use <b>web_sys</b> now by importing it in with the WebGl2RenderingContext that we put in our features earlier.
</div>

```rust
use wasm_bindgen::prelude::*;
use web_sys::{WebGl2RenderingContext};
use wasm_bindgen::JsCast; // A trait for checked and unchecked casting between JS types.
```

<div style = "padding:2%;background-color : rgba(0, 0, 0, 0.05);">
Now we can reference the document get the canvas from that document, and create our WebGL context.
</div>
<br>

<div style="background-color : rgba(191, 245, 205, 0.75); padding:2% 1%"><span style="color : rgba(23, 87, 40, 1)">Important tip, always check the <a target="_blank" href="https://rustwasm.github.io/wasm-bindgen/api/web_sys/">web-sys</a> documentation for learning more about it's features </span></div>

```rust
#[wasm_bindgen(start)]
pub fn main() {
    let document = web_sys::window().unwrap().document().unwrap(); // get the document
    let canvas = document.get_element_by_id("canvas").unwrap(); // retrieves jsvalue to the canvas element
    let canvas: web_sys::HtmlCanvasElement = canvas.dyn_into::<web_sys::HtmlCanvasElement>().unwrap(); // gets the element itself
}
```

<div style = "padding:2%;background-color : rgba(0, 0, 0, 0.05);">
Now if you disect this , it shouldn't be all that scary, first we retrieve <b>window</b>, by unwrapping, then we get the <b>document</b> by unwrapping.

After getting the document, we can get the canvas by doing a normal javascript function<b>
<a style="color:rgba(100, 155, 155, 1); text-decoration:underline;" href="https://docs.rs/web-sys/0.3.27/web_sys/struct.Document.html#method.get_element_by_id" target="_blank">get_element_by_id</a>("~~~~")</b>, which the id we put for our canvas element was "canvas", then of course we unwrap.

Now what we retrieved was a <b><a href="https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/struct.JsValue.html" style="color:rgba(100, 155, 155, 1); text-decoration:underline;"  target="_blank">JSvalue</a></b>, and as the documentation says, doesn't live in rust, we would have to retrieve it's value, by using <b><a href="https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/trait.JsCast.html#method.dyn_into" style="color:rgba(100, 155, 155, 1); text-decoration:underline;"  target="_blank">dyn_init</a>::<~~~></b>, which then gives up the rust value of canvas.  Next step is to get the <a href ="https://rustwasm.github.io/wasm-bindgen/api/web_sys/struct.WebGl2RenderingContext.html" target="_blank">WebGL2RenderingContext</a> by :
</div>

```rust
#[wasm_bindgen(start)]
pub fn main() {
    let gl = canvas.get_context("webgl2").unwrap().unwrap().dyn_into::<WebGl2RenderingContext>().unwrap();
}
```

<div style = "padding:2%;background-color : rgba(0, 0, 0, 0.05);">
Now this should make a little more sense, first we use the function <b>
<a style="color:rgba(100, 155, 155, 1); text-decoration:underline;" href="https://rustwasm.github.io/wasm-bindgen/api/web_sys/struct.HtmlCanvasElement.html#method.get_context" target="_blank">get_context</a>("~~~~")</b> to retrive the <b>JSValue</b> of the context, then we <b>dyn_into</b> it to retrive the rust value.

Now if we refreshed now, there still wouldn't sign of anything. If everything worked, we should have the <b>WebGL2RenderingContext</b>, which allows us to use <a href="https://rustwasm.github.io/wasm-bindgen/api/web_sys/struct.WebGl2RenderingContext.html" target="_blank">WebGL2's API</a>, to show that we do have it, let's try a function, <b>
<a style="color:rgba(100, 155, 155, 1); text-decoration:underline;" href="https://rustwasm.github.io/wasm-bindgen/api/web_sys/struct.WebGl2RenderingContext.html#method.clear" target="_blank">clear</a>("~~~~")</b>, and clear the <a href="https://rustwasm.github.io/wasm-bindgen/api/web_sys/struct.WebGl2RenderingContext.html#method.clear" target="_blank">color_buffer_bit</a> to a color using the function <a style="color:rgba(100, 155, 155, 1); text-decoration:underline;" href="https://rustwasm.github.io/wasm-bindgen/api/web_sys/struct.WebGl2RenderingContext.html#method.clear_color" target="_blank">clear_color</a>("~~~~")</b>, and set the RGBA values to the color red, a very noticable color.
</div>

```rust
#[wasm_bindgen(start)]
pub fn main() {
    gl.clear_color(1.0, 0.0, 0.0, 1.0);
    gl.clear(WebGl2RenderingContext::COLOR_BUFFER_BIT);
}
```

<div style = "padding:2%;background-color : rgba(0, 0, 0, 0.05);">
Now if you followed along, you should have your rust file looking like this:
</div>

```rust
#[wasm_bindgen(start)]
pub fn main() {
use wasm_bindgen::prelude::*;
use web_sys::{WebGl2RenderingContext};
use wasm_bindgen::JsCast;

#[wasm_bindgen(start)]
pub fn main() {
    let document = web_sys::window().unwrap().document().unwrap();
    let canvas = document.get_element_by_id("canvas").unwrap();
    let canvas: web_sys::HtmlCanvasElement = canvas.dyn_into::<web_sys::HtmlCanvasElement>().unwrap();

    let gl = canvas.get_context("webgl2").unwrap().unwrap().dyn_into::<WebGl2RenderingContext>().unwrap();

    gl.clear_color(1.0, 0.0, 0.0, 1.0);
    gl.clear(WebGl2RenderingContext::COLOR_BUFFER_BIT);

}
}
```
<div style = "padding:2%;background-color : rgba(0, 0, 0, 0.05);">
Let's refresh and see if we see any changes. If everything went right, we should see a red canvas.
</div>

```bash
npm run refresh
```
<div style = "padding:2%;background-color : rgba(0, 0, 0, 0.05);">
at <a href="http://localhost:8080/" target="_blank">http://localhost:8080/</a>: 
</div>

![screenshot](./c1-s3.png)
