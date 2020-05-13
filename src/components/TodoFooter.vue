<template>
  <div>
    <!-- <button @click="removeAllTodoItem">모두 삭제</button>  TEST 코드 짤 때 더 유용-->
    <button @click="$emit('removeAllTodoItem')">모두 삭제</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // removeAllTodoItem() {
    //   this.$emit('removeAllTodoItem');
    // },
  },
};
</script>

<style></style>
