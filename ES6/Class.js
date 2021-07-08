// Class
//ES5及早期版本没有类的概念，最相近的思路是创建一个自定义类型：首先创建一个构造函数，然后定义另一个方法并赋值给构造函数的原型。例如：
function PersonType(name) {
    this.name = name;
}

PersonType.prototype.sayName = function () {
    console.log(this.name);
};

var person = new PersonType("Nicholas");
person.sayName();       //outputs "Nicholas"

console.log(person instanceof PersonType);      //true
console.log(person instanceof Object);      //true
// 这段代码中的PersonType是一个构造函数，其执行后创建一个名为name的属性：给PersonType的原型添加一个sayName()方法，所以PersonType对象的所有实例都将共享这个方法。然后使用new操作符创建一个PersonType的实例person,并最终证实了person对象确实是PersonType的实例，且由于存在原型继承的特性，因而它也是Object的实例。
// 许多模拟类的JavaScript库都是基于这个模式进行开发，而且ES6中的类也借鉴了类似的方法。
//类的声明
class PersonClass {
    //等价于PersonType构造函数
    constructor(name) {
        this.name = name;
    }
    //等价于PersonType.prototype.sayName
    sayName() {
        console.log(this.name);
    }
}

let person = new PersonClass("Nicholas");
person.sayName();       //outputs "Nicholas"

console.log(person instanceof PersonClass);     //true
console.log(person instanceof Object);     //true

console.log(typeof PersonClass);     //"function"
console.log(typeof PersonClass.prototype.sayName);     //"function"

// 通过类声明语法定义PersonClass的行为与之前创建PersonType构造函数的过程相似，只是这里直接在类中通过特殊的constructor方法名来定义构造函数，且由于这种类使用简介语法来定义1方法，因而不需要添加function关键字。除constructor外没有其他保留的方法名，所以可以尽情添加方法。
// 自由属性是实例中的属性，不会出现在原型上，且只能在类的构造函数或方法中创建，此例中的name就是一个自有属性。这里建议你在构造函数中创建所有自有属性，从而只通过一处就可以控制类中的所有的自有属性。
// 类声明仅仅是基于已有自定义类型声明的语法糖。typeof PersonClass 最终返回的结果是"function"，所以PersonClass声明实际上创建了一个具有构造函数方法行为的函数。此示例中的sayName()方法实际上是PersonClass.prototype上的一个方法；与之类似的是，在之前的示例中，sayName()也是PersonType.prototype上的一个方法。通过语法糖包装以后，类就可以代替自定义类型的功能，我们只需关注如何定义正确的类。
// 与函数不同的是，类属性不可被赋予新值，在之前的示例中，PersonClass.prototype就是这样一个只可读的类属性。
// 类与自定义类型之间有诸多相似之处，我们仍需牢记它们的这些差异：
// - 函数声明可以被提升，而类声明与let声明类似，不能被提升；真正执行声明语句之前，它们会一直存在与临时死区中。
// - 类声明中的所有代码将自动运行在严格模式下，而且无法强行让代码脱离严格模式执行。
// - 在自定义类型中，需要通过Object.defineProperty()方法手工指定某个方法为不可枚举；而在类中，所有方法都是不可枚举的。
// - 每个类都有一个名为[[Construct]]的内部方法，通过关键字new调用那些不含[[Construct]]的方法会导致程序抛出错误。
// - 使用出关键字new以外的方式调用类的构造函数会导致程序抛出错误。
// - 在类中修改类名会导致报错。

//了解这些差异之后，我们可以用除了类之外的语法为之前示例中的Perosonal声明编写等价代码
//等价于PersonClass
let PersonClass2 = (function () {

    "use strict";

    const PersonType2 = function (name) {
        //确保通过关键字new调用该函数
        if (typeof new.target === "undefined") {
            throw new Error("必须通过关键字new调用构造函数");
        }

        this.name = name;
    }

    Object.defineProperty(PersonType2.prototype, "sayName", {
        value: function () {
            //确保不会通过关键字new调用该方法
            if (typeof new.target !== "undefined") {
                throw new Error("不可使用关键字new调用该方法！");
            }
            console.log(this.name);
        },
        enumerable: false,
        writable: true,
        configurable: true
    });
    return PersonType2;
}())
// 这段代码中有两处PersonType2声明；一处是外部作用域中的let声明，一处是立即执行函数表达式(IIFE)中的const声明，这也从侧面说明了为什么可以在外部修改类名而内部不可修改。在构造函数中，先检查new.target是否通过new调用，如果不是则抛出错误；紧接着，将sayName()方法定义为不可枚举，并再次检查new.target是否通过new调用，如果是则抛出错误；最后，返回这个构造函数。
//常量类名
// 类的名称只在类中为常量，所以尽管不能在类的方法中修改类名，但可以在外部修改：
class Foo {
    constructor() {
        Foo = "bar"     //执行时会抛出错误
    }
}
//但在类声明结束后就可以修改
Foo = "baz";

// 在这段代码中，类的外部有一个Foo声明，而类的构造函数里的Foo则是一个独立存在的绑定。内部的Foo就像是通过const声明，修改它的值会导致程序抛出错误；而外部的Foo就像是通过let生命的，可以随时修改这个绑定的值。

// 类表达式
// 类的函数都有两种存在形式：声明形式和表达式形式。声明形式的函数和类都由相应的关键字（分别为function和class）进行定义，随后紧跟一个标识符；表达式形式的函数和类与之类似，只是不需要在关键字后添加标识符。类表达式的设计初衷是为了声明相应变量或传入函数作为参数。

//基本的类表达式语法
let PersonClass = class {
    //等价于PersonType构造函数
    constructor(name) {
        this.name = name;
    }

    //等价于PersonType.prototype.sayName
    sayName() {
        console.log(this.name);
    }
};

let person = new PersonClass("Nicholas");
person.sayName();       //outputs "Nicholas"

console.log(person instanceof PersonClass);     //true
console.log(person instanceof Object);     //true

console.log(typeof PersonClass);        //"function"
console.log(typeof PersonClass.prototype.sayName);        //"function"

// 如这个示例解释的，类表达式不需要标识符在类后。除了语法，类表达式在功能上等价于类声明。
// 类声明和类表达式的功能极为相似，只是代码编写方式略有差异，二者均不会像函数声明和函数表达式一样被提升，所以在运行时状态下无论选择那一种方式代码最终的执行结果都没有太大差别。

//命名类表达式
// 在上一节的示例中，我们定义的类表达式是匿名的，其实类与函数一样，都可以定义为命名表达式。声明时，在关键字class后添加一个标识符即可定义为命名类表达式：

let PersonClass = class PersonClass2 {
    //等价于PersonType构造函数
    constructor(name) {
        this.name = name;
    }

    //等价于PersonType.prototype.sayName
    sayName() {
        console.log(this.name);
    }
};

console.log(typeof PersonClass);        //"function"
console.log(typeof PersonClass2);        //"undefined"

// 在此示例中，类表达式被命名为PersonClass2,由于标识符PersonClss2只存在于类定义中，因此它可被用在想sayName()这样的方法中。而在类的外部，由于不存在一个名为PersonClass2的绑定，因而typeof PersonClass2 的值为"undefined"。下面是没有使用关键字class的等价声明：

//等价于命名类表达式PersonClass
letPersonClass = (function () {
    "use strict"

    const PersonClass2 = function (name) {

        //确保通过关键字new调用该函数
        if (typeof new.target === "undefined") {
            throw new Error("必须通过关键字new调用构造函数")
        }

        this.name = name;
    }

    Object.defineProperty(PersonClass2.prototype, "sayName", {
        value: function () {
            //确保不会通过关键字new调用该方法
            if (typeof new.target !== "undefined") {
                throw new Error("不可使用关键字new调用该方法");
            }

            console.log(this.name);
        },
        enumerable: false,
        writable: true,
        configurable: true
    });

    return PersonClass2;
}());

//在JavaScript引擎中，类表达式的实现与类声明稍有不同。对于类声明来说，通过let定义的外部绑定通过const定义的内部绑定具有相同名称；而命名类表达式通过const定义名称，从而PersonCalss2只能在类的内部使用。

// 作为一等公民的类
//在程序中，一等公民是指一个可以传入函数，可以从函数返回，并且可以赋值给变量的值。JS函数是一等公民（也被称作头等函数），这也正是JS中的一个独特之处。
// ES6延续了这个传统，将类也设计为一等公民，允许通过多种方式使用类的特性。例如，可以将类作为参数传入函数中：
function createObject(classDef) {
    return new classDef();
}

let obj = createObject(class {
    sayHi() {
        console.log("Hi!");
    }
});
obj.sayHi();        //"Hi!"

// 在这个示例中，调用createObject()函数时传入一个匿名类表达式作为参数，然后通过关键字new实例化这个类并返回实例，将其储存在变量obj中。
// 类表达式还有另一种使用方式，通过立即调用类构造函数可以创建单例。用new调用类表达式，紧接着通过一对小括号调用这个表达式，例如：

let person = new class {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}("Nicholas");

person.sayName();       //"Nicholas"

//这里先创建一个匿名类表达式，然后立即执行。依照这种模式可以使用类语法创建单例，并且不会在作用域中暴露类的引用，气候的小括号表明正在调用一个函数，而且可以传参数给这个函数。我们也可以通过类似对象字面量的语法在类中创建访问器属性。

// 访问器属性
// 尽管应该在类构造函数中创建自己的属性，但是类也支持直接在原型上定义访问器属性。创建getter时，需要在关键字get后紧跟一个空格和相应的标识符；创建setter时，只需把关键字get替换为set即可，像这样：
class CustomHTMLElement{
    constructor(element){
        this.element = element;
    }
    get html(){
        return this.element.innerHTML;
    }
    set heml(value){
        this.element.innerHTML = value;
    }
}

var descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype,"html");
console.log("get" in descriptor);       //true
console.log("set" in descriptor);       //true
console.log(descriptor.enumberable);    //false

// 这段代码中的CustomHTMLElement类是一个针对现有DOM元素的包装器，并通过getter和setter方法将这个元素的innerHTML方法委托给html属性，这个访问器属性是在CustomHTMLElement.prototype上创建的。与其他方法一样，创建时声明该属性不可枚举。
// 非类形式的等价实现：
//等同于上一个示例
let CustomHTMLElement = (function(){
    "use strict";

    const CustomHTMLElement = function(element){
        //确保通过关键字new调用该函数
        if(typeof new.target === "undefined"){
            throw new Error("必须通过关键字new调用构造函数");
        }

        this.element = element;
    }

    Object.defineProperty(CustomHTMLElement.prototype,"html",{
        enumberable:false,
        configurable:true,
        get:function(){
            return this.element.innerHTML;
        },
        set:function(value){
            this.element.innerHTML = value;
        }
    });

    return CustomHTMLElement;
})

// 由上可见，比起非类等效实现，类语法可以节省很多代码。在非类等效实现中，仅html访问器属性定义的代码量就与类声明一样多。

// 可计算成员名称
// 类和对象字面量还有更多相似之处，类方法和访问器属性也支持使用可计算名称。就像对象字面量中一样，永方括号包裹一个表达式即可使用可计算名称，例如：
let methodName = "sayName";

class PersonClass{
    constructor(name){
        this.name = name;
    }

    [methodName](){
        console.log(this.name);
    }
};

let me = new PersonClass("Nicholas");
me.sayName();       //"Nicholas"

//这个版本的PersonClass通过变量来给类定义中的方法命名，字符串"sayName"被赋值给methodName变量，然后methodName又被用于声明随后可直接访问的sayName()方法。
// 通过相同的方式可以在访问器属性中应用可计算名称，像这样：
let propertyName = "html";

class CustomHTMLElement{
    constructor(element){
        this.element = element;
    }

    get [propertyName](){
        return this.element.innerHTML;
    }
    set [propertyName](value){
        this.element.innerHTML = value;
    }
}
//在这里通过propertyName变量并使用getter和setter方法为类添加html属性，并且可以像往常一样通过.html访问该属性。
// 在类和对象字面量诸多的共同点中，除了方法、访问器属性及可计算名称上的共同点外，还需要了解另一个相似之处，也就是声称其方法。

//生成器方法
// 类中可以将任何方法定义成生成器。
class Myclass{
    *classIterator(){
        yield 1;
        yield 2;
        yield 3;
    }
}

let instance = new Myclass();
let iterator = instance.createIterator();
// 这段代码创建了一个名为MyClass的类，它有一个生成器方法createIterator()，其返回值为一个硬编码在生成器中的迭代器。如果用对象来表示集合，有希望通过简单的方法迭代集合中的值，那么生成器方法就派上用场了。数组、Set集合及Map集合为开发者们提供了多个生成器方法来于集合中的元素交互。
// 尽管生成器方法很实用，但如果你的类是用来表示值得集合的，那么为它定义一个默认迭代器会更有用。通过Symbol.iterator定义生成器方法即可为类定义默认迭代器现在可以将Collection的实例直接用于for-of循环中或用展开运算符操作它。
// 如果不介意在对象的实例中出现添加的方法和访问器属性，则可以将它们添加到类的原型中；如果希望它们只出现在类中，需要使用静态成员




