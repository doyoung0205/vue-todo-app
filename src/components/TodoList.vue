<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todos" v-bind:key="index">
        <div>
          <!-- 아래 삭제 버튼을 눌렀을 떄 동작하게 코드를 변경하세요 -->
          <span>{{ todoItem }}</span>
          <button @click="removeItem(todoItem, index)">remove</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['todos'],
  // data() {
  //   return {
  //     todoItems: [],
  //   };
  // },
  // created() {
  //   this.fetchTodoItems();
  // },
  methods: {
    // fetchTodoItems() {
    //   for (let i = 0; i < localStorage.length; i++) {
    //     const item = localStorage.getItem(localStorage.key(i));
    //     this.todoItems.push(item);
    //   }
    // },
    removeItem(todoItem, index) {
      this.$emit('removeItem', todoItem, index);
    },
    // removeAllTodoItem() {
    //   this.todoItems = [];
    //   localStorage.clear();
    // },
  },
};
</script>

<style></style>
