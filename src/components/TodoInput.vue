<template>
  <div>
    <h1>Todo input</h1>
    <input type="text" v-model="value" />
    <button @click="addItem">add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    };
  },
  methods: {
    addItem(event) {
      // TODO 배열에 value 추가하기
      this.$emit('addItem', this.value);
      this.value = '';
    },
  },
};
</script>

<style></style>
