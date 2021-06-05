**在vue使用jsx写法绑定点击事件时，以下代码点击不能正常弹窗的是**

A、<li onClick = {this.showDialog(index)}>点击我弹窗</li>

B、<li onClick = {() => this.showDialog(index)}>点击我弹窗</li>

C、<li onClick = {() => this.showDialog.call(this, index)}>点击我弹窗</li>

D、<li onClick = {this.showDialog.bind(this, index)}>点击我弹窗</li>

------

**2、**知识点： 

Vue基础与实战

**问题：****请在渲染函数中补充代码完成效果相当于v-model的指令**`props: ['value'], render: function (createElement) {  var self = this  return createElement('input', {   domProps: { value: self.value },   on: {    input: function (event) {     // 此处补充代码    }   }  } )}`

A、self.$emit('value', event.target.value)

B、self.$emit('input', event.target.value)

C、self.$emit('update:value', event.target.value)

D、self.$emit('update:input', event.target.value)

------

**3、**知识点： 

Vue基础与实战

**问题：****关于函数式组件说法不正确的是**`#假设组件Message是函数式组件 <message ref="msg"/>`

A、函数式组件无状态 (没有响应式数据)，也没有实例

B、函数式组件的渲染开销相对于普通的组件来说要低很多

C、无法从组件的render函数的第二个参数context上下文中获取到组件中的插槽

D、上面代码中子组件为函数式组件，父组件无法通过this.$ref.msg访问子组件内容

------

**4、**知识点： 

Vue基础与实战

**问题：****将init函数写****到下列那个vue钩子或属性****中最先执行**

A、watch(immediate: true)

B、 created

C、mounted

D、beforeMount

------

**5、**知识点： 

Vue基础与实战

**问题：****下列****vue****钩子****或属性****最先初始化的是**

A、data

B、computed

C、watch

D、 prop

------

**6、**知识点： 

Vue基础与实战

**问题：****下列关于vuex使用错误的**

A、组件实例中使用this.$store.commit('mutationA', 1)修改state中数据

B、action配合mutation处理异步操作state数据

C、 将vuex的state用v-model绑到input上

D、需要管理的数据较多且涉及不同模块时候使用modules

------

**7、**知识点： 

Vue基础与实战

**问题：****下列关于vuex、localStorage和** **sessionStorage****理解错误的是**

A、localStorage是以文件的方式存储在本地是持久的

B、 刷新页面sessionStorage被清除

C、 vuex用于管理前端公共数据，组件共享

D、某些情况下localStorage可以代替vuex

------

**8、**知识点： 

Vue基础与实战

**问题：****下列说法正确的是**

A、在 beforeCreate 时 data,computed,wath 方法可以访问

B、在 beforeMount 时,得不到具体的 DOM，vue 挂载的根节点仍未创建

C、当父组件挂载完成之后，子组件才会挂载

D、当没有数据关联时，兄弟组件之间的更新和销毁互不关联

------

**9、**知识点： 

Vue基础与实战

**问题：****在vue中下列对数据****的****操作会被侦听到的是**

A、delete this.obj.a

B、this.list.splice(2, 1, 1)

C、this.arr[2] = ‘test’

D、this.list.length = 0

------

**10、**知识点： 

Vue基础与实战

问题：下面例子中，”hello world”字体的颜色是// parent.vue...<div class="parent">  <children style="color:#222">    <span>hello world!</span>  </children></div>...<style>.parent {  color: #111;}</style>// children.vue<template>  <div class="children">     <slot style="color: #333" class="slot"></slot>  </div></template>...<style>.children {  Color: #444;}.slot {  Color: #555 !impoartent;}</style>

A、#111

B、#222

C、#444

D、#555

------

**11、**知识点： 

Vue基础与实战

问题：下列关于代码执行顺序说法不正确的是<ul @click="clickZero">  <li @click.self="clickOne">点击One</li>  <li @click.prevent="clickTwo">点击Two</li>  <li @click.stop="clickThree">点击Three</li>  <component @click.capture="clickFour">点击Four</component></ul>...component.vue<div>  <slot></slot></div>

A、点击One，执行顺序为 clickOne => clickZero

B、点击Two，执行顺序为 clickTwo => clickZero

C、点击Three，执行顺序为 clickThree => clickZero

D、点击Four，执行顺序为 clickZero

------

**12、**知识点： 

Vue基础与实战

**问题：****下列关于vue自定义指令说法不正确的是**`# 指令1 Vue.directive('position-change', {  bind: function (el, binding, vnode) {   el.style.position = 'fixed'   const direction = // 补充代码   el.style[direction] = binding.value + 'px'  } })# 指令2 Vue.directive('color-change', function (el, binding) {  el.style.backgroundColor = binding.value`

A、指令对象包含bind、inserted、update、componentUpdateted、unbind这5个钩子函数

B、指令color-change无法正确执行，原因是缺少相关的钩子函数

C、指令钩子函数中的参数oldVnode仅在update和componentUpdateted钩子中可用

D、指令1处补充代码应为“binding.arg”

------

**13、**知识点： 

Vue基础与实战

**问题：****在渲染以下关于学生的数据，key的使用方式，最可取的是**`<template>  <div v-for="stu in students" :key=""/> </template> export default {  data () {   return {    students: [{     id: 3116002164, // 学号（值为正整数且唯一）     name: '小明', // 姓名     age: 21, // 年龄     sex: '男', // 性别     birthday: '0502', // 生日     grade: 2016 // 入学年份    }]   }  }`

A、:key="index"

B、:key="stu.name + age + sex"

C、:key="stu.id"

D、以上都可

------

**14、**知识点： 

Vue基础与实战

**问题：** 以下代码的打印顺序是`<template>`` ``<div id=``"app"``>hello world</div>``</template>``<script>``export ``default` `{`` ``data () {``  ``return` `{``   ``a: 2``  ``}`` ``},`` ``mounted () {``  ``console.log(``'=================='``)``  ``console.log(``this``.a)``  ``console.log(``this``.$el)`` ``},`` ``created () {``  ``console.log(``this``.a)``  ``console.log(``this``.$el)`` ``}``}``</script>`

A、==================、2、<div id="app">hello world</div>、2、undefined

B、undefined、undefined、==================、2、<div id="app">hello world</div>

C、2、undefined、==================、2、<div id="app">hello world</div>

D、2、<div id="app">hello world</div>、==================、2、<div id="app">hello world</div>

------

**15、**知识点： 

Vue基础与实战

**问题：****、****以下甲乙两个vue实例，哪一个能触发watch**`// 甲 export default {  data () {   return {    students: {     id: 3116002164,     name: '小明'    }   }  },  watch: {   students: {    handler () {     console.log('学生信息发生了变化')    },    deep: true   }  },  mounted () {   this.students.age = 18  } }   // 乙 export default {  data () {   return {    students: [{     id: 3116002164,     name: '小明'    }]   }  },  watch: {   students () {    console.log('学生信息发生了变化')   }  },  mounted () {   this.students.push({    id: 3216002248,    name: '小琪'   })  }`

A、甲乙都可以

B、甲不可以，乙可以

C、甲可以，乙不可以

D、甲乙都不可以

------

**16、**知识点： 

Vue基础与实战

**问题：****以下关于v-show和v-if的说法，错误的是**

A、在节点上使用v-show="false"和使用css样式display: none效果一致

B、在节点上使用v-if="false",则该节点一定不会被渲染到真实dom上

C、如果节点元素需要频繁的显示和隐藏,应该使用v-show更合适

D、<template>是HTML5的标签,可以在vue中的template标签上使用v-show

------

二、多选题（总分60分，共15题）

**1、**知识点： 

Vue基础与实战

**问题:****下面 vue 使用中不能达到预期的是**

A、在beforeCreated钩子中访问组件实例的data

B、在beforeCreated钩子中修改组件实例的data

C、已知在computed中已有一个属性sum，增加一个属性sum2，sum2中可以引用this.sum并且不会出错

D、在vue-devtools中选中某个组件后，可以在控制台通过输入$vm来访问实例

------

**2、**知识点： 

Vue基础与实战

**问题:****代码中****"XXX"****使用什么****替代****可以使图片组件正常显示**`props: ['src'], render: function (createElement) {  var self = this  return createElement('img', {   XXX: {    src: self.src   },  }`

A、attrs

B、props

C、domAttrs

D、domProps

------

**3、**知识点： 

Vue基础与实战

**问题:****不能获取组件实例this的导航守卫是**

A、beforeRouteEnter

B、beforeRouteUpdate

C、beforeRouteLeave

D、beforeEnter

------

**4、**知识点： 

Vue基础与实战

**问题:****vue中使用jsx渲染列表可行的是**

A、{ this.list.map(item => <li>{item}</li>) }

B、{ this.list.forEach(item => <li>{item}</li>) }

C、{ Array.from(this.list, item => (<li>{item}</li>)).valueOf() }

D、{ this.list.reduce((html,item) => html.concat(<li>{item}</li>), []) }

------

**5、**知识点： 

Vue基础与实战

**问题:****下列哪些数组方法会触发响应式**

A、slice

B、pop

C、concat

D、shift

------

**6、**知识点： 

Vue基础与实战

**问题:****下列prop使用开发环境下不会报错的是**

A、子组件直接修改类型为Object的prop（非null）中的属性

B、子组件直接修改类型为Number的prop

C、子组件使用$emit('update: prop')修改类型为Object的prop（非null）

D、子组件使用$emit('update: prop')修改类型为Number的prop

------

**7、**知识点： 

Vue基础与实战

**问题:****关于VueRouter两种模式下列说法正确的是**

A、hash模式下的跳转新的路由表现为#后面的路径变化

B、history模式下的可以跳转到与当前url同源的任意url

C、hash模式下是通过pushState、replaceState两个方法改变 url 地址

D、hash模式下后端没做处理的话，刷新页面会报404

------

**8、**知识点： 

Vue基础与实战

**问题:**下面说法正确的是<message msg="这是一条消息"/>
\# message组件<template functional> <div class="hello">  <h3>{{ data.attrs.msg }}</h3>  <h2>{{ msg }}</h2> </div></template>

<script>export default { name: 'Message', props: ['msg']}</script>

A、控制台报错，提示 Property or method "data" is not defined

B、控制台不报错，注释“props: ['msg'] ”后h3标签内容正常显示“这是一条消息 ”

C、控制台报错，注释h3标签后h2标签内容正常显示“这是一条消息 ”

D、控制台不报错，且无任何显示

------

**9、**知识点： 

Vue基础与实战

**问题:****以下哪个是vue的生命周期**

A、beforeCreate

B、created

C、afterMounted

D、beforeDestroy

------

**10、**知识点： 

Vue基础与实战

**问题:****以下非自定义vue指令的用法在jsx中可行的是**

A、<input vModel={this.newTodoText} />

B、<input vOn:click={this.newTodoText} />

C、<p vText={text} />

D、<p domPropsInnerHTML={html} />

------

**11、**知识点： 

Vue基础与实战

**问题:****Vue中关于diff过程说****法****错误的是**

A、当oldStartIndex < oldEndIndex，可以认为oldChild先遍历完，此时newStartIndex和newEndIndex之间的vnode是新增的

B、如果oldStartVnode和newEndVnode节点相同，则直接用新节点复用老节点，将oldstartVnode移到oldEndVnode节点之后，oldStartIndex++,newEndIndex--

C、首先利用key值进行对比，如不满足则标记newStartIndex、newEndIndex、oldStartIndex、oldEndIndex进行新旧对比操作

D、当newStartIndex > newEndIndex，则可以认为newChild先遍历完,此时oldStartIdx和oldEndIndex之间的vnode是移除的

------

**12、**知识点： 

Vue基础与实战

**问题:****以下哪个属于VUE的全局api**

A、Vue.set

B、Vue.version

C、Vue.mixin

D、Vue.component

------

**13、**知识点： 

Vue基础与实战

**问题:****jsx中绑定样式的可行操作是**

A、<p style={ color: 'red' }></p>

B、<p style={ 'color: red' }></p>

C、<p style={{ color: 'red' }}></p>

D、<p { ...{ style: { color: 'red' } } }></p>

------

**14、**知识点： 

Vue基础与实战

**问题:****下面关于生命周期的说法，正确的是**

A、在mounted执行时，当前组件已经被挂载到文档中

B、在beforeMount中可以访问data中的数据

C、在beforeMount中this.$el的值为undefined

D、created钩子函数中可以访问methods和data

------

**15、**知识点： 

Vue基础与实战

**问题:****vue生命钩子中关于actvated介绍正确的是**

A、actvated 是在 mounted 之后 beforeUpdate 之前执行

B、actvated 是在 created 之后 beforemount 之前执行

C、actvated 只有在 keep-alive 的组件中才会被触发

D、重新切回 keep-alive 组件时，actvated 会重新调用，mounted 则不会









单选：

1-5     ABCAD

6-10   CBDBB

11-15 CBCCB

16D

多选：

1AB 2AD 3AD 4ACD 5BD 

6ACD 7AB 8BD 9ABD 10 ABD

11AC 12 ABCD 13BCD 14BCD 15ACD



