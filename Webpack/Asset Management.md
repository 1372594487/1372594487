# Asset Management

如果您从一开始就遵循指南，那么现在将有一个显示“helloweback”的小项目。现在让我们尝试合并一些其他资产，比如图像，看看如何处理它们。
在webpack之前，前端开发人员会使用grunt和gulp等工具来处理这些资产，并将它们从/src文件夹移到/dist或/build目录中。JavaScript模块也采用了同样的思想，但webpack等工具将动态绑定所有依赖项（创建所谓的依赖关系图）。这很好，因为现在每个模块都显式地声明了它的依赖关系，我们将避免捆绑不使用的模块。
最酷的webpack特性之一是，除了JavaScript之外，您还可以包含任何其他类型的文件，其中有一个加载程序或内置的资产模块支持。这意味着上面列出的JavaScript的相同优点（例如显式依赖）可以应用于构建网站或web应用程序时使用的所有东西。让我们从CSS开始，因为您可能已经熟悉了这个设置。

**Setup**

**dist/index.html**

```
 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8" />
-    <title>Getting Started</title>
+    <title>Asset Management</title>
   </head>
   <body>
-    <script src="main.js"></script>
+    <script src="bundle.js"></script>
   </body>
 </html>
```

**webpack.config.js**

```
const path = require('path');

 module.exports = {
   entry: './src/index.js',
   output: {
-    filename: 'main.js',
+    filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 };
```

#### **Loading CSS**

为了从JavaScript模块中导入CSS文件，需要安装

[style-loader]: https://webpack.js.org/loaders/style-loader/

和

[css-loader]: https://webpack.js.org/loaders/style-loader/

，并将其添加到模块配置中：

```
npm install --save-dev style-loader css-loader
```

**webpack.config.js**

```
 const path = require('path');

 module.exports = {
   entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
+  module: {
+    rules: [
+      {
+        test: /\.css$/i,
+        use: ['style-loader', 'css-loader'],
+      },
+    ],
+  },
 };
```

模块加载程序可以链接。链中的每个加载程序都将转换应用于已处理的资源。链是按相反的顺序执行的。第一个加载程序将其结果（应用了转换的资源）传递给下一个加载程序，依此类推。最后，webpack希望JavaScript由链中的最后一个加载程序返回。

上面的加载器顺序应该保持：“style-loader”排在前面，然后是“css-loader”。如果不遵循此约定，webpack很可能会抛出错误。

**tips :** *webpack使用正则表达式来确定它应该查找哪些文件并提供给特定的加载程序。在这种情况下，任何以.css结尾的文件都将被提供给style-loader和css-loader。*

这使您能够将“./style.css”导入到依赖于该样式的文件中。现在，当该模块运行时，带有字符串化css的<style>标记将插入html文件的<head>。
让我们尝试将一个新的style.css文件添加到我们的项目中，并将其导入index.js：

**project**

```
webpack-demo
  |- package.json
  |- webpack.config.js
  |- /dist
    |- bundle.js
    |- index.html
  |- /src
+   |- style.css
    |- index.js
  |- /node_modules
```

**src/style.css**

```
.hello {
  color: red;
}
```

**src/index.js**

```
 import _ from 'lodash';
+import './style.css';

 function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
+  element.classList.add('hello');

   return element;
 }

 document.body.appendChild(component());
```

**run build**

```
$ npm run build

...
[webpack-cli] Compilation finished
asset bundle.js 72.6 KiB [emitted] [minimized] (name: main) 1 related asset
runtime modules 1000 bytes 5 modules
orphan modules 326 bytes [orphan] 1 module
cacheable modules 539 KiB
  modules by path ./node_modules/ 538 KiB
    ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
    ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js 6.67 KiB [built] [code generated]
    ./node_modules/css-loader/dist/runtime/api.js 1.57 KiB [built] [code generated]
  modules by path ./src/ 965 bytes
    ./src/index.js + 1 modules 639 bytes [built] [code generated]
    ./node_modules/css-loader/dist/cjs.js!./src/style.css 326 bytes [built] [code generated]
webpack 5.4.0 compiled successfully in 2231 ms
```

再次在浏览器中打开dist/index.html，你会看到Hello网页现在的样式是红色的。要查看webpack做了什么，请检查页面（不要查看页面源代码，因为它不会显示结果，因为<style>标记是由JavaScript动态创建的）并查看页面的head标记。它应该包含我们在index.js中导入的样式块。
请注意，您可以而且在大多数情况下应该最小化css，以便在生产中获得更好的加载时间。最重要的是，加载程序存在于几乎所有你能想到的CSS风格中——postss、sass等等。

所以现在我们开始使用CSS，但是像背景和图标这样的图像呢？从webpack 5开始，使用内置的资产模块，我们也可以轻松地将这些模块整合到我们的系统中：

**webpack.config.js**

```
 const path = require('path');

 module.exports = {
   entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
   module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
+      {
+        test: /\.(png|svg|jpg|jpeg|gif)$/i,
+        type: 'asset/resource',
+      },
     ],
   },
 };
```

现在，当您从“./MyImage.png”导入MyImage时，该图像将被处理并添加到输出目录中，MyImage变量将包含处理后该图像的最终url。当使用css-loader时，如上所示，css中的url（'./my image.png'）也会发生类似的过程。加载程序将识别这是一个本地文件，并用输出目录中图像的最终路径替换“./my image.png”路径。html-loader以相同的方式处理<img src=“./my image.png”/>。

