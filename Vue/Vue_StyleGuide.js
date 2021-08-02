//###必要的规则
/*#组件名为多个单词
组件名应该始终是多个单词的，根组件App以及<transition>、<component>之类的Vue内置组件除外
这样做可以避免跟现有以及未来的HTML元素相冲突，因为所有的HTML元素名称都是单个单词的。
*/
Vue.component('todo-item', {
  //...
});

export default {
  name: 'TodoItem',
  //
}

//#组件数据
/* 组件的data必须是函数
当在组件中使用 data property的时候（除了new Vue 外的任何地方），它的值必须是返回一个对象的函数
当 data 的值是一个对象，他会在这个组件的所有实例之间共享。
*/

// data:{
//     listTile:'',
//     todos:[]
// }

// 我们可能希望重用组件，允许用户维护多个列表（比如分为购物、心愿单、日常事务等）。这时会产生问题，因为每一个组件的实例都引用了相同数据对象，更改其中一个列表的标题就会改变其他每一个列表的标题。增删改一个待办事项的时候也是如此。
// 为了做到这一点每个实例必须生成一个独立的数据对象。JavaScript中，在一个函数中返回这个对象就可以

data: function() {
  return {
    listTitle: '',
    todos: []
  }
}

Vue.component('some-comp', {
  data: function () {
    return {
      foo: 'bar'
    }
  }
})
// 在一个vue文件中使用
export default {
  data() {
    return {
      foo: 'bar'
    }
  }
}
// Vue的根实例上直接使用对象是可以的
new Vue({
  data: {
    foo: 'bar'
  }
})

//#Prop定义
/* Prop定义应该尽量详细
至少需要指定其类型
他们写明了组件的API，所以很容易看懂组件的用法；
开发环境下，如果向一个组件提供格式不正确的prop，Vue将会警告，以帮助你捕获潜在的错误来源。
*/

// props: {
//     status: String
//   }

// props: {
//     status: {
//       type: String,
//       required: true,
//       validator: function (value) {
//         return [
//           'syncing',
//           'synced',
//           'version-conflict',
//           'error'
//         ].indexOf(value) !== -1
//       }
//     }
//   }

// #为v-for 设置键值

/* <ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul> */

// #避免v-if和v-for用在一起

/* 不要把v-if和v-for同时在同一个元素上
为了过滤一个列表中的项目：
v-for="user in users" v-if="user.isActive"
应该把users替换为一个计算属性（activeUsers），让其返回过滤后的列表
*/
/* 为了避免渲染本应该被隐藏的列表：
v-for="user in users" v-if="shouldShowUsers"
这种情况应将v-if移动至容器元素上（如ul、ol）
*/

/* <ul>
  <li
    v-for="user in users"
    v-if="user.isActive"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul> */

// 将会经过如下运算：
this.users.map(function (user) {
  if (user.isActive) {
    return user.name
  }
})

// 因此哪怕我们只渲染出一小部分用户的元素，也得在每次重渲染的时候遍历整个列表，不论活跃用户是否发生了变化。
// 通过将其更换为在如下的一个计算属性上遍历：

// computed: {
//     activeUsers: function () {
//       return this.users.filter(function (user) {
//         return user.isActive
//       })
//     }
//   }

/* <ul>
  <li
    v-for="user in activeUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul> */

/*
过滤后的列表只会在users数组发生相关变化时才会被重新计算，更高效的过滤
使用v-for="user in activeUsers"之后，我们在渲染的时候只遍历活跃用户，渲染更高效。
解耦渲染层的逻辑，可维护性（对逻辑的更改和拓展）更强 */

/* <ul v-if="shouldShowUsers">
  <li
    v-for="user in users"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul> */

// 通过将 v-if 移动到容器元素，我们不会再对列表中的每个用户检查 shouldShowUsers。取而代之的是，我们只检查它一次，且不会在 shouldShowUsers 为否的时候运算 v-for。

// #为组件样式设置作用域
/*
对于应用来说，顶级App组件和布局组件中的样式可以是全局的，但是其他所有组件都是有作用域的
对于组件库，我们应该更倾向于选用基于class的策略而不是scoped attribute
这让覆写内部样式更容易：使用了常人可理解的calss名称且没有太高的选择器优先级，而且不太会导致冲突。
*/

/* 如果你和其他开发者一起开发一个大型工程，或有时引入三方 HTML/CSS (比如来自 Auth0)，设置一致的作用域会确保你的样式只会运用在它们想要作用的组件上。

不止要使用 scoped attribute，使用唯一的 class 名可以帮你确保那些三方库的 CSS 不会运用在你自己的 HTML 上。比如许多工程都使用了 button、btn 或 icon class 名，所以即便你不使用类似 BEM 的策略，添加一个 app 专属或组件专属的前缀 (比如 ButtonClose-icon) 也可以提供很多保护。 */

/* <template>
  <button class="button button-close">X</button>
</template>

<!-- 使用 `scoped` attribute -->
<style scoped>
.button {
  border: none;
  border-radius: 2px;
}

.button-close {
  background-color: red;
}
</style> */

/* <template>
  <button :class="[$style.button, $style.buttonClose]">X</button>
</template>

<!-- 使用 CSS Modules -->
<style module>
.button {
  border: none;
  border-radius: 2px;
}

.buttonClose {
  background-color: red;
}
</style> */

/* <template>
  <button class="c-Button c-Button--close">X</button>
</template>

<!-- 使用 BEM 约定 -->
<style>
.c-Button {
  border: none;
  border-radius: 2px;
}

.c-Button--close {
  background-color: red;
}
</style> */

// #私有property名
// 使用模块作用域保持不允许外部访问的函数的私有性。如果无法做到这一点，就始终为插件、混入等不考虑作为对外公共API的自定义私有property使用$_前缀，并附带一个命名空间以回避和其他作者的冲突（比如 $_yourPluginName_）

var myGreatMixin = {
  // ...
  methods: {
    $_myGreatMixin_update: function () {
      // ...
    }
  }
}

// 甚至更好！
var myGreatMixin = {
  // ...
  methods: {
    publicMethod() {
      // ...
      myPrivateFunction()
    }
  }
}

function myPrivateFunction() {
  // ...
}

export default myGreatMixin