**1、**知识点： 

Javascript进阶（2021）

**问题：****浏览器执行microTask的时机是**

A、macroTask之前且microTask队列不为空

B、macroTask之后且microTask队列不为空

C、执行栈为空且microTask队列不为空

D、同步任务之后

------

**2、**知识点： 

Javascript进阶（2021）

**问题：****下列代码运行后控制台打印结果是**`const data = { tag: 'data' }  function fn() {  console.log(this.tag)  return function () {   console.log(this.tag)  } }  fn.call(data)`

A、data、undefined

B、data、data

C、undefined、data

D、以上都不对

------

**3、**知识点： 

Javascript进阶（2021）

**问题：****JavaScript被设计为单线程的原因是**

A、早期的计算机性能差，无法开启多线程

B、避免线程间通信增加代码运行时间

C、避免切换上下文导致栈溢出

D、避免多个任务同时执行，例如同时修改同一处DOM

------

**4、**知识点： 

Javascript进阶（2021）

**问题：****下列代码的运行结果是**` new Promise(resolve => {   console.log('start')   resolve()  })   .then(() => {    return new Promise(resolve => resolve())     .then(() => console.log('promise1'))     .then(() => console.log('promise2'))     .then(() => console.log('promise3'))   })   .then(() => console.log('end'))`

A、start、end、promise1、promise2、promise3

B、start、promise1、promise2、promise3、end

C、start、promise1、end、promise2、promise3

D、以上都不对

------

**5、**知识点： 

Javascript进阶（2021）

**问题：****00:00:00开始执行以下代码，fn2为同步任务执行耗时10s，请问fn1被执行的时间大概是**`setTimeout(fn1, 30000) fn2()`

A、00:00:40

B、00:00:30

C、00:00:50

D、00:00:20

------

**6、**知识点： 

Javascript进阶（2021）

**问题：****下列代码运行后控制台打印结果是**![img](https://exam.duoyioa.com/workfiles/writtenquestion/1022fb86f4a44536b97f46464d9a2251_image.png)

A、data1、data1

B、data1、data2

C、data1、undefined

D、以上都不对

------

**7、**知识点： 

Javascript进阶（2021）

**问题：****setTimeout(fn, 0)执行速度比requestAnimationFrame快的原因是**

A、setTimeout是microTask，优先于macroTask执行

B、渲染频率由浏览器决定，为了性能考虑这个频率远远低于eventLoop的频率

C、setTimeout第二个参数为0的话等同于同步代码

D、以上都不是

------

**8、**知识点： 

Javascript进阶（2021）

**问题：****关于Object.assign（a, b）的说法正确的是**

A、将a对象的属性逐一复制到b属性中，如果b中存在同名属性则覆盖

B、将b对象的属性逐一复制到a属性中，如果a中存在同名属性则跳过该属性的复制

C、上述语句的返回值为指向b数据的指针

D、Object.assign相当于浅拷贝

------

**9、**知识点： 

Javascript进阶（2021）

**问题：****下列关于__proto__和prototype说法正确的是**

A、Array.__proto__的值等于Object.prototype

B、new Date().__proto__.constructor的值等于Date

C、Function.__proto__的值等于Object.prototype

D、Object.__proto__的值等于Object.prototype

------

**10、**知识点： 

Javascript进阶（2021）

**问题：****下列代码的运行结果是**`async function fn() {  console.log('start')  await Promise.resolve()  console.log('end') }  fn() new Promise(resolve => {  console.log('promise1')  resolve()  Promise.resolve().then(() => console.log('promise2')) })  .then(() => console.log('promise3')`

A、start、promise1、end、promise2、promise3

B、start、end、promise1、promise3、promise1

C、start、promise1、end、promise3、promise2

D、start、promise1、end、promise3、promise2

------

**11、**知识点： 

Javascript进阶（2021）

**问题：****下列代码运行后控制台打印的结果是**`let a = null function fn() {  let a = 1  void (function () {   var a = 2   console.log(a)  })()  console.log(a) } fn()`

A、2、1

B、1、2

C、2、null

D、null、2

------

**12、**知识点： 

Javascript进阶（2021）

**问题：****关于箭头函数的说法错误的是**

A、不存在prototype属性

B、存在__proto__属性

C、不能使用new实例化

D、内部使用的this是在编译时确定的

------

**13、**知识点： 

Javascript进阶（2021）

**问题：****下列代码运行后data.size的值是**`const data = new Set() const item = { name: 1 } data.add(item) data.add(item) data.add({ name: 1 }) data.add({ name: 1 })`

A、1

B、2

C、3

D、4

------

**14、**知识点： 

Javascript进阶（2021）

**问题：****关于发布订阅模式说法错误的是**

A、Subscriber可以直接向Publisher发起订阅

B、Broker可能存在多个，同一个Subscriber也有可能向多个Broker发起订阅

C、Broker收到订阅信息后不需要通知Publisher

D、Publisher可能存在多个

------

**15、**知识点： 

Javascript进阶（2021）

**问题：****有多个Promise任务，现在需要等待所有任务执行完毕后执行其它代码，应该使用的API是**

A、Promise.resolve

B、Promise.reject

C、Promise.all

D、Promise.race

------

**16、**知识点： 

Javascript进阶（2021）

**问题：****有变量const data = {}，下列执行结果为true的是**

A、Object.create(data) === data

B、Object.create(data).__proto__ === data.prototype

C、Object.create(data) === data.prototype

D、Object.create(data).__proto__ === data

------

**17、**知识点： 

Javascript进阶（2021）

**问题：****下列代码运行后控制台打印结果是**`function fn() {} console.log(fn.bind() === fn, fn.bind(window) === fn)`

A、true、false

B、true、true

C、false、false

D、false、true

------

**18、**知识点： 

Javascript进阶（2021）

**问题：****下列代码的运行结果是**`console.log('start') new Promise(resolve => {  console.log('promise1')  setTimeout(() => console.log('setTimeout1'))  Promise.resolve().then(() => console.log('promise2'))  resolve() })  .then(() => {   console.log('promise3')   new Promise((resolve) => {    resolve()    console.log('promise5')   })    .then(() => {     console.log('promise6')     return Promise.resolve()    })    .then(() => console.log('end'))  })  .then(() => console.log('promise4'))`

A、start、promise1、promise3、promise5、promise4、promise2、promise6、end、setTimeout1

B、start、promise1、promise2、promise3、promise5、promise4、promise6、end、setTimeout1

C、start、promise1、promise2、promise3、promise5、promise6、promise4、end、setTimeout1

D、start、promise1、promise3、promise5、promise6、end、promise4、promise2、setTimeout1

------

**19、**知识点： 

Javascript进阶（2021）

**问题：****requestAnimationFrame的执行时机是**

A、每一轮eventLoop之后

B、浏览器下次重绘之后

C、浏览器下次重绘之前

D、microTask队列清空之前

------

**20、**知识点： 

Javascript进阶（2021）

**问题：****关于下面的代码的执行结果，说法正确的是**`<script>  function fn() {   Promise.resolve().then(fn)  }  fn() </script>`

A、因为使用了microTask，所以浏览器不会卡死

B、浏览器卡死的原因是栈溢出

C、浏览器卡死的原因是microTask队列无法清空

D、浏览器卡死的原因是macroTask队列无法清空

------

**21、**知识点： 

Javascript进阶（2021）

**问题：****下面哪个不属于microTask**

A、MutationObserver

B、promise.then

C、Object.observe

D、requestAnimationFrame

------

**22、**知识点： 

Javascript进阶（2021）

**问题：****关于Object.create({}).prototype.__proto__结果说法正确的是**

A、.prototype始终指向原型对象，所以执行结果等同于Object.prototype

B、Object.create({}).prototype.__proto__等效于Object.create({}).__proto__，所以执行结果等同于Object.prototype

C、Object.create({}).prototype指向Object构造函数，所以执行结果等同于Function.prototype

D、以上都不对

------

**23、**知识点： 

Javascript进阶（2021）

**问题：****关于下面的代码的执行结果，正确的是**` div.addEventListener('click', () => {   console.log('1')   Promise.resolve().then(() => console.log('p1'))  })  div.addEventListener('click', () => {   console.log('2')   Promise.resolve().then(() => console.log('p2'))  })  div.click()`

A、1、p1、2、p2；

B、1、2、p1、p2

C、2、p2、1、p1

D、2、1、p2、p1

------

**24、**知识点： 

Javascript进阶（2021）

**问题：****Map和WeakMap的主要区别是**

A、Map的key是不可枚举的

B、WeakMap不能用对象作为key

C、WeakMap的key是弱引用

D、WeakMap没有delete方法

------

**25、**知识点： 

Javascript进阶（2021）

**问题：****下面哪个不属于macroTask**

A、setTimeout

B、promise.then

C、setInterval

D、requestAnimationFrame

------

**26、**知识点： 

Javascript进阶（2021）

**问题：****const num = 1，执行num.hasOwnProperty()的过程说法正确的是**

A、Number.prototype中存在hasOwnProperty方法，所以代码正常执行

B、Number.prototype中不存在hasOwnProperty方法，所以代码报错

C、Object.prototype中存在hasOwnProperty方法，所以代码正常执行

D、Object.prototype中不存在hasOwnProperty方法，所以代码报错

------

**27、**知识点： 

Javascript进阶（2021）

**问题：****关于闭包的说法正确的是**

A、闭包由于持久存储局部变量的特性，本身就会导致内存泄漏

B、利用闭包特性可以长久保存变量又不会造成全局污染

C、闭包是一种结构，只要函数存在局部变量的同时返回一个内部函数就能形成闭包

D、闭包是JavaScript的一种设计失误，我们在工作中不要使用它

------

**28、**知识点： 

Javascript进阶（2021）

**问题：****下列代码运行后控制台打印结果是**`const data = {  tag: 'parent',  child: {   tag: 'child',   fn1() {    console.log(this.tag)   },   fn2: () => console.log(this.tag)  } } data.child.fn1() data.child.fn2()`

A、parent、child

B、child、child

C、child、undefined

D、child、parent

------

**29、**知识点： 

Javascript进阶（2021）

**问题：****requestAnimationFrame的执行频率是**

A、60FPS

B、不小于60FPS

C、大于等于60FPS

D、以上都不是

------

**30、**知识点： 

Javascript进阶（2021）

**问题：****下列代码运行后控制台打印的结果是**`function fn() {  let count = 0  return function () {   console.log(count++)  } } fn()() fn()() const fn1 = fn() fn1() fn1()`

A、0、0、0、0

B、0、1、0、1

C、1、1、1、1

D、0、0、0、1

------

**31、**知识点： 

Javascript进阶（2021）

**问题：****存在变量const list = [1,2]，下列说法正确的是**

A、list.push(...list)的返回值是[1,2,1,2]

B、list.push(...list)的返回值是4

C、list.push([...list])的返回值是[1,2,1,2]

D、list.push([...list])的返回值是4

------

**32、**知识点： 

Javascript进阶（2021）

**问题：****下列代码运行后控制台打印的结果是**`const data = { tag: 'tag' }  function fn() {  console.log(this.tag)  function fn1() {   console.log(this.tag)   const fn2 = () => console.log(this.tag)   fn2()  }  fn1() }  fn.call(data)`

A、tag、tag、tag

B、tag、tag、undefined

C、tag、undefined、undefined

D、tag、undefined、tag

------

**33、**知识点： 

Javascript进阶（2021）

**问题：****下列代码运行后控制台打印的结果是**`function fn() {  let count = 0  return { log: () => console.log(count++) } }  fn().log() fn().log() const fn1 = fn() fn1.log() fn1.log()`

A、0、0、0、0

B、0、1、0、1

C、1、1、1、1

D、0、0、0、1

------

**34、**知识点： 

Javascript进阶（2021）

**问题：****有变量const data = Object.create(null)，下列代码能正常执行的是**

A、data.toString()

B、data.valueOf()

C、data.hasOwnProperty("toString")

D、以上都不对

------

**35、**知识点： 

Javascript进阶（2021）

**问题：****下列代码运行后控制台打印的结果是**`const fn1 = (...arg) => {  console.log(typeof arg)  console.log(typeof arguments) } function fn2(...arg) {  console.log(Array.isArray(arg))  console.log(Array.isArray(arguments)) } fn1() fn2()`

A、array、array、true、true

B、object、object、true、true

C、object、undefiend、true、false

D、object、undefiend、true、true

------

**36、**知识点： 

Javascript进阶（2021）

**问题：****关于观察者模式和发布订阅模式说法正确的是**

A、发布订阅模式的主体数量少于观察者模式

B、观察者模式中，Observer和Subject是一对多的关系

C、观察者模式中，由Subject主动订阅Observer并发起通知

D、发布订阅模式中Broker相当于中介的作用，负责存储和管理Subscriber

------

**37、**知识点： 

Javascript进阶（2021）

**问题：****有变量const str = new String()，下列执行结果为true的是**

A、str.hasOwnProperty("valueOf")

B、str.hasOwnProperty("trim")

C、"substring" in str

D、str.hasOwnProperty("substr")

------

**38、**知识点： 

Javascript进阶（2021）

**问题：****浏览器引入macroTask和microTask的原因是**

A、避免任务队列发生队头阻塞，例如高优先级的任务被运行时间久的低优先级任务阻塞

B、便于区分V8任务和宿主任务，例如所有的macroTask都是由浏览器API产生，所有的microTask都是由V8产生

C、便于在主线程上一次性运行多个任务，提高任务吞吐量

D、为异步编程提供任务调度的模型基础

------

**39、**知识点： 

Javascript进阶（2021）

**问题：****下列代码运行后控制台打印结果是**`function fn() {  console.log(this.tag)  setTimeout(() => console.log(this.tag)) }  const data1 = { tag: 'data1', fn } const data2 = { tag: 'data2', fn: data1.fn }  data2.fn()`

A、data1、data2；

B、data2、data1；

C、data1、undefined；

D、data2、data2；

------

**40、**知识点： 

Javascript进阶（2021）

**问题：****下列代码运行后控制台打印结果是****![img](https://exam.duoyioa.com/workfiles/writtenquestion/0e3f7d726b68441891c95d1f8d662d89_image.png)**

A、data1

B、data2

C、undefined

D、以上都不对

------

二、多选题（总分20分，共10题）

**1、**知识点： 

Javascript进阶（2021）

**问题:****关于代码书写下面做法正确的是**

A、不考虑兼容的情况下，优先使用ES6的class语法，避免用ES5的原型去实现自定义类

B、工作中可以使用闭包，但是要避免内存泄漏

C、async/await可以替代promise，所以可以完全不使用promise

D、for循环比Array.prototype.map快，所以优先使用for循环替代Array.prototype.map

------

**2、**知识点： 

Javascript进阶（2021）

**问题:****有一个number类型数组[1,2,3,..]，要检测其中是否包含某个数字，可以使用的方法有**

A、Array.prototype.includes；

B、Array.prototype.findIndex；

C、Array.from；

D、Array.prototype.some；

------

**3、**知识点： 

Javascript进阶（2021）

**问题:****关于EventLoop说法正确的是**

A、在浏览器和NodeJS环境中都存在EventLoop

B、所有的事件都属于异步任务

C、有回调函数出现的地方一定存在异步操作

D、宿主也会产生microTask

------

**4、**知识点： 

Javascript进阶（2021）

**问题:****以下哪些数据不属于Array类型**

A、new Int16Array(2)

B、document.querySelectorAll('div')

C、new Set([1,2,3])

D、new ArrayBuffer(2)

------

**5、**知识点： 

Javascript进阶（2021）

**问题:****关于setTimeout说法正确的是**

A、setTimeout由宿主环境提供

B、setTimeout的第二个参数如果大于1000/60，就能保证在规定的时刻立即执行

C、setTimeout的返回值为一个数字

D、setTimeout的第三个参数代表代码循环执行的次数，默认为1

------

**6、**知识点： 

Javascript进阶（2021）

**问题:****下列哪些方法能遍历出对象上的key**

A、Object.keys

B、Object.values

C、for of

D、for in

------

**7、**知识点： 

Javascript进阶（2021）

**问题:****关于动画的实现下列说法错误的是**

A、使用requestAnimationFrame就能保证动画达到60FPS的流畅度

B、使用setTimeout实现动画效果要优于setInterval

C、尽量使用requestAnimationFrame实现动画而避免采用CSS3动画

D、requestAnimationFrame只会占用GPU资源，而不会去抢占主线程的资源

------

**8、**知识点： 

Javascript进阶（2021）

**问题:****关于原型链的描述正确的是**

A、原型链的“链”体现在prototype属性

B、原型链的“链”体现在__proto__属性

C、__proto__可能为null

D、构造函数的__proto__不可能指向自身的prototype

------

**9、**知识点： 

Javascript进阶（2021）

**问题:****关于观察者模式和发布订阅模式的特点说法正确的是**

A、观察者模式中，观察者Observers必须知道Subject的存在

B、对于组件设计而言，发布订阅模式的耦合度大于观察者模式

C、发布订阅模式中Publishers和Subscribers可能并不知道对方的存在

D、发布订阅模式的特点是Subscribers的信息同时存在于Broker和Publishers中

------

**10、**知识点： 

Javascript进阶（2021）

**问题:****关于作用域和this的说法正确的是**

A、this指向在编译(解释)阶段就已经确定

B、作用域在编译(解释)阶段就已经确定

C、this的指向由执行上下文决定

D、闭包的形成和作用域的静态绑定特性有直接关系











单选：

1C2D3D4B5B

6A7B8D9B10A

11A12D13C14A15C

16D17C18C19C20C

21D22D23B24C25B

26C27B28C29D30D

31B32C33D34D35C

36D37C38A39D40A

多选：

1AB 2ABD 3AD 4ABCD 5AC

6AD 7CD 8BC 9AC 10BCD

















