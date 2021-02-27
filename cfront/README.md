# cfront

<h6>订单出发——结合 Element UI 开发委托终端页面</h6>

## 知识点

### Element UI

主要运用到了以下 Element UI 组件库中的常用组件：

* input
* button
* table
* row/col
* autocomplete
* card
* input-number

### 跨组件通信

利用 vue-bus 与 prop 进行跨组件通信。

```js
import Vue from 'vue';
import VueBus from 'vue-bus';

Vue.use(VueBus);

// Listen and clean
created() {
  this.$bus.on('add-todo', this.addTodo);
  this.$bus.once('once', () => console.log('This listener will only fire once'));
},
beforeDestroy() {
  this.$bus.off('add-todo', this.addTodo);
},
methods: {
  addTodo(newTodo) {
    this.todos.push(newTodo);
  }
}
```

具体使用方法详见：[vue-bus](https://github.com/yangmingshan/vue-bus)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
