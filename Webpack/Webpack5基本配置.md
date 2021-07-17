# **入门**

Webpack5文档

**warning**

The minimum supported Node.js version to run webpack 5 is 10.13.0 (LTS)

#### **基本设置**

首先，让我们创建一个目录，初始化npm，在本地安装webpack，并安装webpack cli（用于在命令行上运行webpack的工具）：

```
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
```

在整个指南中，我们将使用diff块向您展示我们对目录、文件和代码所做的更改。例如：

```
+ this is a new line you shall copy into your code
- and this is a line to be removed from your code
  and this is a line not to touch.
```

现在，我们将创建以下目录结构、文件及其内容：

**project**

```
  webpack-demo
  |- package.json
+ |- index.html
+ |- /src
+   |- index.js
```

**src/index.js**

```
function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```

**index.html**

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Getting Started</title>
    <script src="https://unpkg.com/lodash@4.17.20"></script>
  </head>
  <body>
    <script src="./src/index.js"></script>
  </body>
</html>
```

我们还需要调整package.json文件，以确保将包标记为private，并删除主条目。这是为了防止代码意外发布。

**Tips** ：如果您想进一步了解package.json的内部工作原理，那么我们建议您阅读

[npm文档]: https://docs.npmjs.com/cli/v7/configuring-npm/package-json

。

**package.json**

```
 {
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
-  "main": "index.js",
+  "private": true,
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"
   },
   "keywords": [],
   "author": "",
   "license": "MIT",
   "devDependencies": {
     "webpack": "^5.38.1",
     "webpack-cli": "^4.7.2",
   }
 }
```

在本例中，<script>标记之间存在隐式依赖关系。我们的index.js文件依赖于lodash在运行之前包含在页面中。这是因为index.js从未明确声明需要lodash；它假设全局变量存在。

以这种方式管理JavaScript项目存在问题：

- 脚本是否依赖于外部库并不是很明显。
- 如果缺少依赖项，或者包含顺序错误，应用程序将无法正常运行。
- 如果包含依赖项但未使用，浏览器将被迫下载不必要的代码。

让我们用webpack来管理这些脚本。

#### **Creating a Bundle**

首先，我们将稍微调整目录结构，将“源”代码（./src）与“分发”代码（./dist）分开。“源”代码就是我们要编写和编辑的代码。“分发”代码是构建过程的最小化和优化输出，最终将加载到浏览器中。调整目录结构如下：

```
  webpack-demo
  |- package.json
+ |- /dist
+   |- index.html
- |- index.html
  |- /src
    |- index.js
```

***Tips**:您可能已经注意到index.html是手动创建的，即使它现在放在dist目录中。稍后在另一个指南中，我们将生成index.html，而不是手动编辑它。完成后，清空dist目录并重新生成其中的所有文件应该是安全的。

要将lodash依赖项与index.js捆绑在一起，我们需要在本地安装库：

```
npm install --save lodash
```

在安装将捆绑到生产捆绑包中的包时，应该使用npm install--save。如果您是为了开发目的安装软件包（例如linter、测试库等），那么应该使用npm install--save-dev。更多信息可以在

[npm文档]: https://docs.npmjs.com/cli/v7/commands/npm-install

中找到。

现在，让我们在脚本中导入lodash

**src/index.js**

```
+import _ from 'lodash';
+
 function component() {
   const element = document.createElement('div');

-  // Lodash, currently included via a script, is required for this line to work
+  // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   return element;
 }

 document.body.appendChild(component());
```

现在，由于我们将绑定脚本，因此必须更新index.html文件。当我们现在导入lodash<script>时，让我们删除它，并修改另一个<script>标记以加载包，而不是原始的./src文件：

**dist/index.html**

```
 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8" />
     <title>Getting Started</title>
-    <script src="https://unpkg.com/lodash@4.17.20"></script>
   </head>
   <body>
-    <script src="./src/index.js"></script>
+    <script src="main.js"></script>
   </body>
 </html>
```

#### Modules

ES2015对进出口报表进行了规范。目前大多数浏览器都支持这种语法，但也有一些浏览器无法识别这种新语法。但别担心，webpack确实支持他们开箱即用。
在幕后，webpack实际上“透明”了代码，以便旧的浏览器也可以运行它。如果您检查dist/main.js，您可能会看到webpack是如何做到这一点的，它非常巧妙！除了导入和导出外，webpack还支持其他各种模块语法，有关更多信息，请参阅

[模块API]: https://webpack.js.org/api/module-methods/

。
请注意，除了导入和导出语句之外，webpack不会更改任何代码。如果您正在使用其他ES2015功能，请确保使用

[transpiler]: https://webpack.js.org/loaders/#transpiling

诸如

[Babel]: https://babeljs.io/

或

[Bublé]: https://buble.surge.sh/guide/

 via webpack的加载程序系统之类的

[loadersystem]: https://webpack.js.org/concepts/loaders/

。

#### **Using a Configuration**

从版本4开始，webpack不需要任何配置，但是大多数项目需要更复杂的设置，这就是webpack支持配置文件的原因。这比在终端中手动输入大量命令要高效得多，因此让我们创建一个：

**project**

```
  webpack-demo
  |- package.json
+ |- webpack.config.js
  |- /dist
    |- index.html
  |- /src
    |- index.js
```

* **webpack.config.js**

```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

现在，让我们再次运行构建，但使用新的配置文件：

```
$ npx webpack --config webpack.config.js
[webpack-cli] Compilation finished
asset main.js 69.3 KiB [compared for emit] [minimized] (name: main) 1 related asset
runtime modules 1000 bytes 5 modules
cacheable modules 530 KiB
  ./src/index.js 257 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
webpack 5.4.0 compiled successfully in 1934 ms
Tip
```

如果存在webpack.config.js，则默认情况下webpack命令会将其拾取。我们在这里使用--config选项只是为了显示您可以传递任何名称的配置。这对于需要拆分为多个文件的更复杂配置非常有用。

配置文件比CLI使用更灵活。我们可以通过这种方式指定加载程序规则、插件、解析选项和许多其他增强功能。请参阅

[配置文档]: https://webpack.js.org/configuration/

以了解更多信息。

#### **NPM Script**

考虑到从CLI运行webpack的本地副本不是特别有趣，我们可以设置一个小的快捷方式。让我们通过添加npm脚本来调整package.json：

```
 {
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
   "private": true,
   "scripts": {
-    "test": "echo \"Error: no test specified\" && exit 1"
+    "test": "echo \"Error: no test specified\" && exit 1",
+    "build": "webpack"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "devDependencies": {
     "webpack": "^5.4.0",
     "webpack-cli": "^4.2.0"
   },
   "dependencies": {
     "lodash": "^4.17.20"
   }
 }
```

现在可以使用npm run build命令代替我们前面使用的npx命令。请注意，在脚本中，我们可以按名称引用本地安装的npm包，方法与使用npx时相同。这个约定是大多数基于npm的项目的标准，因为它允许所有贡献者使用相同的公共脚本集。

现在运行以下命令并查看脚本别名是否有效：

```
$ npm run build

...

[webpack-cli] Compilation finished
asset main.js 69.3 KiB [compared for emit] [minimized] (name: main) 1 related asset
runtime modules 1000 bytes 5 modules
cacheable modules 530 KiB
  ./src/index.js 257 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
webpack 5.4.0 compiled successfully in 1940 ms
Tip
```

通过在npm run build命令和您的参数（例如npm run build--color）之间添加两个破折号，可以将自定义参数传递到webpack。

#### **Conclusion**

现在您已经有了一个基本的构建，您应该继续学习下一个资产管理指南，以了解如何使用

[webpack管理]: https://webpack.js.org/guides/asset-management/

图像和字体等资产。此时，您的项目应该如下所示：

**project**

```
webpack-demo
|- package.json
|- webpack.config.js
|- /dist
  |- main.js
  |- index.html
|- /src
  |- index.js
|- /node_modules

```

**Tips: **如果您使用的是npm5+，您可能还会在目录中看到package-lock.json文件。

不要用webpack编译不可信的代码。它可能导致在您的计算机、远程服务器或应用程序最终用户的Web浏览器中执行恶意代码。

如果你想了解更多关于webpack的设计，你可以查看

[基本概念]: https://webpack.js.org/concepts/

和

[配置页面]: https://webpack.js.org/configuration/

。此外，

[API部分]: https://webpack.js.org/api/

深入研究了webpack提供的各种接口。