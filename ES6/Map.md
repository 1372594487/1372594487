// ES6中的Map集合

// ES6中的Map类型是一种储存着许多键值对的有序列表，其中的键名和对应的值支持所有的数据类型。键名的等价性判断是通过调用Object.is()方法实现的，所以数字5与字符串"5"会被判定为两种类型，可以分别作为独立的两个键出现在程序中，这一点与对象中不太一样，因为对象的属性名总会被强制转换成字符串类型。

// 如果要向Map集合中添加新的元素，可以调用set()方法并分别传入键名和对应值作为两个参数；如果要从集合中获取信息，可以调用get()方法。就像这样：

```
let map = new Map();
map.set("title","Understanding ECMAScript 6");
map.set("year",2016);
console.log(map.get("tittle"));     //Understanding ECMAScript 6
console.log(map.get("year"));       //2016
```

// 在这个示例中，两组键值对分别被存入了集合Map中，键名"title"对应的值是一个字符串，键名"year"对应的值是一个数字。调用get()方法可以获得两个键名对应的值。如果调用get()方法时传入的键名在Map集合中不存在，则会返回underfined。

// 在对象中，无法用对象作为对象属性的键名；在Map集合中可以这样做

```
let map = new Map();
key1 = {};
key2 = {};
map.set(key1,5);
map.set(key2,42);

console.log(map.get(key1));     //5
console.log(map.get(key2));     //42
```

// 在这段代码中，分别用对象key1和key2作为两个键名在Map集合里存储了不同的值。这些键名不会被强制转换成其他形式，所以这两个对象在集合中是独立存在的，也就是说，以后我们不再需要修改对象本身就可以为其添加一些附加信息。

// Map集合支持的方法

// has(key)检测指定的键名在Map集合中是否已经存在

// delete(key)从Map集合中移除指定键名及其对应的值

// clear()移除Map集合中的所有键值对

//Map集合同样支持size属性，其代表当前集合中包含的键值对数量。3个方法及size属性例子如下：

```
let map = new Map();
map.set("name","Nicholas");
map.set("age",25);

console.log(map.size);      //2
console.log(map.has("name"));       //true
console.log(map.get("name"));       //"Nicholas"

console.log(map.has("age"));        //true
console.log(map.get("age"));        //25

map.delete("name");
console.log(map.has("name"));       //false
console.log(map.get("name"));       //undefined
console.log(map.size);              //1

map.clear();
console.log(map.has("name"));       //false
console.log(map.get("name"));       //undefined
console.log(map.has("age"));       //false
console.log(map.get("age"));       //undefined
console.log(map.size);             //0
```

// Map集合的size属性与Set集合中的size属性类似，其值为集合中键值对的数量。在此示例中，首先为Map的实例添加"name"和"age"这两个键名；然后调用has()方法，分别传入两个键名，返回的结果为true；调用delete()方法移除"name"，再调用has()方法检测返回false,且size属性值减少1；最后调用clear()方法移除剩余的键值对，调用has()方法检测全部返回false，size属性值为0。

// clear()方法可以快速清除Map集合中的数据，同样Map集合也支持批量添加数据。

// Map集合的初始化方法

// 可以向Map构造函数传入数组来初始化一个Map集合，这一点同样与Set集合相似。数组中的每个元素都是一个子数组，子数组中包含一个键值对的键名与值两个元素。因此整个Map集合中包含的全是这样的两元素数组：

```
let map = new Map([["name","Nicholas"],["age",25]]);

console.log(map.has("name"));       //true
console.log(map.get("name"));       //"Nicholas"
console.log(map.has("age"));        //true
console.log(map.get("age"));        //25
console.log(map.size);              //2
```

// 初始化构造函数后，键名"name"和"age"分别被添加到Map集合中。数组包裹数组的模式看起来可能有点奇怪，但由于Map集合可以接受任意数据类型的键名，为了确保它们在被存储到Map集合中之前不会被强制转换为其他数据类型，因而只能将它们放在数组中，因为这是唯一一种可以准确呈现键名类型的方式



// Map集合中的forEach()方法

//Map集合的forEach()方法与Set集合和数组中的forEach()方法类似，回调函数都接受3个参数：

//Map集合中下一次索引的位置

//值对应的键名

//Map集合本身

// 这些回调参数与数组的更相近，第一个参数是值，第二个是键名(在数组中对应的是数值型的索引值)。请看这个示例：

```
let map  = new Map([["name","Nicholas"],["age",25]]);

map.forEach(function(value,key,ownerMap){
    console.log(key + " " + value);
    console.log(ownerMap === map);
})
```

// forEach()回调函数会输出传入的信息，直接输出value和key，然后将ownerMap与map对比，输出二者相等的信息。这段代码会输出以下内容：

// name Nicholas

// true

// age 25

// true

// 遍历过程中，会按照键值对插入Map集合的顺序将相应信息传入forEach()方法的回调函数，而在数组中，会按照数值型索引值的顺序依次传入回调函数。

//正如Set集合的forEach()方法时所描述的，可以指定forEach()函数的第二个参数作为回调函数的this值





//WeakMap集合

// WeakSet是弱引用Set集合，相对的WeakMap是弱引用Map集合，也用于存储对象的弱引用。WeakMap集合中的键名必须是一个对象，使用非对象键名报错；集合中保存的是这些对象的弱引用，如果在弱引用之外不存在其他的强引用，引擎的垃圾回收机制会自动回收这个对象，同时也会移除WeakMap集合中的键值对。但是只有集合的键名遵从这个规则，键名对应的值如果是一个对象，则保存的是对象的强引用，不会触发垃圾回收机制。

// WeakMap集合最大的用途是保存Web页面中的DOM元素，例如，一些为Web页面打造的JavaScript库，会通过自定义的对象保存每一个引用的DOM元素。

// 使用这种方法最困难的是，一旦从Web页面中移除保存过的DOM元素，如何通过库本身将这些对象从集合清除；否则，库在DOM元素无用后可能依然保持对它们的引用，从而导致内存泄露，最终程序不再正常执行。如果用WeakMap集合来跟踪DOM元素，这些库仍然可以通过自定义的对象整合每一个DOM元素，而且当DOM元素消失时，可以自动销毁集合中的相关对象。

// 使用WeakMap集合

// ES6中的WeakMap类型是一种存储着许多键值对的无序列表，列表的键名必须是非null类型的对象，键名对应的值则可以是任意类型。WeakMap的接口与Map非常相似，用过set()方法添加数据，通过get()方法获取数据：

```
let map = new WeakMap(),
element = document.querySelector(".element");

map.set(element,"Original");

let value = map.get(element);
console.log(value);     //"Original"
// 移除element元素
element.parentNode.removeChild(element);
element = null;
```

//此时WeakMap集合为空

// 在这个示例中储存了一个键值对，键名element是一个DOM元素，其对应的值是一个字符串，将DOM元素传入get()方法即可获取之前存过的值，如果随后从页面文档中移除DOM元素并将引用这个元素的变量设置为null，那么WeakMap集合中的数据也会被同步清除。

// 与WeakSet集合相似的是，WeakMap集合也不支持size属性，从而无法验证集合是否为空；同样由于没有键对应的引用，因而无法通过get()方法获取到相应的值，WeakMap集合自动切断了访问这个值的途径，当垃圾回收程序运行时，被这个值占用的内存将会被释放。

// WeakMap集合的初始化方法

// WeakMap集合的初始化过程与Map集合类似，调用WeakMap构造函数并传入一个数组容器，容器内包含其他数组，每一个数组由两个元素构成：第一个元素是一个键名，传入的值必须是非null的对象；第二个元素是这个键对应的值(可以是任意类型)。例子如下：

```
let key1 = {},
key2 = {},
map = new WeakMap([[key1,"Hello"],[key2,42]]);

console.log(map.has(key1));     //true
console.log(map.get(key1));     //"Hello"
console.log(map.has(key2));     //true
console.log(map.get(key2));     //42
```

// 对象key1和key2被当作WeakMap集合的键使用，可以通过get()方法和has()方法去访问。如果给WeakMap构造函数传入的诸多键值对中含有非对象的键，否则程序抛出错误。

// WeakMap集合支持的方法

// WeakMap集合只支持两个可以操作键值对的方法：has()方法可以检测给定的键在集合中是否存在；delete()方法可以移除指定的键值对。WeakMap集合与WeakSet集合一样，二者都不支持键名枚举，从而也不支持clear()方法。以下示例分别使用了has()和delete()方法：

```
let map = new WeakMap(),
element = document.querySelector(".element");
map.set(element,"Original");

console.log(map.has(element));      //true;
console.log(map.get(element));      //"Original"

map.delete(element);
console.log(map.has(element));      //false;
console.log(map.get(element));      //undefined;
```

// 在这段代码中，我们还是用DOM元素作为WeakMap集合的键名。has()方法可以用于检查WeakMap集合中是否存在指定的引用；WeakMap集合的键名只支持非null的对象值；调用delete()方法可以从WeakMap集合中移除指定的键值对，此时如果在调用has()方法检查这个键名会返回false，调用get()方法返回undefined。

// 私有对象数据

// 尽管WeakMap集合会被大多数开发者用于储存DOM元素，但它其实也有许多其他的用途，其中的一个实际应用是存储对象示例的私有数据。在ES6中对象的所有属性都是公开的，如果想要储存一些只对对象开放的数据，则需要一些创造力，示例如下：

```
function Person(name){
    this._name = name;
}
Person.prototype.getName = function(){
    return this._name;
}
```

// 在这段代码中，约定前缀为下划线_的属性为私有属性，不允许在对象实例外改变这些属性。例如，只能通过getName()方法读取this._name属性，不允许改变它的值。然而没有任何标准规定如何写_name属性，所以它也有可能在无意间被覆写。

// ES5中，可以通过一下这种模式创建一个对象接近真正的私有数据：

    var Person = (function(){
        var privateData = {},
        privateId = 0;
        
    function Person(name){
        Object.defineProperty(this,"_id",{value:privateId++});
        privateData[this._id]={
            name:name
        }
    }
    Person.prototype.getName = function(){
        return privateData[this._id].name;
    }
     
    return Person;}());
    
// 上面示例中，变量Person由一个立即执行函数(IIFE)生成，包括两个私有变量：privateData和privateId。privateData对象储存的是每一个实例的私有信息，privateId则为每个实例生成一个独立ID。当调用Person构造函数时，属性_id的值会被加1，这个属性不可枚举、不可配置并且不可写。

// 然后新的条目会被添加到privateData对象中，条目的键名是对象实例的ID，privateData对象中储存了所有实例对应的名称。调用getName()函数，即可通过this._id获得当前实例的ID，并以此从privateData对象中提取实例名称。在IIFE外无法访问privateData对象，即使可以访问this._id，数据实际上也很安全。

// 这种方法最大的问题是，如果不主动管理，由于无法获知对象实例何时被销毁，因此privateData中的数据就永远不会消失。而使用WeakMap集合就可以解决这个问题，像这样：

```
let Person = (function(){
    let privateData = new WeakMap();
    function Person(name){
        privateData.set(this,{name:name});
    }

Person.prototype.getName = function(){
    return privateData.get(this).name;
};
return Person;
}())
```


// 经过改进后的Person构造函数选用一个WeakMap集合来存放私有数据。由于Person对象的实例可以直接作为集合的键使用，无须单独维护一套ID的体系来跟踪数据。调用Person构造函数时，新条目会被添加到WeakMap集合中，条目的键是this，值是对象包含的私有信息，在这个示例中，值是一个包含name属性的对象。调用getName()函数时会将this传入privateData.get()方法作为参数获取私有信息，亦即获取value对象并且访问name属性。只要对象实例被销毁，相关信息也会被销毁，从而保证了信息的私有性。