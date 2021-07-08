//ES6迭代器

// 迭代器是一种特殊对象，它具有一些专门为迭代过程设计的专有接口，所有的迭代器对象都有一个next()方法，每次调用都返回一个结果对象。结果对象有两个属性：value，表示下一个将要返回的值；另一个是done，他是一个布尔型的值，当没有更多可返回数据时返回true。迭代器还会保存一个内部指针，用来指向当前集合中值的位置，每调用一次next()方法，都会返回下一个可用的值。
// 如果在最有一个只返回后再调用next()方法，那么返回的对象中属性done的值为ture，属性value则包含迭代器最终返回的值，这个返回值不是数据集的一部分，他与函数的返回值类似，是函数调用过程中最后一次给调用者传递信息的方法，如果没有相关数据则返回undefined。
// 了解这些后我们用ES5的语法创建一个迭代器：


function createIterator(items) {
    var i = 0;
    return {
        next: function () {
            var done = (i >= items.length);
            var value = !done ? items[i++] : undefined;
            return {
                done: done,
                value: value
            };
        }
    };
}
var iterator = createIterator([1, 2, 3]);
console.log(iterator.next());       //"{value:1,done:false}"
console.log(iterator.next());       //"{value:2,done:false}"
console.log(iterator.next());       //"{value:3,done:false}"
console.log(iterator.next());       //"{value:undefined,done:true}"
//之后所有的调用都会返回相同内容
console.log(iterator.next());       //"{value:undefined,done:true}"

// 上面代码中，createIterator()方法返回的对象有一个next()方法，每次调用时，items数组的下一个值会作为value返回。当i为3时，done变为true，此时三元表达式会将value的值设置为undefined。done与value二者最后的结果符合ES6迭代器的最终返回机制，当数据集被用尽后会返回最终的内容。
// 上面这个示例很复杂，而在ES6中，迭代器的编写规则也同样复杂，但ES6用同时还引入了一个生成器对象，它可以让创建迭代器对象的过程变得简单。

// 生成器是一种返回迭代器的函数，通过function关键字后的星号(*)来表示，函数中会用到新的关键字yield。星号可以紧挨着function关键字，也可以在中间添加一个空格，就像这样：
//生成器
function* createIterator() {
    yield 1;
    yield 2;
    yield 3;
}

// 生成器的调用方式与普通函数相同，只不过返回的是一个迭代器
let iterator = createIterator();

console.log(iterator.next().value);     //1
console.log(iterator.next().value);     //2
console.log(iterator.next().value);     //3
console.log(iterator.next().value);     //undefined
// 在这个示例中，createIterator()前的星号表明它是一个生成器;yield关键字也是ES6的新特性，可以通过它来指定调用迭代器的next()方法时的返回之及返回顺序。生成迭代器后，连续3次调用它的next()方法返回3个不同的值，分别是1、2和3。生成器的调用过程与其他函数一样，最终返回的是创建好的迭代器。
// 生成函数最有趣的部分大概是，每当执行完一条yield语句后函数就会自动停止执行。举个例子，在上面这段代码中，执行完语句yield 1 之后，函数便不再执行其他任何语句，直到再次调用迭代器的next()方法才会继续执行yield2语句。生成器函数的这种终止函数执行的能力有很多有趣的应用。
// 使用yield关键字可以返回任何值或表达式，所以可以通过生成器函数批量的给迭代器添加元素。例如，可以在循环中使用yield关键字：
function* createIterator(items) {
    for (let i = 0; i < items.length; i++) {
        yield items[i];
    }
}
let iterator = createIterator([1, 2, 3]);

console.log(iterator.next());       //"{value:1, done: false}"
console.log(iterator.next());       //"{value:2, done: false}"
console.log(iterator.next());       //"{value:3, done: false}"
// 之后所有的调用都会返回相同内容
console.log(iterator.next());       //"{value:undefined, done: true}"
// 在此示例中，给生成器函数createIterator()传入一个items数组，而在函数内部，for 循环不断从数组中生成新的元素放入迭代器中，每遇到一个yield语句循环都会停止；每次调用迭代器的next()方法，循环会继续运行并执行下一条yield语句。
// 生成器函数是ES6中的一个重要特性，可以将其用于所有支持函数使用的地方。

// yield的使用限制
// yield关键字只可在生成器内部使用，在其他地方使用会导致程序抛出语法错误，即便在生成器内部的函数里使用也是如此：
function* createIterator(items) {
    items.forEach(function (item) {
        //语法错误
        yield item + 1;
    })
}
// 从字面上看，yield关键字确实在createIterator()函数内部，但是它与return关键字一样，二者都不能穿透函数边界。嵌套函数中的return语句不能用作外部函数的返回语句，而此处嵌套函数中的yield语句会导致程序抛出语法错误。

// 生成器函数表达式
// 也可以通过函数表达式来创建生成器，只需在function关键字和小括号中见添加一个星号(*)：
let createIterator = function* (items) {
    for (let i = 0; i < items.length; i++) {
        yield items[i];
    }
}
let iterator = createIterator([1, 2, 3]);

console.log(iterator.next());       //"{value: 1, done: false"
console.log(iterator.next());       //"{value: 2, done: false"
console.log(iterator.next());       //"{value: 3, done: false"

// 之后的调用都会返回相同内容
console.log(iterator.next());       //"{value: underfined, done: true"

// 在这段代码中，createIterator()是一个生成器函数表达式，而不是一个函数声明。由于函数表达式是匿名的，因此星号直接放在function关键字和小括号之间。此外，这个示例基本与前例相同，使用的也是for循环。
//不能用箭头函数来创建生成器


//生成器对象方法
//由于生成器本身就是函数,因而可以将它们添加到对象中。例如，在ES5风格的对象字面量中，可以通过函数表达式来创建生成器，就像这样：
let o = {
    createIterator:function*(items){
        for(let i=0;i<items.length;i++){
            yield items[i];
        }
    }
}

let iterator = o.createIterator([1,2,3]);
//也可以用ES6的函数方法的简写方式创建生成器，只需在函数名前添加一个星号(*)
let o = {
    *createIterator(items){
        for(let i=0;i<items.length;i++){
            yield items[i];
        }
    }
}

let iterator = o.createIterator([1,2,3]);
// 这些示例使用了不同与之前的语法，但它们的功能实际上是等价的。在简写版本中，由于不使用function关键字来定义createIterator()方法，因此尽管可以在星号和方法名之间留白，但我们还是将星号紧贴在方法名之前。