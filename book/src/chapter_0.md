<br>
<h1 style = "text-align: center;"> Introduction </h1>

---

<div style = "background-color : rgba(0, 0, 0, 0.05); text-align: center; ">
<span style="font-size : 30px;"><b>About This Tutorial</b></span>
</div>

<div style = "padding:2%;background-color : rgba(0, 0, 0, 0.05);">

<i style="color:grey;">This tutorial is free and open source, and all code uses the MIT license - so you are free to do whatever you want with this <a style="color:rgba(0, 125, 125, 1);" href="https://github.com/KorieDrakeChaney/Learn-WebGl-With-Rust" target="_blank">code</a> :D</i>

I really enjoy computer graphics, from the mathematically aspect and the results that you can create. The possibilities are limitless, you can make worlds, games, simulations, data visualizations, beautiful websites, anything. With the computer graphics world, I feel that there is one tutorial that stands above the rest. That tutorial is <a target="_blank" href="https://learnopengl.com">learnopengl.com</a>. To continue the love and my love for Web Development / Rust, I will be recreating that tutorial, for users who want to learn WebGl but also want to use Rust as their language of choice. You'll also learn WebAssembly in general through this process.
</div>

---

<div style = "padding:2%;background-color : rgba(0, 0, 0, 0.05);">
<h2 style="color:rgba(255, 125, 125, 0.75)">Prerequisites</h2>

* <a target="_blank" href="https://www.rust-lang.org/tools/install">Rust</a>

* <a target="_blank" href="https://rustwasm.github.io/wasm-pack/installer/">Wasm-Pack</a>

This tutorial is primarily about learning WebGl while using Rust. I will be hoping that you do have a basic understanding of Rust's syntax, as some of the code may confuse you if you have never used Rust before. What I will do, is describe the logic. 

If you do not know anything about rust, I will direct you to these following tutorials...
</div>

---

<div style = "padding:2%;background-color : rgba(0, 0, 0, 0.05);">
<h2 style="color:rgba(255, 125, 125, 0.75)">Learning Rust</h2>

* <a target="_blank" href="https://doc.rust-lang.org/book/">The Rust Programming Language Book</a> allows you to understand the basics. 
* <a target="_blank" href="https://doc.rust-lang.org/rust-by-example/">Learn Rust by Example</a> more for references. 
* <a target="_blank" href="https://blog.thoughtram.io/rust/2015/05/11/rusts-ownership-model-for-javascript-developers.html">Rust's Ownership Model for JavaScript Developers</a> if you are coming from javascript, this could be helpful.

</div>

---

<div style = "background-color : rgba(0, 0, 0, 0.05); text-align: center; ">
<span style="font-size : 30px;"><b><a style="color:white;" target ="_blank" href="https://webpack.js.org/">Structure</a></b></span>
<br>
<span style="color:grey">Tutorial layout</span>
</div>

<div style = "padding:2%;background-color : rgba(0, 0, 0, 0.05);">
    Taken from <a target="_blank" href="https://learnopengl.com/Introduction">learnopengl.com</a>, I'll also structure this the same way, with boxes, code blocks, color hints, and <i>function references</i> but translated in webgl.

<h2 style="color:rgba(255, 125, 125, 0.75)">Boxes</h2>

<div style="background-color : rgba(191, 245, 205, 0.75); padding:2% 1%"> <b style="color : rgba(7, 41, 16, 1)">Green</b> <span style="color : rgba(23, 87, 40, 1)">boxes encompasses some notes or useful features/hints about WebGL or the subject at hand.</span></div>
<br>
<div style="background-color : rgba(240, 156, 156, 0.75); padding:2% 1%"> <b style="color : rgba(79, 11, 11, 1)">Red</b> <span style="color : rgba(110, 25, 25, 1)">boxes will contain warnings or other features you have to be extra careful with.</span></div>

<h2 style="color:rgba(255, 125, 125, 0.75)">Code</h2>
You will see fragments of code scattered around the book in dark-gray boxes like this 

```rust
println!("Hello World!");

```
<h2 style="color:rgba(255, 125, 125, 0.75)">Color hints</h2>
Some words are displayed with a different color to make it extra clear these words portray a special meaning:

<ul>
  <li><b style="color : rgba(71, 255, 90, 1)">Definition:</b> green words specify a definition i.e. an important aspect/name of something you're likely to hear more often.</li>
  <li><b style="color : rgba(232, 50, 37, 1)">Program structure:</b> red words specify function names or class names.</li>
  <li><b style="color : rgba(65, 71, 250, 1)">Variables:</b> blue words specify variables including all WebGL constants</li>
</ul>


<h2 style="color:rgba(255, 125, 125, 0.75)">WebGl Function references</h2>
Functions will show up in a slightly noticeable underline with bolded and color, to link you to the documentation. Clicking on <b>gl.<a style="color:rgba(100, 155, 155, 1); text-decoration:underline;"href="https://rustwasm.github.io/wasm-bindgen/api/web_sys/struct.WebGl2RenderingContext.html#method.clear_color" target="_blank">clear_color</a>(1.0, 0.0, 0.0, 1.0);</b>

Now that you got a bit of a feel of the structure of the site, hop over to the <a href="./chapter_1.html">Getting Started section</a> to start your journey in WebGL! 
</div>

---

Copyright (C) 2022, Korie Chaney.

---

