<template>
  <div class="clearAllContainer">
    <!-- <button @click="removeAllTodoItem">모두 삭제</button>  TEST 코드 짤 때 더 유용-->
    <button @click="removeAllTodoItem" class="clearAllBtn">
      모두 삭제
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    removeAllTodoItem() {
      this.$store.commit('removeAllTodoItem');
    },
  },
};
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>
