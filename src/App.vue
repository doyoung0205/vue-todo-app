<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addItem="addItem"></TodoInput>
    <!-- v-bind:프롭스 속성 이름 = "상위 컴포넌트의 데이터 이름" -->
    <TodoList v-bind:todos="todoItems" v-on:removeItem="removeItem"></TodoList>
    <TodoFooter v-on:removeAllTodoItem="removeAllTodoItem"></TodoFooter>
    <!-- ref="todoList" -->
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';
export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    removeAllTodoItem() {
      // this.$refs.todoList.removeAllTodoItem();
      /*
          암묵적으로 명시하는 것이다. 
          VUE 개발자 도구에서 DEBUG 를 추적하기 어렵다.
       */
      // this.todoItems = [];
      // localStorage.clear();
    },
    addItem(value) {
      console.log('value', value);
      localStorage.setItem(value, value);
      this.todoItems.push(value);
    },
    fetchTodoItems() {
      for (let i = 0; i < localStorage.length; i++) {
        const item = localStorage.getItem(localStorage.key(i));
        this.todoItems.push(item);
      }
    },
    removeItem(todoItem, index) {
      console.log(`${index} 번째 TodoItem :: '${todoItem}' 입니다.`);
      console.log('removeItem ::', index, todoItem);
      this.todoItems.splice(index, index + 1);
      localStorage.removeItem(todoItem);
    },
  },
  created() {
    this.fetchTodoItems();
  },
};
</script>

<style></style>
