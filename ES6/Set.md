// ES5中的Set集合与Map集合

// 用对象属性来模拟这两种集合，就像这样：

```
var set = Object.create(null);
set.foo = true;
//检查属性是否存在
if(set.foo){
    //要执行的代码
}
```

// 模拟这两种集合对象的唯一区别是存储的值不同，以下这个示例用对象模拟Map集合

```
var map = Object.create(null);
map.foo = 'bar';
//获取已存值
var value = map.foo;
console.log(value);     //'bar'
```

//一般来说Set集合常被用于检查对象是否存在某个键名，而Map集合常被用于获取已存的信息

// 该解决方案的一些问题：

// 如果程序简单，可以用对象来模拟Set、Map集合，但如果触碰到对象属性的某些限制，那么这个方法就会变得更加复杂。

// 例如，所有对象的属性名必须是字符串类型，必须确保每个键名都是字符串类型且在对象中是唯一的，

```
var map = Object.create(null);
map[5] = "foo";
console.log(map["5"]); //"foo"
```

// 本例中将对象的某个属性赋值为字符串"foo",而这个属性的键名是数值型的5，它会被自动转换成字符串，所以map[5]和map["5"]引用的是同一个属性。用对象作为属性的键名也会遇到类似的问题。例如：

```
var map = Object.create(null),
key1 = {};
kty2 = {};
map[key1] = "foo";
console.log(map[key2]);     //"foo"
```

// 由于对象属性的键名必须是字符串，因而这段代码中的key1和key2将被转换为对象对应的默认字符串"[object Object]"，所以map[key2]和map[key1]引用的是同一个属性。这种错误很难被发现，用不同对象属性的键名理论上应该指向多个属性，但实际上这种假设却不成立。

// 由于对象会被转换为默认的字符串表达方式，因此其很难用作对象属性的键名。

// 对于Map集合来说，如果它的属性值是假值，则在要求使用布尔值的情况下(例如if语句)会被自动转换成false。强制转换本身没有问题，但如果考虑这个值的使用场景，有可能导致错误发生，例如：

```
var map = Object.create(null);
map.count = 1;
//本意是检查"count"属性是否存在，实际上检查的是该值是否非零
if(map.count){
    //要执行的代码
}
```

//这个实例中有一些模棱两可的地方，比如我们应该怎样使用map.count？在if语句中，我们是检查map.count是否存在，还是检查值是否非零？在示例中，由于value的值是1，为真值，if语句中的代码将被执行。然而，如果map.count的值为0或者不存在，if语句中的代码块将不会被执行。

// 在大型软件应用中，一旦发生此类问题将难以定位及调试，从而促使ES6在语言中加入Set集合与Map集合这两种新特性

// JS中有一个 in 运算符，其不需要读取对象的值就可以判断属性在对象中是否存在，如果存在就返回true。但是，in 运算符也会检索对象的原型，只有当对象原型为null是使用这个方法才比较稳妥。



/ ES6中的Set集合

// ES6中新增的Set类型是一种有序列表，其中含有一些相互独立的非重复值，通过Set集合可以快速访问其中的数据，更有效地追踪各种离散值。

// 调用new Set()创建Set集合，调用add()方法向集合中添加元素，访问集合的size属性可以获取集合中目前的元素数量。

```
let set = new Set();
set.add(5);
set.add('5');
console.log(set.size);      //2
```

// 在Set集合中，不会对所存值进行强制的类型转换，数字5和字符串"5"可以作为两个独立元素存在(引擎内部使用章4介绍的Object.is()方法检测两个值是否一致，唯一例外的是，Set集合中的+0和-0被认为是相等的)。如果向Set集合中添加多个对象，他们之间彼此保持独立:

```
let set = new Set();
key1 = {},
key2 = {};
set.add(key1);
set.add(key2);
console.log(set.size);      //2
```

// 由于key1和key2不会被转换成字符串，因而它们在Set集合中是两个独立的元素；如果被转换，则二者的值都是"[object Object]"。

// 如果多次调用add()方法并传入相同的只作为参数，那么后续的调用实际上会被忽略：

```
let set = new Set();
set.add(5);
set.add("5");
set.add(5);     //重复 - 本次调用直接被忽略
console.log(set.size);      //2
```

// 由于第二个传入的数字5是重复值，因此不会被添加到集合中，所以console.log()最后输出的Set集合size属性值位2。也可以用数组来初始化Set集合，Set构造函数同样会过滤掉重复的值从而保证集合中的元素各自唯一。

```
let set = new Set([1,2,3,4,5,5,5,5]);
console.log(set.size);      //5
```

// 在这个示例中，用一个含重复元素的数组来初始化Set集合，数组中有4个数字5，而在生成的集合中只有一个。自动去重的功能对于将已有1代码或JSON结构转换为Set集合执行的非常好。

//实际上Set构造函数可以接受所有可迭代对象作为参数，数组、Set集合、Map集合都是可迭代的，因而都可以作为Set构造函数的参数使用；构造函数通过迭代器从参数中提取值。

// 通过has()方法可以检测Set集合中是否存在某个值

```
let set = new Set();
set.add(5);
set.add("5");
console.log(set.has(5));        //true
console.log(set.has(6));        //false
```

//在这段代码中，Set集合里没有数字6这个值，所以set.has(6)调用返回false。

//移除元素

// 调用delete()方法可以移除Set集合中的某一个元素，调用clear()方法会移除集合中的所有元素。

```
let set = new Set();
set.add(5);
set.add("5");

console.log(set.has(5));    //true

set.delete(5);

console.log(set.has(5));    //false
console.log(set.size);      //1

set.clear();

console.log(set.has("5"));  //false
console.log(set.size);      //0
```

// 调用delete(5)之后，只有数字5被移除；执行clear()方法后，Set集合中的所有元素都被清除了。Set集合简单易用，可以有效地跟踪多个独立有序的值。如果想在Set集合中添加元素并在每一个元素上执行操作呢？forEach()方法

// forEach()方法的回调函数接收以下3个参数：

// Set集合中下一次索引的位置

// 与第一个参数一样的值

// 被遍历的Set集合本身



// 在Set集合的forEach()方法中，第二个参数也与数组的一样，如果需要在回调函数中使用this引用，则可以将它作为第二个参数传入forEach()函数：

```
let set = new Set([1,2])
let processor = {
    output(value){
        console.log(value);
    },
    process(dataSet){
        dataSet.forEach(function(){
            this.output(value);
        },this)
    }
}
```

//这里使用箭头函数，这样就无须再将this作为第二个参数传入回调函数

```
let set = new Set([1, 2])
let processor = {
    output(value) {
        console.log(value);
    },
    process(dataSet) {
        dataSet.forEach(value => {
            this.output(value)
        })
    }
}
```

//此示例中，箭头函数从外围的process()函数读取this值，所以可以正确地将this.output()方法解析为一次processor.output()调用。

//尽管Set集合更适用来跟踪多个值，而且又可以通过forEach()方法操作集合中的每一个元素，但是你不能像访问数组元素那样直接通过索引访问集合中的元素。如有需要，最好先将Set集合转换成一个数组。

```
let set = new Set([1,2,3,3,3,4,5]),
array = [...set];
console.log(array);     //1,2,3,4,5
// 封装
function eliminateDuplication(items){
    return[...new Set(items)];
}
let numbers = [1,2,3,3,3,4,5],
noDuplicates = eliminateDuplicates(numbers);
console.log(noDuplicates);      //[1,2,3,4,5]
```

//Weak Set集合

// 将对象存储在Set的实力与存储在变量中完全一样，只要Set实例中的引用存在，垃圾回收机制就不能释放该对象的内存空间，于是之前提到的Set类型可以被看作是一个强引用的Set集合。

```
let set = new Set();
key = {};
set.add(key);
console.log(set.size);      //1
//移除原始引用
key = null;
console.log(set.size);      //1
```

//重新取回原始引用
key = [...set][0];
// 这个示例中，将变量key设置为null时便清除了对初始对象的引用，但是Set集合却保留了这个引用，你仍然可以使用展开运算符将Set集合转换成数组格式并从数组的首个元素取出该引用。大部分情况下这段代码运行良好，但有时候你会希望当其他所有引用都不再存在时，让Set集合中的这些引用随之消失。举个例子，如果你在Web页面中通过JavaScript代码记录了一些DOM元素，这些元素有可能被另一段脚本移除，而你又不希望自己的代码保留这些DOM元素的最后一个引用(又称内存泄漏)

//未解决这个问题，ES6引入了Weak Set集合值；集合中的弱引用如果是对象唯一的引用，则会被回收并释放相应内存。

// WeakSet构造函数可以创建WeakSet集合，集合支持3个方法：add()、has()、的delete()。

```
let set = new WeakSet(),
key  = {};
//向集合set中添加对象
set.add(key);
console.log(set.has(key));      //true
set.delete(key);
console.log(set.has(key));      //false
```

//这个示例中，向WeakSet构造函数传入一个含有两个对象的数组，最终创建一个包含这两个对象的Weak Set集合。请记住，WeakSet构造函数不接受任何原始值，如果数组中包含其他非对象值，程序会抛出错误。

// 两种Set类型之间最大的区别是Weak Set保存的是对象值得弱引用，下面示例展示二者差异

```
let set = new WeakSet(),
key = {};
//向集合Set中添加对象
set.add(key);
console.log(set.has(key));   //true
```

//移除对象key的最后一个强引用(Weak Set中的引用也自动移除)
key = null;
//这段代码执行过后，就无法访问Weak Set 中key的引用了。由于我们需要向has()方法传递一个强引用才能验证这个弱引用是否已被移除，因此测试有点难进行下去，但JS引擎一定会正确地移除最后一个弱引用。

//以上展示了一些Weak Set集合与普通Set集合的共同特性，但是它们之间还有下面几个差别：

// 在WeakSet的实例中，如果向add()方法传入非对象参数会导致程序报错，而向has()和delete()方法传入非对象参数则会返回false。

// WeakSet集合不可迭代，所以不能被用于for-of循环。

// WeakSet集合不暴露任何迭代器(例如keys()和values()方法)，所以无法通过程序本身来检测其中的内容。

// WeakSet集合不支持forEach()方法。

// WeakSet集合不支持size属性。



//总之如果你只需要跟踪对象引用，你更应该使用WeakSet集合而不是普通的Set集合