//Promise

// Promise相当于异步操作结果的占位符，他不会去订阅一个事件，也不会传递一个回调函数给目标函数，而是让函数返回一个Promise
// readFile承诺将在未来的某个时刻完成
let promise = readFile("example.txt");
// 在这段代码中，readFile()不会立即开始读取文件，函数会先返回一个表示异步读取操作的Promise对象，未来对这个对象的操作完全取决于Promise的生命周期。

// Promise生命周期
// 每个Promise都会经历一个短暂的生命周期：先是处于进行中(pending)的状态，此时操作尚未完成，所以它也是未处理(unsettled)的；一旦异步操作执行结束，Promise则变为已处理(settled)的状态。在之前的示例中，当readFile()函数返回Promise时它变为pending状态，操作结束后，Promise可能会进入到以下两个状态中的一个：
// Filfilled Promise异步操作成功完成
// Rejected 由于程序错误或一些其他原因，Promise异步操作未能成功完成。

// 内部属性[[PromiseState]]被用来表示Promise的3种状态："pending"、"fulfilled"、"rejected"。这个属性不暴露在Promise对象上，所以不能以编程的方式检测Promise的状态，只有当Promise的状态改变时，通过then()方法来采取特定的行动。
// 所有的Promise都有then()方法，他接受两个参数：第一个是当Promise的状态变为fulfilled时要调用的函数，与异步操作相关的附加数据都会传递给这个完成函数(fullfillment function)；第二个是当Promise的状态变为rejected时要调用的函数，其与完成时调用的函数类似，所有与失败状态相关的附加数据都会传递给这个拒绝函数(rejection function)

// then()的两个参数是可选的，所以可以按照任意组合的方式来监听Promise，执行完成或被拒绝都会被相应。例如，试想以下这组then()函数的调用
let promise = readFile("example.txt");

promise.then(function(contents){
    //完成
    console.log(contents);
},function(err){
    //拒绝
    console.error(err.message);
});

promise.then(function(contents){
    // 完成
    console.log(contents);
});

promise.then(null,function(err){
    //拒绝
    console.error(err.message);
})

// 上面3次then()调用操作的是同一个Promise。第一个同时监听了执行完成和执行被拒；第二个只监听了执行完成，错误时不报告；第三个只监听了执行被拒，成功时不报告。
// Promise还有一个catch()方法，相当于只给其传入拒绝处理程序的then()方法。例如，下面这个catch()方法和then()方法实现的功能是等价的：
promise.catch(function(err){
    //拒绝
    console.error(err.message);
})
//与以下调用相同
promise.then(null,function(err){
    //拒绝
    console.error(err.message);
})
// then()方法和catch()方法一起使用才能更好地处理异步操作结果。这套体系能够清楚地指明操作结果成功还是失败，比事件和回调函数更好用。如果使用事件，在遇到错误时不会主动触发；如果使用回调函数，则必须记得每次都检查错误参数。你要知道，如果不给Promise添加拒绝处理程序，那所有失败就自动被忽略了，所以一定要添加拒绝处理程序，即使只在函数内部记录失败的结果也行。
// 如果一个Promise处于已处理状态，在这之后添加到任务队列中的处理程序仍将执行。所以无论何时你都可以添加新的完成处理程序或拒绝处理程序，同时也可以保证这些处理程序能被调用。
let promise = readFile("example.txt");

//最初的完成处理程序
psomise.then(function(contents){
    console.log(contents);
})
//现在又添加一个
promise.then(function(contents){
    console.log(contents);
})
// 在这段代码中，一个完成处理程序被调用时向同一个Promise添加了另一个完成处理程序，此时这个Promise已经完成，所以新的处理程序会被添加到任务队列中，当前面的任务完成后其才被调用。这对拒绝处理程序也同样适用。
//每次调用then()方法或catch()方法都会创建一个新任务，当Promise被解决(resolved)时执行。这些任务最终会被加入到一个为Promise量身定制的独立队列中，这个任务队列的具体细节对于理解如何使用Promise而言不重要，通常以只要理解任务队列是如何运作的就行。

// Promise.all()方法

// Promise.all()方法只接受一个参数并返回一个Promise，该参数是一个含有多个受监视Promise的可迭代对象(例如一个数组),只有当可迭代对象中所有Promise都被解决后返回的Promise才会被解决，只有当可迭代对象中所有Promise被完成后返回的Promise才会被完成。
let p1 = new Promise(function(resolve,reject){
    resolve(42);
});
let p2 = new Promise(function(resolve,reject){
    resolve(43);
});
let p3 = new Promise(function(resolve,reject){
    resolve(44);
});
let p4 = promise.all([p1,p2,p3]);

p4.then(function(value){
    console.log(Array.isArray(value));      //true;
    console.log(value[0]);      //42
    console.log(value[1]);      //43
    console.log(value[2]);      //44
})

// 每个Promise解决时都传入一个数字，调用Promise.all()方法创建Promise p4,最终当Promise p1、p2和p3都处于完成状态后p4才被完成。传入p4完成处理程序的结果是一个包含每个解决值(42,43,44)的数组，这些值按照传入参数数组中Promise的顺序存储，所以可以根据每个结果来匹配对应的Promise。
// 所有传入Promise.all()方法的Promise只要有一个被拒绝，那么返回的Promise没等所有的Promise都完成就立即被拒绝。

let p1 = new Promise(function(resolve,reject){
    resolve(42);
});
let p2 = new Promise(function(resolve,reject){
    reject(43);
});
let p3 = new Promise(function(resolve,reject){
    resolve(44);
});

let p4 = promise.all([p1,p2,p3]);
p4.catch(function(value){
    console.log(Array.isArray(value));      //false;
    console.log(value);     //43
})

//串联Promise
// 每次调用then()方法或catch()方法时实际上创建并返回了另一个Promise，只有当第一个Promise完成或被拒绝后，第二个才会被解决。
let p1 = new Promise(function(resolve,reject){
    resolve(42);
})

p1.then(function(value){
    console.log(value);
}).then(function(){
    console.log("Finished");
})